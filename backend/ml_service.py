"""
WatchWise ML Recommendation Service
Serves content-based recommendations using TF-IDF and Cosine Similarity
across 45,447 movies and 50,000 TF-IDF features.
"""

import os
import pickle
import numpy as np
from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
from sklearn.metrics.pairwise import linear_kernel

app = FastAPI(title="WatchWise ML Engine", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DF_PATH = os.path.join(BASE_DIR, "df.pkl")
INDICES_PATH = os.path.join(BASE_DIR, "indices.pkl")
TFIDF_MAT_PATH = os.path.join(BASE_DIR, "tfidf_matrix.pkl")

print("Loading ML dataset and 50,000 feature matrix...")
df = pickle.load(open(DF_PATH, "rb"))
indices = pickle.load(open(INDICES_PATH, "rb"))
tfidf_matrix = pickle.load(open(TFIDF_MAT_PATH, "rb"))
print(f"[OK] Loaded {len(df)} movies and TF-IDF matrix shape {tfidf_matrix.shape}")

# Ensure clean title index lookup
title_to_idx = {}
for idx, title in enumerate(df["title"]):
    if isinstance(title, str):
        title_to_idx[title.lower().strip()] = idx

def pd_not_null(val):
    return val is not None and str(val) != "nan" and str(val) != ""

def row_to_movie(idx, row, sim_score=None):
    genres_raw = str(row["genres"]) if pd_not_null(row["genres"]) else ""
    genres = [g for g in genres_raw.split() if g and g != "nan"]
    movie = {
        "tmdb_id": 100000 + int(idx),
        "title": str(row["title"]),
        "genres": genres,
        "overview": str(row["overview"]) if pd_not_null(row["overview"]) else "",
        "rating": float(row["vote_average"]) if pd_not_null(row["vote_average"]) else 0.0,
        "popularity": float(row["popularity"]) if pd_not_null(row["popularity"]) else 0.0,
    }
    if sim_score is not None:
        movie["similarity_score"] = round(float(sim_score), 4)
    return movie

@app.get("/health")
def health_check():
    return {
        "status": "ok",
        "dataset": f"{len(df):,} movies loaded",
        "features": tfidf_matrix.shape[1],
        "movies_count": len(df)
    }

@app.get("/recommend")
def get_recommendations(title: str = Query(..., description="Movie title"), limit: int = 10):
    t_clean = title.lower().strip()
    idx = title_to_idx.get(t_clean)
    
    # If not exact match, find closest title
    if idx is None:
        matches = df[df["title"].str.lower().str.contains(t_clean, na=False, regex=False)]
        if not matches.empty:
            idx = matches.index[0]
        else:
            return {"status": "error", "message": f"Movie '{title}' not found in 45,447 dataset", "data": []}

    # Compute cosine similarity using linear_kernel
    sim_scores = linear_kernel(tfidf_matrix[idx], tfidf_matrix).flatten()
    
    # Top similar indices (excluding the movie itself)
    top_indices = sim_scores.argsort()[::-1][1 : limit + 1]
    
    results = []
    for i in top_indices:
        row = df.iloc[i]
        results.append(row_to_movie(i, row, sim_scores[i]))

    return {
        "status": "ok",
        "query_movie": str(df.iloc[idx]["title"]),
        "count": len(results),
        "data": results
    }

@app.get("/search")
def search_movies(query: str = Query(..., description="Search query"), limit: int = 20):
    q = query.lower().strip()
    matches = df[df["title"].str.lower().str.contains(q, na=False, regex=False)]
    
    results = []
    for idx, row in matches.head(limit).iterrows():
        results.append(row_to_movie(idx, row))

    return {"status": "ok", "query": query, "count": len(results), "data": results}

@app.get("/genre")
def get_by_genre(genre: str = Query(..., description="Genre name"), limit: int = 48, offset: int = 0):
    """Return movies filtered by genre, sorted by popularity desc"""
    import pandas as pd
    g = genre.strip()
    
    # Filter rows where genres column contains the genre word
    mask = df["genres"].str.contains(g, case=False, na=False, regex=False)
    filtered = df[mask].copy()
    
    # Convert popularity to numeric (some values may be strings or NaN)
    filtered["_pop_num"] = pd.to_numeric(filtered["popularity"], errors="coerce").fillna(0.0)
    
    # Sort by popularity descending
    filtered = filtered.sort_values("_pop_num", ascending=False)
    
    total = len(filtered)
    page = filtered.iloc[offset:offset+limit]
    
    results = []
    for idx, row in page.iterrows():
        results.append(row_to_movie(idx, row))

    return {
        "status": "ok",
        "genre": genre,
        "total": total,
        "count": len(results),
        "offset": offset,
        "limit": limit,
        "data": results
    }

@app.get("/movie/{movie_id}")
def get_movie_by_id(movie_id: int):
    actual_idx = movie_id - 100000 if movie_id >= 100000 else movie_id
    if 0 <= actual_idx < len(df):
        row = df.iloc[actual_idx]
        return {
            "status": "ok",
            "data": row_to_movie(actual_idx, row)
        }
    return {"status": "error", "message": "Movie not found"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
