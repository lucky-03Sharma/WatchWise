# WatchWise — AI Movie Recommendation Engine

A full-stack AI-powered movie recommendation web application built with **Node.js + Express**, **Python FastAPI ML service**, and a **vanilla HTML/CSS/JS** frontend.

## 🎬 Features

- 🧠 **AI-Powered Recommendations** — TF-IDF cosine similarity across 45,447 movies
- 🎭 **Genre Filtering** — Browse movies by Action, Drama, Comedy, Horror, Sci-Fi and more
- 🔍 **Real-Time Search** — Full-text search powered by ML engine
- ❤️ **Favorites & Watchlist** — Save movies with localStorage persistence
- 🎨 **Premium Dark UI** — Glassmorphism design with smooth animations
- 📽️ **Movie Modals** — Detailed view with genre-accurate recommendations

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | HTML5, CSS3, Vanilla JS |
| Backend | Node.js, Express.js |
| ML Engine | Python FastAPI, scikit-learn, pandas |
| Database | MongoDB (optional, falls back to in-memory) |
| Dataset | TMDB 45,447 movies |

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- Python 3.9+
- MongoDB (optional)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/lucky-03Sharma/WatchWise.git
cd WatchWise

# 2. Install Node.js dependencies
cd backend
npm install

# 3. Install Python dependencies
cd ..
pip install -r requirements.txt

# 4. Configure environment
# On Mac/Linux:
cp backend/.env.example backend/.env
# On Windows:
copy backend\.env.example backend\.env

# Edit backend/.env with your settings (optional)
```

### Running the App

**Terminal 1 — Python ML Service:**
```bash
python backend/ml_service.py
# ML Engine starts at http://127.0.0.1:8000
```

**Terminal 2 — Node.js Backend:**
```bash
cd backend
npm start
# App starts at http://localhost:5000
```

**Open your browser at:** `http://localhost:5000`

## 📁 Project Structure

```
WatchWise/
├── backend/
│   ├── data/
│   │   └── store.js          # 254 curated movies with verified TMDB posters
│   ├── routes/
│   │   ├── movies.js         # Movie API routes + ML integration
│   │   ├── library.js        # Favorites & Watchlist API
│   │   └── auth.js           # Authentication routes
│   ├── ml_service.py         # Python FastAPI ML recommendation engine
│   ├── server.js             # Express app entry point
│   ├── package.json
│   ├── .env.example          # Environment variables template
│   └── .env                  # Your local config (git-ignored)
├── public/
│   ├── index.html            # Single-page application
│   ├── app.js                # Frontend logic & state management
│   ├── style.css             # Premium dark theme CSS
│   └── hero-bg.jpg           # Cinematic hero background
├── df.pkl                    # 45,447 movie ML dataset
├── indices.pkl               # Movie title index
├── tfidf.pkl                 # TF-IDF vectorizer
├── tfidf_matrix.pkl          # Pre-computed TF-IDF matrix
├── requirements.txt          # Python dependencies
├── .gitignore
└── README.md
```
deployed Link :- https://watchwise-anrq.onrender.com/
## 🤖 ML Architecture

The recommendation engine uses **TF-IDF (Term Frequency-Inverse Document Frequency)** vectorization on movie metadata (title, genres, overview, tags) combined with **cosine similarity** to find similar movies.

- **Dataset**: 45,447 TMDB movies
- **Features**: 50,000 TF-IDF features
- **Algorithm**: Cosine Similarity via `sklearn.metrics.pairwise.linear_kernel`
- **Serving**: FastAPI with `/recommend`, `/genre`, `/search` endpoints

## 📄 License

MIT License — feel free to fork and build upon this project!
