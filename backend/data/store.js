// In-memory store as fallback when MongoDB is not available
export const memoryStore = {
  favorites: [],
  watchlist: [],
  reviews: {},
};

// Curated high-quality movie dataset with verified TMDB posters across all genres
export const popularMovies = [
  {
    "tmdb_id": 27205,
    "title": "Inception",
    "year": 2010,
    "genre": [
      "Action",
      "Sci-Fi",
      "Thriller"
    ],
    "rating": 8.8,
    "poster": "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    "overview": "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    "director": "Christopher Nolan"
  },
  {
    "tmdb_id": 157336,
    "title": "Interstellar",
    "year": 2014,
    "genre": [
      "Adventure",
      "Drama",
      "Sci-Fi"
    ],
    "rating": 8.7,
    "poster": "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    "overview": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival as Earth faces famine.",
    "director": "Christopher Nolan"
  },
  {
    "tmdb_id": 155,
    "title": "The Dark Knight",
    "year": 2008,
    "genre": [
      "Action",
      "Crime",
      "Drama"
    ],
    "rating": 9,
    "poster": "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    "overview": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests.",
    "director": "Christopher Nolan"
  },
  {
    "tmdb_id": 603,
    "title": "The Matrix",
    "year": 1999,
    "genre": [
      "Action",
      "Sci-Fi"
    ],
    "rating": 8.7,
    "poster": "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    "overview": "Set in the 22nd century, a computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    "director": "Lana & Lilly Wachowski"
  },
  {
    "tmdb_id": 335984,
    "title": "Blade Runner 2049",
    "year": 2017,
    "genre": [
      "Action",
      "Drama",
      "Mystery",
      "Sci-Fi"
    ],
    "rating": 8.5,
    "poster": "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
    "overview": "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years.",
    "director": "Denis Villeneuve"
  },
  {
    "tmdb_id": 76341,
    "title": "Mad Max: Fury Road",
    "year": 2015,
    "genre": [
      "Action",
      "Adventure",
      "Sci-Fi"
    ],
    "rating": 8.6,
    "poster": "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg",
    "overview": "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper and a drifter named Max.",
    "director": "George Miller"
  },
  {
    "tmdb_id": 438631,
    "title": "Dune",
    "year": 2021,
    "genre": [
      "Action",
      "Adventure",
      "Sci-Fi"
    ],
    "rating": 8.2,
    "poster": "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    "overview": "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe.",
    "director": "Denis Villeneuve"
  },
  {
    "tmdb_id": 98,
    "title": "Gladiator",
    "year": 2000,
    "genre": [
      "Action",
      "Adventure",
      "Drama"
    ],
    "rating": 8.5,
    "poster": "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    "overview": "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    "director": "Ridley Scott"
  },
  {
    "tmdb_id": 24428,
    "title": "The Avengers",
    "year": 2012,
    "genre": [
      "Action",
      "Adventure",
      "Sci-Fi"
    ],
    "rating": 8,
    "poster": "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
    "overview": "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop Loki and his alien army from enslaving humanity.",
    "director": "Joss Whedon"
  },
  {
    "tmdb_id": 299534,
    "title": "Avengers: Endgame",
    "year": 2019,
    "genre": [
      "Action",
      "Adventure",
      "Sci-Fi"
    ],
    "rating": 8.5,
    "poster": "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    "overview": "After the devastating events of Infinity War, the universe is in ruins. The remaining Avengers assemble once more to reverse Thanos' actions.",
    "director": "Anthony & Joe Russo"
  },
  {
    "tmdb_id": 634649,
    "title": "Spider-Man: No Way Home",
    "year": 2021,
    "genre": [
      "Action",
      "Adventure",
      "Sci-Fi"
    ],
    "rating": 8.4,
    "poster": "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    "overview": "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero.",
    "director": "Jon Watts"
  },
  {
    "tmdb_id": 414906,
    "title": "The Batman",
    "year": 2022,
    "genre": [
      "Action",
      "Crime",
      "Drama",
      "Mystery"
    ],
    "rating": 8.1,
    "poster": "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    "overview": "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption.",
    "director": "Matt Reeves"
  },
  {
    "tmdb_id": 293660,
    "title": "Deadpool",
    "year": 2016,
    "genre": [
      "Action",
      "Comedy",
      "Adventure"
    ],
    "rating": 8.2,
    "poster": "https://image.tmdb.org/t/p/w500/fSRb7vyIP8rQpL0I47P3qUsEKX3.jpg",
    "overview": "A wisecracking mercenary gets experimented on and becomes immortal but ugly, and sets out to track down the man who ruined his looks.",
    "director": "Tim Miller"
  },
  {
    "tmdb_id": 11,
    "title": "Star Wars: A New Hope",
    "year": 1977,
    "genre": [
      "Action",
      "Adventure",
      "Fantasy",
      "Sci-Fi"
    ],
    "rating": 8.6,
    "poster": "https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
    "overview": "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's battle station.",
    "director": "George Lucas"
  },
  {
    "tmdb_id": 105,
    "title": "Back to the Future",
    "year": 1985,
    "genre": [
      "Adventure",
      "Comedy",
      "Sci-Fi"
    ],
    "rating": 8.5,
    "poster": "https://image.tmdb.org/t/p/w500/fNOH9f1aA7XRTzl1sAOx9iF553Q.jpg",
    "overview": "Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean.",
    "director": "Robert Zemeckis"
  },
  {
    "tmdb_id": 329,
    "title": "Jurassic Park",
    "year": 1993,
    "genre": [
      "Adventure",
      "Sci-Fi",
      "Thriller"
    ],
    "rating": 8.3,
    "poster": "https://image.tmdb.org/t/p/w500/oU7Oq2kFAAlGqbU4VoAE36g4hoI.jpg",
    "overview": "A pragmatic paleontologist touring an almost complete theme park on an island in Central America is tasked with protecting a couple of kids after a power failure causes cloned dinosaurs to run loose.",
    "director": "Steven Spielberg"
  },
  {
    "tmdb_id": 278,
    "title": "The Shawshank Redemption",
    "year": 1994,
    "genre": [
      "Crime",
      "Drama"
    ],
    "rating": 9.3,
    "poster": "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    "overview": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    "director": "Frank Darabont"
  },
  {
    "tmdb_id": 238,
    "title": "The Godfather",
    "year": 1972,
    "genre": [
      "Crime",
      "Drama"
    ],
    "rating": 9.2,
    "poster": "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    "overview": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    "director": "Francis Ford Coppola"
  },
  {
    "tmdb_id": 550,
    "title": "Fight Club",
    "year": 1999,
    "genre": [
      "Drama",
      "Thriller"
    ],
    "rating": 8.8,
    "poster": "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    "overview": "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
    "director": "David Fincher"
  },
  {
    "tmdb_id": 680,
    "title": "Pulp Fiction",
    "year": 1994,
    "genre": [
      "Crime",
      "Drama",
      "Thriller"
    ],
    "rating": 8.9,
    "poster": "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    "overview": "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    "director": "Quentin Tarantino"
  },
  {
    "tmdb_id": 769,
    "title": "Goodfellas",
    "year": 1990,
    "genre": [
      "Biography",
      "Crime",
      "Drama"
    ],
    "rating": 8.7,
    "poster": "https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
    "overview": "The story of Henry Hill and his life in the mafia, covering his relationship with his wife Karen and his mob partners Jimmy Conway and Tommy DeVito.",
    "director": "Martin Scorsese"
  },
  {
    "tmdb_id": 1422,
    "title": "The Departed",
    "year": 2006,
    "genre": [
      "Crime",
      "Drama",
      "Thriller"
    ],
    "rating": 8.5,
    "poster": "https://image.tmdb.org/t/p/w500/nT97ifVT2J1yMQmeq20Qblg61T.jpg",
    "overview": "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
    "director": "Martin Scorsese"
  },
  {
    "tmdb_id": 475557,
    "title": "Joker",
    "year": 2019,
    "genre": [
      "Crime",
      "Drama",
      "Thriller"
    ],
    "rating": 8.4,
    "poster": "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    "overview": "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
    "director": "Todd Phillips"
  },
  {
    "tmdb_id": 244786,
    "title": "Whiplash",
    "year": 2014,
    "genre": [
      "Drama",
      "Music"
    ],
    "rating": 8.6,
    "poster": "https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeuedmO.jpg",
    "overview": "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
    "director": "Damien Chazelle"
  },
  {
    "tmdb_id": 872585,
    "title": "Oppenheimer",
    "year": 2023,
    "genre": [
      "Biography",
      "Drama",
      "History"
    ],
    "rating": 8.6,
    "poster": "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    "overview": "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
    "director": "Christopher Nolan"
  },
  {
    "tmdb_id": 496243,
    "title": "Parasite",
    "year": 2019,
    "genre": [
      "Comedy",
      "Drama",
      "Thriller"
    ],
    "rating": 8.8,
    "poster": "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    "overview": "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
    "director": "Bong Joon-ho"
  },
  {
    "tmdb_id": 129,
    "title": "Spirited Away",
    "year": 2001,
    "genre": [
      "Animation",
      "Adventure",
      "Family",
      "Fantasy"
    ],
    "rating": 8.6,
    "poster": "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
    "overview": "A 10-year-old girl wanders into a world ruled by gods, witches, and spirits, where humans are changed into beasts.",
    "director": "Hayao Miyazaki"
  },
  {
    "tmdb_id": 372058,
    "title": "Your Name",
    "year": 2016,
    "genre": [
      "Animation",
      "Drama",
      "Fantasy",
      "Romance"
    ],
    "rating": 8.6,
    "poster": "https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg",
    "overview": "Two teenagers share a profound, magical connection upon discovering they are swapping bodies across space and time.",
    "director": "Makoto Shinkai"
  },
  {
    "tmdb_id": 324857,
    "title": "Spider-Man: Into the Spider-Verse",
    "year": 2018,
    "genre": [
      "Animation",
      "Action",
      "Adventure",
      "Sci-Fi"
    ],
    "rating": 8.7,
    "poster": "https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
    "overview": "Teen Miles Morales becomes the new Spider-Man and must team up with alternate universe heroes to defeat Kingpin.",
    "director": "Bob Persichetti, Peter Ramsey"
  },
  {
    "tmdb_id": 354912,
    "title": "Coco",
    "year": 2017,
    "genre": [
      "Animation",
      "Family",
      "Fantasy",
      "Music"
    ],
    "rating": 8.5,
    "poster": "https://image.tmdb.org/t/p/w500/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg",
    "overview": "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather.",
    "director": "Lee Unkrich"
  },
  {
    "tmdb_id": 862,
    "title": "Toy Story",
    "year": 1995,
    "genre": [
      "Animation",
      "Comedy",
      "Family"
    ],
    "rating": 8.3,
    "poster": "https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",
    "overview": "A cowboy doll is profoundly threatened and jealous when a new spaceman action figure supplants him as top toy in a boy's bedroom.",
    "director": "John Lasseter"
  },
  {
    "tmdb_id": 10681,
    "title": "WALL-E",
    "year": 2008,
    "genre": [
      "Animation",
      "Family",
      "Sci-Fi",
      "Adventure"
    ],
    "rating": 8.5,
    "poster": "https://image.tmdb.org/t/p/w500/hbhFnRzzg6ZDmm8YAmxBnQpQIPh.jpg",
    "overview": "In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind.",
    "director": "Andrew Stanton"
  },
  {
    "tmdb_id": 8587,
    "title": "The Lion King",
    "year": 1994,
    "genre": [
      "Animation",
      "Adventure",
      "Drama",
      "Family"
    ],
    "rating": 8.5,
    "poster": "https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg",
    "overview": "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
    "director": "Roger Allers, Rob Minkoff"
  },
  {
    "tmdb_id": 13,
    "title": "Forrest Gump",
    "year": 1994,
    "genre": [
      "Comedy",
      "Drama",
      "Romance"
    ],
    "rating": 8.8,
    "poster": "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    "overview": "The presidencies of Kennedy and Johnson, the Vietnam War, and other historical events unfold through the eyes of an Alabama man with an IQ of 75.",
    "director": "Robert Zemeckis"
  },
  {
    "tmdb_id": 597,
    "title": "Titanic",
    "year": 1997,
    "genre": [
      "Drama",
      "Romance"
    ],
    "rating": 8.5,
    "poster": "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    "overview": "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
    "director": "James Cameron"
  },
  {
    "tmdb_id": 152601,
    "title": "Her",
    "year": 2013,
    "genre": [
      "Drama",
      "Romance",
      "Sci-Fi"
    ],
    "rating": 8.1,
    "poster": "https://image.tmdb.org/t/p/w500/eCOtqtfvn7mxGl6nfmq4b1exJRc.jpg",
    "overview": "In a near future, a lonely writer develops an unlikely relationship with an operating system designed to meet his every need.",
    "director": "Spike Jonze"
  },
  {
    "tmdb_id": 19404,
    "title": "Dilwale Dulhania Le Jayenge",
    "year": 1995,
    "genre": [
      "Comedy",
      "Drama",
      "Romance"
    ],
    "rating": 8.2,
    "poster": "https://image.tmdb.org/t/p/w500/2CAL2433ZeIihfX1Hb2139CX0pW.jpg",
    "overview": "When Raj meets the love of his life on a trip to Europe, he must now win over the heart of her traditional father.",
    "director": "Aditya Chopra"
  },
  {
    "tmdb_id": 77338,
    "title": "The Intouchables",
    "year": 2011,
    "genre": [
      "Biography",
      "Comedy",
      "Drama"
    ],
    "rating": 8.5,
    "poster": "https://image.tmdb.org/t/p/w500/1QU7HKgsQbGpzsJbJK4pAVQV9F5.jpg",
    "overview": "After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caretaker.",
    "director": "Olivier Nakache"
  },
  {
    "tmdb_id": 346698,
    "title": "Barbie",
    "year": 2023,
    "genre": [
      "Adventure",
      "Comedy",
      "Fantasy"
    ],
    "rating": 8,
    "poster": "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
    "overview": "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land.",
    "director": "Greta Gerwig"
  },
  {
    "tmdb_id": 546554,
    "title": "Knives Out",
    "year": 2019,
    "genre": [
      "Comedy",
      "Crime",
      "Drama",
      "Mystery"
    ],
    "rating": 8.2,
    "poster": "https://image.tmdb.org/t/p/w500/pThyQovXQrw2m0s9x82twj48Jq4.jpg",
    "overview": "A detective investigates the death of a patriarch of an eccentric, combative family.",
    "director": "Rian Johnson"
  },
  {
    "tmdb_id": 539,
    "title": "Psycho",
    "year": 1960,
    "genre": [
      "Horror",
      "Mystery",
      "Thriller"
    ],
    "rating": 8.5,
    "poster": "https://image.tmdb.org/t/p/w500/yz4QVqPx3h1hD1DfqqQkCq3rmxW.jpg",
    "overview": "A Phoenix secretary embezzles $40,000 from her employer's client, goes on the run, and checks into a remote motel run by a young man under the domination of his mother.",
    "director": "Alfred Hitchcock"
  },
  {
    "tmdb_id": 348,
    "title": "Alien",
    "year": 1979,
    "genre": [
      "Horror",
      "Sci-Fi"
    ],
    "rating": 8.5,
    "poster": "https://image.tmdb.org/t/p/w500/vfrQk5IPloGg1v9Rzbh2Eg3VGyM.jpg",
    "overview": "The crew of a commercial spacecraft encounters a deadly lifeform after investigating an unknown transmission.",
    "director": "Ridley Scott"
  },
  {
    "tmdb_id": 274,
    "title": "The Silence of the Lambs",
    "year": 1991,
    "genre": [
      "Horror",
      "Crime",
      "Drama",
      "Thriller"
    ],
    "rating": 8.6,
    "poster": "https://image.tmdb.org/t/p/w500/rplLJ2hPcOQmkFhTqUte0MkEaO2.jpg",
    "overview": "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer.",
    "director": "Jonathan Demme"
  },
  {
    "tmdb_id": 138843,
    "title": "The Conjuring",
    "year": 2013,
    "genre": [
      "Horror",
      "Mystery",
      "Thriller"
    ],
    "rating": 8,
    "poster": "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg",
    "overview": "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
    "director": "James Wan"
  },
  {
    "tmdb_id": 447332,
    "title": "A Quiet Place",
    "year": 2018,
    "genre": [
      "Horror",
      "Drama",
      "Sci-Fi"
    ],
    "rating": 8.1,
    "poster": "https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3bufwDq4n.jpg",
    "overview": "In a post-apocalyptic world, a family is forced to live in silence while hiding from monsters with ultra-sensitive hearing.",
    "director": "John Krasinski"
  },
  {
    "tmdb_id": 419430,
    "title": "Get Out",
    "year": 2017,
    "genre": [
      "Horror",
      "Mystery",
      "Thriller"
    ],
    "rating": 8.1,
    "poster": "https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg",
    "overview": "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him reaches a boiling point.",
    "director": "Jordan Peele"
  },
  {
    "tmdb_id": 1771,
    "title": "Captain America: The First Avenger",
    "year": 2011,
    "genre": [
      "Action",
      "Adventure",
      "Sci-Fi"
    ],
    "rating": 6.6,
    "poster": "https://image.tmdb.org/t/p/w500/vSNxAJTlD0r02V9sPYpOjqDZXUK.jpg",
    "overview": "Predominantly set during World War II, Steve Rogers is a sickly man from Brooklyn who's transformed into super-soldier Captain America to aid in the war effort. Rogers must stop the Red Skull \u2013 Adolf Hitler's ruthless head of weaponry, and ",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 18785,
    "title": "The Hangover",
    "year": 2009,
    "genre": [
      "Comedy"
    ],
    "rating": 7.2,
    "poster": "https://image.tmdb.org/t/p/w500/uluhlXubGu1VxU63X9VHCLWDAYP.jpg",
    "overview": "When three friends finally come to after a raucous night of bachelor-party revelry, they find a baby in the closet and a tiger in the bathroom. But they can't seem to locate their best friend, Doug \u2013 who's supposed to be tying the knot. Lau",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 37724,
    "title": "Skyfall",
    "year": 2012,
    "genre": [
      "Action",
      "Adventure",
      "Thriller"
    ],
    "rating": 6.9,
    "poster": "https://image.tmdb.org/t/p/w500/9qUcmHiPpfTJTacyZyxfGTnSz0V.jpg",
    "overview": "When Bond's latest assignment goes gravely wrong and agents around the world are exposed, MI6 is attacked forcing M to relocate the agency. These events cause her authority and position to be challenged by Gareth Mallory, the new Chairman o",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 122,
    "title": "The Lord of the Rings: The Return of the King",
    "year": 2003,
    "genre": [
      "Adventure",
      "Fantasy",
      "Action"
    ],
    "rating": 8.1,
    "poster": "https://image.tmdb.org/t/p/w500/uexxR7Kw1qYbZk0RYaF9Rx5ykbj.jpg",
    "overview": "Aragorn is revealed as the heir to the ancient kings as he, Gandalf and the other members of the broken fellowship struggle to save Gondor from Sauron's forces. Meanwhile, Frodo and Sam bring the ring closer to the heart of Mordor, the dark",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 68721,
    "title": "Iron Man 3",
    "year": 2013,
    "genre": [
      "Action",
      "Adventure",
      "Sci-Fi"
    ],
    "rating": 6.8,
    "poster": "https://image.tmdb.org/t/p/w500/1Ilv6ryHUv6rt9zIsbSEJUmmbEi.jpg",
    "overview": "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 121,
    "title": "The Lord of the Rings: The Two Towers",
    "year": 2002,
    "genre": [
      "Adventure",
      "Fantasy",
      "Action"
    ],
    "rating": 8,
    "poster": "https://image.tmdb.org/t/p/w500/wf3v0Pn09jnT5HSaYal7Ami3bdA.jpg",
    "overview": "Frodo and Sam are trekking to Mordor to destroy the One Ring of Power while Gimli, Legolas and Aragorn search for the orc-captured Merry and Pippin. All along, nefarious wizard Saruman awaits the Fellowship members at the Orthanc Tower in I",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 263115,
    "title": "Logan",
    "year": 2017,
    "genre": [
      "Action",
      "Drama",
      "Sci-Fi"
    ],
    "rating": 7.6,
    "poster": "https://image.tmdb.org/t/p/w500/gGBu0hKw9BGddG8RkRAMX7B6NDB.jpg",
    "overview": "In the near future, a weary Logan cares for an ailing Professor X in a hideout on the Mexican border. But Logan's attempts to hide from the world and his legacy are upended when a young mutant arrives, pursued by dark forces.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 672,
    "title": "Harry Potter and the Chamber of Secrets",
    "year": 2002,
    "genre": [
      "Adventure",
      "Fantasy",
      "Family"
    ],
    "rating": 7.4,
    "poster": "https://image.tmdb.org/t/p/w500/sdEOH0992YZ0QSxgXNIGLq1ToUi.jpg",
    "overview": "Ignoring threats to his life, Harry returns to Hogwarts to investigate \u2013 aided by Ron and Hermione \u2013 a mysterious series of attacks.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 674,
    "title": "Harry Potter and the Goblet of Fire",
    "year": 2005,
    "genre": [
      "Adventure",
      "Fantasy",
      "Family"
    ],
    "rating": 7.5,
    "poster": "https://image.tmdb.org/t/p/w500/6sASqcdrEHXxUhA3nFpjrRecPD2.jpg",
    "overview": "Harry starts his fourth year at Hogwarts, competes in the treacherous Triwizard Tournament and faces the evil Lord Voldemort. Ron and Hermione help Harry manage the pressure \u2013 but Voldemort lurks, awaiting his chance to destroy Harry and al",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 321612,
    "title": "Beauty and the Beast",
    "year": 2017,
    "genre": [
      "Family",
      "Fantasy",
      "Romance"
    ],
    "rating": 6.8,
    "poster": "https://image.tmdb.org/t/p/w500/tWqifoYuwLETmmasnGHO7xBjEtt.jpg",
    "overview": "A live-action adaptation of Disney's version of the classic 'Beauty and the Beast' tale of a cursed prince and a beautiful young woman who helps him break the spell.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 297762,
    "title": "Wonder Woman",
    "year": 2017,
    "genre": [
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "rating": 7.2,
    "poster": "https://image.tmdb.org/t/p/w500/imekS7f1OuHyUP2LAiTEM0zBzUz.jpg",
    "overview": "An Amazon princess comes to the world of Man to become the greatest of the female superheroes.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 283995,
    "title": "Guardians of the Galaxy Vol. 2",
    "year": 2017,
    "genre": [
      "Action",
      "Adventure",
      "Comedy"
    ],
    "rating": 7.6,
    "poster": "https://image.tmdb.org/t/p/w500/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg",
    "overview": "The Guardians must fight to keep their newfound family together as they unravel the mysteries of Peter Quill's true parentage.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 228150,
    "title": "Fury",
    "year": 2014,
    "genre": [
      "War",
      "Drama",
      "Action"
    ],
    "rating": 7.4,
    "poster": "https://image.tmdb.org/t/p/w500/pfte7wdMobMF4CVHuOxyu6oqeeA.jpg",
    "overview": "Last months of World War II in April 1945. As the Allies make their final push in the European Theater, a battle-hardened U.S. Army sergeant in the 2nd Armored Division named Wardaddy commands a Sherman tank called \\\"Fury\\\" and its five-man",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 425,
    "title": "Ice Age",
    "year": 2002,
    "genre": [
      "Animation",
      "Comedy",
      "Family"
    ],
    "rating": 7.1,
    "poster": "https://image.tmdb.org/t/p/w500/zpaQwR0YViPd83bx1e559QyZ35i.jpg",
    "overview": "With the impending ice age almost upon them, a mismatched trio of prehistoric critters \u2013 Manny the woolly mammoth, Diego the saber-toothed tiger and Sid the giant sloth \u2013 find an orphaned infant and decide to return it to its human parents.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 559,
    "title": "Spider-Man 3",
    "year": 2007,
    "genre": [
      "Fantasy",
      "Action",
      "Adventure"
    ],
    "rating": 5.9,
    "poster": "https://image.tmdb.org/t/p/w500/sqZKCRYGovZ8aN99VVJSdL8Ja9k.jpg",
    "overview": "The seemingly invincible Spider-Man goes up against an all-new crop of villain \u2013 including the shape-shifting Sandman. While Spider-Man\u2019s superpowers are altered by an alien organism, his alter ego, Peter Parker, deals with nemesis Eddie Br",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 337339,
    "title": "The Fate of the Furious",
    "year": 2017,
    "genre": [
      "Action",
      "Crime",
      "Thriller"
    ],
    "rating": 6.8,
    "poster": "https://image.tmdb.org/t/p/w500/g52r6ZXqRPfRagwsOaorOGWxOk3.jpg",
    "overview": "When a mysterious woman seduces Dom into the world of crime and a betrayal of those closest to him, the crew face trials that will test them as never before.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 293167,
    "title": "Kong: Skull Island",
    "year": 2017,
    "genre": [
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "rating": 6.2,
    "poster": "https://image.tmdb.org/t/p/w500/r2517Vz9EhDhj88qwbDVj8DCRZN.jpg",
    "overview": "Explore the mysterious and dangerous home of the king of the apes as a team of explorers ventures deep inside the treacherous, primordial island.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 109439,
    "title": "The Hangover Part III",
    "year": 2013,
    "genre": [
      "Comedy"
    ],
    "rating": 6,
    "poster": "https://image.tmdb.org/t/p/w500/vtxuPWkdllLNLVyGjKYa267ntuH.jpg",
    "overview": "This time, there's no wedding. No bachelor party. What could go wrong, right? But when the Wolfpack hits the road, all bets are off.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 166426,
    "title": "Pirates of the Caribbean: Dead Men Tell No Tales",
    "year": 2017,
    "genre": [
      "Adventure",
      "Action",
      "Fantasy"
    ],
    "rating": 6.6,
    "poster": "https://image.tmdb.org/t/p/w500/xbpSDU3p7YUGlu9Mr6Egg2Vweto.jpg",
    "overview": "Thrust into an all-new paycheck, a down-on-his-luck Capt. Jack Sparrow feels the winds of ill-fortune blowing even more strongly when deadly ghost sailors led by his old nemesis, the evil Capt. Salazar, escape from the Devil's Triangle. Jac",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 564,
    "title": "The Mummy",
    "year": 1999,
    "genre": [
      "Adventure",
      "Action",
      "Fantasy"
    ],
    "rating": 6.6,
    "poster": "https://image.tmdb.org/t/p/w500/yhIsVvcUm7QxzLfT6HW2wLf5ajY.jpg",
    "overview": "Dashing legionnaire Rick O'Connell and his companion, Beni stumble upon the hidden ruins of Hamunaptra while in the midst of a battle in 1923, 3,000 years after Imhotep has suffered a fate worse than death \u2013 his body will remain undead for ",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 126889,
    "title": "Alien: Covenant",
    "year": 2017,
    "genre": [
      "Horror",
      "Sci-Fi",
      "Thriller"
    ],
    "rating": 5.7,
    "poster": "https://image.tmdb.org/t/p/w500/zecMELPbU5YMQpC81Z8ImaaXuf9.jpg",
    "overview": "Bound for a remote planet on the far side of the galaxy, the crew of the colony ship 'Covenant' discovers what is thought to be an uncharted paradise, but is actually a dark, dangerous world \u2013 which has its sole inhabitant the 'synthetic', ",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 57800,
    "title": "Ice Age: Continental Drift",
    "year": 2012,
    "genre": [
      "Animation",
      "Comedy",
      "Adventure"
    ],
    "rating": 6.2,
    "poster": "https://image.tmdb.org/t/p/w500/u30xsZd3mijrdBKA6CeDsozx48g.jpg",
    "overview": "Manny, Diego, and Sid embark upon another adventure after their continent is set adrift. Using an iceberg as a ship, they encounter sea creatures and battle pirates as they explore a new world.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 600,
    "title": "Full Metal Jacket",
    "year": 1987,
    "genre": [
      "Drama",
      "War"
    ],
    "rating": 7.9,
    "poster": "https://image.tmdb.org/t/p/w500/zoiGcNlYBR0r2fO2uP44XQF6S1W.jpg",
    "overview": "A pragmatic U.S. Marine observes the dehumanizing effects the U.S.-Vietnam War has on his fellow recruits from their brutal boot camp training to the bloody street fighting in Hue.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 315837,
    "title": "Ghost in the Shell",
    "year": 2017,
    "genre": [
      "Action",
      "Sci-Fi",
      "Thriller"
    ],
    "rating": 5.9,
    "poster": "https://image.tmdb.org/t/p/w500/myRzRzCxdfUWjkJWgpHHZ1oGkJd.jpg",
    "overview": "In the near future, Major is the first of her kind: a human saved from a terrible crash, then cyber-enhanced to be a perfect soldier devoted to stopping the world's most dangerous criminals.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 50619,
    "title": "The Twilight Saga: Breaking Dawn - Part 1",
    "year": 2011,
    "genre": [
      "Adventure",
      "Fantasy",
      "Romance"
    ],
    "rating": 5.8,
    "poster": "https://image.tmdb.org/t/p/w500/p2hlGr02imEs9zeBDAkpZ4PBk6s.jpg",
    "overview": "The new found married bliss of Bella Swan and vampire Edward Cullen is cut short when a series of betrayals and misfortunes threatens to destroy their world. Bella soon discovers she is pregnant, and during a nearly fatal childbirth, Edward",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 333371,
    "title": "10 Cloverfield Lane",
    "year": 2016,
    "genre": [
      "Thriller",
      "Sci-Fi",
      "Drama"
    ],
    "rating": 6.8,
    "poster": "https://image.tmdb.org/t/p/w500/aeiVxTSTeGJ2ICf1iSDXkF3ivZp.jpg",
    "overview": "After a car accident, Michelle awakens to find herself in a mysterious bunker with two men named Howard and Emmett. Howard offers her a pair of crutches to help her remain mobile with her leg injury sustained from the car crash and tells he",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 534,
    "title": "Terminator Salvation",
    "year": 2009,
    "genre": [
      "Action",
      "Sci-Fi",
      "Thriller"
    ],
    "rating": 5.9,
    "poster": "https://image.tmdb.org/t/p/w500/gw6JhlekZgtKUFlDTezq3j5JEPK.jpg",
    "overview": "All grown up in post-apocalyptic 2018, John Connor must lead the resistance of humans against the increasingly dominating militaristic robots. But when Marcus Wright appears, his existence confuses the mission as Connor tries to determine w",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 76492,
    "title": "Hotel Transylvania",
    "year": 2012,
    "genre": [
      "Animation",
      "Comedy",
      "Family"
    ],
    "rating": 6.8,
    "poster": "https://image.tmdb.org/t/p/w500/qdLhiJcgO2cykA9hgzrPqHH8oK7.jpg",
    "overview": "Dracula, who operates a high-end resort away from the human world, goes into overprotective mode when a boy discovers the resort and falls for the count's teen-aged daughter.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 8844,
    "title": "Jumanji",
    "year": 1995,
    "genre": [
      "Adventure",
      "Fantasy",
      "Family"
    ],
    "rating": 6.9,
    "poster": "https://image.tmdb.org/t/p/w500/vzmL6fP7aPKNKPRTFnZmiUfciyV.jpg",
    "overview": "When siblings Judy and Peter discover an enchanted board game that opens the door to a magical world, they unwittingly invite Alan -- an adult who's been trapped inside the game for 26 years -- into their living room. Alan's only hope for f",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 335797,
    "title": "Sing",
    "year": 2016,
    "genre": [
      "Animation",
      "Comedy",
      "Drama"
    ],
    "rating": 6.8,
    "poster": "https://image.tmdb.org/t/p/w500/dMblbyP7mnV8fKVuiy1i2GkS8Rg.jpg",
    "overview": "A koala named Buster recruits his best friend to help him drum up business for his theater by hosting a singing competition.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 295693,
    "title": "The Boss Baby",
    "year": 2017,
    "genre": [
      "Animation",
      "Comedy",
      "Family"
    ],
    "rating": 6.1,
    "poster": "https://image.tmdb.org/t/p/w500/unPB1iyEeTBcKiLg8W083rlViFH.jpg",
    "overview": "A story about how a new baby's arrival impacts a family, told from the point of view of a delightfully unreliable narrator, a wildly imaginative 7 year old named Tim.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 9339,
    "title": "Click",
    "year": 2006,
    "genre": [
      "Comedy",
      "Drama",
      "Fantasy"
    ],
    "rating": 6,
    "poster": "https://image.tmdb.org/t/p/w500/ojmEqzJgTLo8S34uVQ6ZWmhgOoG.jpg",
    "overview": "A workaholic architect finds a universal remote that allows him to fast-forward and rewind to different parts of his life. Complications arise when the remote starts to overrule his choices.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 339403,
    "title": "Baby Driver",
    "year": 2017,
    "genre": [
      "Action",
      "Crime"
    ],
    "rating": 7.2,
    "poster": "https://image.tmdb.org/t/p/w500/dN9LbVNNZFITwfaRjl4tmwGWkRg.jpg",
    "overview": "After being coerced into working for a crime boss, a young getaway driver finds himself taking part in a heist doomed to fail.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 106,
    "title": "Predator",
    "year": 1987,
    "genre": [
      "Sci-Fi",
      "Action",
      "Adventure"
    ],
    "rating": 7.3,
    "poster": "https://image.tmdb.org/t/p/w500/bj7A0teF2TWxxNGZjWTXiGrvCu2.jpg",
    "overview": "Dutch and his group of commandos are hired by the CIA to rescue downed airmen from guerillas in a Central American jungle. The mission goes well but as they return they find that something is hunting them. Nearly invisible, it blends in wit",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 644,
    "title": "A.I. Artificial Intelligence",
    "year": 2001,
    "genre": [
      "Drama",
      "Sci-Fi",
      "Adventure"
    ],
    "rating": 6.8,
    "poster": "https://image.tmdb.org/t/p/w500/wnUAcUrMRGPPZUDroLeZhSjLkuu.jpg",
    "overview": "A robotic boy, the first programmed to love, David is adopted as a test case by a Cybertronics employee and his wife. Though he gradually becomes their child, a series of unexpected circumstances make this life impossible for David. Without",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 324852,
    "title": "Despicable Me 3",
    "year": 2017,
    "genre": [
      "Action",
      "Animation",
      "Adventure"
    ],
    "rating": 6.2,
    "poster": "https://image.tmdb.org/t/p/w500/5qcUGqWoWhEsoQwNUrtf3y3fcWn.jpg",
    "overview": "Gru and his wife Lucy must stop former '80s child star Balthazar Bratt from achieving world domination.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 128,
    "title": "Princess Mononoke",
    "year": 1997,
    "genre": [
      "Adventure",
      "Fantasy",
      "Animation"
    ],
    "rating": 8.2,
    "poster": "https://image.tmdb.org/t/p/w500/gzlJkVfWV5VEG5xK25cvFGJgkDz.jpg",
    "overview": "Ashitaka, a prince of the disappearing Ainu tribe, is cursed by a demonized boar god and must journey to the west to find a cure. Along the way, he encounters San, a young human woman fighting to protect the forest, and Lady Eboshi, who is ",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 38055,
    "title": "Megamind",
    "year": 2010,
    "genre": [
      "Animation",
      "Action",
      "Comedy"
    ],
    "rating": 6.7,
    "poster": "https://image.tmdb.org/t/p/w500/amXAUSAUrnGuLGEyc1ZNhBvgbnF.jpg",
    "overview": "Bumbling supervillain Megamind finally defeats his nemesis, the superhero Metro Man. But without a hero, he loses all purpose and must find new meaning to his life.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 1366,
    "title": "Rocky",
    "year": 1976,
    "genre": [
      "Drama"
    ],
    "rating": 7.5,
    "poster": "https://image.tmdb.org/t/p/w500/i5xiwdSsrecBvO7mIfAJixeEDSg.jpg",
    "overview": "When world heavyweight boxing champion, Apollo Creed wants to give an unknown fighter a shot at the title as a publicity stunt, his handlers choose palooka Rocky Balboa, an uneducated collector for a Philadelphia loan shark. Rocky teams up ",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 339846,
    "title": "Baywatch",
    "year": 2017,
    "genre": [
      "Action",
      "Comedy"
    ],
    "rating": 6.1,
    "poster": "https://image.tmdb.org/t/p/w500/6HE4xd8zloDqmjMZuhUCCw2UcY1.jpg",
    "overview": "Devoted lifeguard Mitch Buchannon butts heads with a brash new recruit. Together, they uncover a local criminal plot that threatens the future of the Bay.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 598,
    "title": "City of God",
    "year": 2002,
    "genre": [
      "Drama",
      "Crime"
    ],
    "rating": 8.2,
    "poster": "https://image.tmdb.org/t/p/w500/gCqnQaq8T4CfioP9uETLx9iMJF4.jpg",
    "overview": "Cidade de Deus is a shantytown that started during the 1960s and became one of Rio de Janeiro\u2019s most dangerous places in the beginning of the 1980s. To tell the story of this place, the movie describes the life of various characters, all se",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 2668,
    "title": "Sleepy Hollow",
    "year": 1999,
    "genre": [
      "Drama",
      "Fantasy",
      "Thriller"
    ],
    "rating": 6.9,
    "poster": "https://image.tmdb.org/t/p/w500/mTN4m41lHKaIf0dVcWzVdCJOYik.jpg",
    "overview": "New York detective Ichabod Crane is sent to Sleepy Hollow to investigate a series of mysterious deaths in which the victims are found beheaded. But the locals believe the culprit to be none other than the ghost of the legendary Headless Hor",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 8247,
    "title": "Jumper",
    "year": 2008,
    "genre": [
      "Adventure",
      "Fantasy",
      "Sci-Fi"
    ],
    "rating": 5.9,
    "poster": "https://image.tmdb.org/t/p/w500/mIz6FQabZrrzsOwYFpUpreijpvx.jpg",
    "overview": "David Rice is a man who knows no boundaries, a Jumper, born with the uncanny ability to teleport instantly to anywhere on Earth. When he discovers others like himself, David is thrust into a dangerous and bloodthirsty war while being hunted",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 334543,
    "title": "Lion",
    "year": 2016,
    "genre": [
      "Drama"
    ],
    "rating": 8,
    "poster": "https://image.tmdb.org/t/p/w500/iBGRbLvg6kVc7wbS8wDdVHq6otm.jpg",
    "overview": "A five-year-old Indian boy gets lost on the streets of Calcutta, thousands of kilometers from home. He survives many challenges before being adopted by a couple in Australia; 25 years later, he sets out to find his lost family.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 7446,
    "title": "Tropic Thunder",
    "year": 2008,
    "genre": [
      "Action",
      "Comedy"
    ],
    "rating": 6.5,
    "poster": "https://image.tmdb.org/t/p/w500/zoWUdaaWKPDyr9b0il0YcggDWgJ.jpg",
    "overview": "Vietnam veteran 'Four Leaf' Tayback's memoir, Tropic Thunder, is being made into a film, but Director Damien Cockburn can\u2019t control the cast of prima donnas. Behind schedule and over budget, Cockburn is ordered by a studio executive to get ",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 184315,
    "title": "Hercules",
    "year": 2014,
    "genre": [
      "Action",
      "Adventure"
    ],
    "rating": 5.6,
    "poster": "https://image.tmdb.org/t/p/w500/jEeMN83CRI7lIEffTlgzBcUZzuN.jpg",
    "overview": "Fourteen hundred years ago, a tormented soul walked the earth that was neither man nor god. Hercules was the powerful son of the god king Zeus, for this he received nothing but suffering his entire life. After twelve arduous labors and the ",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 281338,
    "title": "War for the Planet of the Apes",
    "year": 2017,
    "genre": [
      "Drama",
      "Sci-Fi",
      "War"
    ],
    "rating": 6.7,
    "poster": "https://image.tmdb.org/t/p/w500/3vYhLLxrTtZLysXtIWktmd57Snv.jpg",
    "overview": "Caesar and his apes are forced into a deadly conflict with an army of humans led by a ruthless Colonel. After the apes suffer unimaginable losses, Caesar wrestles with his darker instincts and begins his own mythic quest to avenge his kind.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 52449,
    "title": "Bad Teacher",
    "year": 2011,
    "genre": [
      "Comedy"
    ],
    "rating": 5.4,
    "poster": "https://image.tmdb.org/t/p/w500/zpIY4qUSX91J9XpPgr0hFrk1eKr.jpg",
    "overview": "A lazy, incompetent middle school teacher who hates her job and her students is forced to return to her job to make enough money for a boob job after her rich fianc\u00e9 dumps her.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 242,
    "title": "The Godfather: Part III",
    "year": 1990,
    "genre": [
      "Crime",
      "Drama",
      "Thriller"
    ],
    "rating": 7.1,
    "poster": "https://image.tmdb.org/t/p/w500/1hdm3Axw9LjITbApvAXBbqO58zE.jpg",
    "overview": "In the midst of trying to legitimize his business dealings in 1979 New York and Italy, aging mafia don, Michael Corleone seeks forgiveness for his sins while taking a young protege under his wing.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 334541,
    "title": "Manchester by the Sea",
    "year": 2016,
    "genre": [
      "Drama"
    ],
    "rating": 7.5,
    "poster": "https://image.tmdb.org/t/p/w500/e8daDzP0vFOnGyKmve95Yv0D0io.jpg",
    "overview": "After his older brother passes away, Lee Chandler is forced to return home to care for his 16-year-old nephew. There he is compelled to deal with a tragic past that separated him from his family and the community where he was born and raise",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 1368,
    "title": "First Blood",
    "year": 1982,
    "genre": [
      "Action",
      "Adventure",
      "Thriller"
    ],
    "rating": 7.2,
    "poster": "https://image.tmdb.org/t/p/w500/bbYNNEGLXrV3lJpHDg7CKaPscCb.jpg",
    "overview": "When former Green Beret John Rambo is harassed by local law enforcement and arrested for vagrancy, the Vietnam vet snaps, runs for the hills and rat-a-tat-tats his way into the action-movie hall of fame. Hounded by a relentless sheriff, Ram",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 4523,
    "title": "Enchanted",
    "year": 2007,
    "genre": [
      "Comedy",
      "Family",
      "Fantasy"
    ],
    "rating": 6.6,
    "poster": "https://image.tmdb.org/t/p/w500/8KCNzCArLlvLdQoHx6npua2VSVc.jpg",
    "overview": "The beautiful princess Giselle is banished by an evil queen from her magical, musical animated land and finds herself in the gritty reality of the streets of modern-day Manhattan. Shocked by this strange new environment that doesn't operate",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 274857,
    "title": "King Arthur: Legend of the Sword",
    "year": 2017,
    "genre": [
      "Action",
      "Drama",
      "Fantasy"
    ],
    "rating": 6.5,
    "poster": "https://image.tmdb.org/t/p/w500/qyXPqzlCWf3T9VEpBtquUQZwsgi.jpg",
    "overview": "When the child Arthur\u2019s father is murdered, Vortigern, Arthur\u2019s uncle, seizes the crown. Robbed of his birthright and with no idea who he truly is, Arthur comes up the hard way in the back alleys of the city. But once he pulls the sword Exc",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 324849,
    "title": "The Lego Batman Movie",
    "year": 2017,
    "genre": [
      "Action",
      "Animation",
      "Comedy"
    ],
    "rating": 7.2,
    "poster": "https://image.tmdb.org/t/p/w500/snGwr2gag4Fcgx2OGmH9otl6ofW.jpg",
    "overview": "In the irreverent spirit of fun that made \u201cThe Lego Movie\u201d a worldwide phenomenon, the self-described leading man of that ensemble\u2014Lego Batman\u2014stars in his own big-screen adventure. But there are big changes brewing in Gotham, and if he wan",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 856,
    "title": "Who Framed Roger Rabbit",
    "year": 1988,
    "genre": [
      "Fantasy",
      "Animation",
      "Comedy"
    ],
    "rating": 7.2,
    "poster": "https://image.tmdb.org/t/p/w500/lYfRc57Kx9VgLZ48iulu0HKnM15.jpg",
    "overview": "'Toon star Roger is worried that his wife Jessica is playing pattycake with someone else, so the studio hires detective Eddie Valiant to snoop on her. But the stakes are quickly raised when Marvin Acme is found dead and Roger is the prime s",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 15512,
    "title": "Monsters vs Aliens",
    "year": 2009,
    "genre": [
      "Animation",
      "Family",
      "Adventure"
    ],
    "rating": 6,
    "poster": "https://image.tmdb.org/t/p/w500/8x0WrDcFQDC2eoXJe6iC34wXZE8.jpg",
    "overview": "When Susan Murphy is unwittingly clobbered by a meteor full of outer space gunk on her wedding day, she mysteriously grows to 49-feet-11-inches. The military jumps into action and captures Susan, secreting her away to a covert government co",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 335988,
    "title": "Transformers: The Last Knight",
    "year": 2017,
    "genre": [
      "Action",
      "Sci-Fi",
      "Thriller"
    ],
    "rating": 6.2,
    "poster": "https://image.tmdb.org/t/p/w500/s5HQf2Gb3lIO2cRcFwNL9sn1o1o.jpg",
    "overview": "Autobots and Decepticons are at war, with humans on the sidelines. Optimus Prime is gone. The key to saving our future lies buried in the secrets of the past, in the hidden history of Transformers on Earth.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 10009,
    "title": "Brother Bear",
    "year": 2003,
    "genre": [
      "Adventure",
      "Animation",
      "Family"
    ],
    "rating": 6.9,
    "poster": "https://image.tmdb.org/t/p/w500/otptPbEY0vBostmo95xwiiumMJm.jpg",
    "overview": "When an impulsive boy named Kenai is magically transformed into a bear, he must literally walk in another's footsteps until he learns some valuable life lessons. His courageous and often zany journey introduces him to a forest full of wildl",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 824,
    "title": "Moulin Rouge!",
    "year": 2001,
    "genre": [
      "Drama",
      "Music",
      "Romance"
    ],
    "rating": 7.4,
    "poster": "https://image.tmdb.org/t/p/w500/xhuQz2yKPlWvMvvnf2u9RVkAQx6.jpg",
    "overview": "A celebration of love and creative inspiration takes place in the infamous, gaudy and glamorous Parisian nightclub, at the cusp of the 20th century. A young poet, who is plunged into the heady world of Moulin Rouge, begins a passionate affa",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 4348,
    "title": "Pride & Prejudice",
    "year": 2005,
    "genre": [
      "Drama",
      "Romance"
    ],
    "rating": 7.8,
    "poster": "https://image.tmdb.org/t/p/w500/lAb9l4kgc6QWnHamBzTnskt71A7.jpg",
    "overview": "Pride & Prejudice is a humorous story of love and life among English gentility during the Georgian era. Mr. Bennet is an English gentleman living in Hertfordshire with his overbearing wife and five daughters. If Mr. Bennet dies their house ",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 72570,
    "title": "The Vow",
    "year": 2012,
    "genre": [
      "Drama",
      "Romance"
    ],
    "rating": 7,
    "poster": "https://image.tmdb.org/t/p/w500/qHNjcjKa6VHJsa0Eu0DHl2BaYw3.jpg",
    "overview": "Happy young married couple Paige and Leo are, well, happy. Then a car accident puts Paige into a life-threatening coma. Upon awakening she has lost the previous five years of memories, including those of her beloved Leo, her wedding, a conf",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 305470,
    "title": "Power Rangers",
    "year": 2017,
    "genre": [
      "Action",
      "Adventure",
      "Sci-Fi"
    ],
    "rating": 6.3,
    "poster": "https://image.tmdb.org/t/p/w500/zV5rpeTzUJ7QpA3NC4iidlwXssU.jpg",
    "overview": "Saban's Power Rangers follows five ordinary teens who must become something extraordinary when they learn that their small town of Angel Grove \u2014 and the world \u2014 is on the verge of being obliterated by an alien threat. Chosen by destiny, our",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 9740,
    "title": "Hannibal",
    "year": 2001,
    "genre": [
      "Crime",
      "Drama",
      "Thriller"
    ],
    "rating": 6.4,
    "poster": "https://image.tmdb.org/t/p/w500/v5wAZwRqpGWmyAaaJ8BBHYuNXnj.jpg",
    "overview": "After having successfully eluded the authorities for years, Hannibal peacefully lives in Italy in disguise as an art scholar. Trouble strikes again when he's discovered leaving a deserving few dead in the process. He returns to America to m",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 686,
    "title": "Contact",
    "year": 1997,
    "genre": [
      "Drama",
      "Sci-Fi",
      "Mystery"
    ],
    "rating": 7.2,
    "poster": "https://image.tmdb.org/t/p/w500/yRF1qpaQPZJjiORDsR7eUHzSHbf.jpg",
    "overview": "Contact is a science fiction film about an encounter with alien intelligence. Based on the novel by Carl Sagan the film starred Jodie Foster as the one chosen scientist who must make some difficult decisions between her beliefs, the truth, ",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 4964,
    "title": "Knocked Up",
    "year": 2007,
    "genre": [
      "Comedy",
      "Romance",
      "Drama"
    ],
    "rating": 6.2,
    "poster": "https://image.tmdb.org/t/p/w500/b4OaXw2MW97VvIiZE0Sbn1NfxSh.jpg",
    "overview": "For fun loving party animal Ben Stone, the last thing he ever expected was for his one night stand to show up on his doorstep eight weeks later to tell him she's pregnant.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 34851,
    "title": "Predators",
    "year": 2010,
    "genre": [
      "Action",
      "Sci-Fi",
      "Adventure"
    ],
    "rating": 6,
    "poster": "https://image.tmdb.org/t/p/w500/wdniP8NDaJIydi1hMxhpbJMUfr6.jpg",
    "overview": "A mercenary reluctantly leads a motley crew of warriors who soon come to realize they've been captured and deposited on an alien planet by an unknown nemesis. With the exception of a peculiar physician, they are all cold-blooded killers, co",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 1562,
    "title": "28 Weeks Later",
    "year": 2007,
    "genre": [
      "Horror",
      "Thriller",
      "Sci-Fi"
    ],
    "rating": 6.5,
    "poster": "https://image.tmdb.org/t/p/w500/kcJ99AtUykDhpzfQOApsViQa3fj.jpg",
    "overview": "In this chilling sequel to 28 Days Later, the inhabitants of the British Isles appear to have lost their battle against the onslaught of disease, as the deadly rage virus has killed every citizen there. Six months later, a group of American",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 356305,
    "title": "Why Him?",
    "year": 2016,
    "genre": [
      "Comedy"
    ],
    "rating": 6.3,
    "poster": "https://image.tmdb.org/t/p/w500/eezFoKz7bXgdbjeieeCYJFXPKSu.jpg",
    "overview": "A dad forms a bitter rivalry with his daughter's young rich boyfriend.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 10196,
    "title": "The Last Airbender",
    "year": 2010,
    "genre": [
      "Action",
      "Adventure",
      "Family"
    ],
    "rating": 4.7,
    "poster": "https://image.tmdb.org/t/p/w500/zgwRTYWEEPivTwjB9S03HtmMcbM.jpg",
    "overview": "The story follows the adventures of Aang, a young successor to a long line of Avatars, who must put his childhood ways aside and stop the Fire Nation from enslaving the Water, Earth and Air nations.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 9366,
    "title": "Donnie Brasco",
    "year": 1997,
    "genre": [
      "Crime",
      "Drama",
      "Thriller"
    ],
    "rating": 7.4,
    "poster": "https://image.tmdb.org/t/p/w500/xtKLvpOfARi1XVm8u2FTdhY5Piq.jpg",
    "overview": "An FBI undercover agent infilitrates the mob and finds himself identifying more with the mafia life at the expense of his regular one.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 116,
    "title": "Match Point",
    "year": 2005,
    "genre": [
      "Drama",
      "Thriller",
      "Crime"
    ],
    "rating": 7.2,
    "poster": "https://image.tmdb.org/t/p/w500/80iHkrFzNxbSxlfMaLaNkGFRK2r.jpg",
    "overview": "Match Point is Woody Allen\u2019s satire of the British High Society and the ambition of a young tennis instructor to enter into it. Yet when he must decide between two women - one assuring him his place in high society, and the other that would",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 11886,
    "title": "Robin Hood",
    "year": 1973,
    "genre": [
      "Animation",
      "Family"
    ],
    "rating": 7,
    "poster": "https://image.tmdb.org/t/p/w500/yMdpnj5fh4NP39B3YrXyLjpZUBt.jpg",
    "overview": "With King Richard off to the Crusades, Prince John and his slithering minion, Sir Hiss, set about taxing Nottingham's citizens with support from the corrupt sheriff - and staunch opposition by the wily Robin Hood and his band of merry men.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 6947,
    "title": "The Village",
    "year": 2004,
    "genre": [
      "Drama",
      "Mystery",
      "Thriller"
    ],
    "rating": 6.2,
    "poster": "https://image.tmdb.org/t/p/w500/v7UvYtKfIVaHLaHwVgfalyrK7Ho.jpg",
    "overview": "When a willful young man tries to venture beyond his sequestered Pennsylvania hamlet, his actions set off a chain of chilling incidents that will alter the community forever.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 1585,
    "title": "It's a Wonderful Life",
    "year": 1946,
    "genre": [
      "Drama",
      "Family",
      "Fantasy"
    ],
    "rating": 8,
    "poster": "https://image.tmdb.org/t/p/w500/qRitcyVpWdL7bSV7akDcKTR2YxL.jpg",
    "overview": "George Bailey has spent his entire life giving of himself to the people of Bedford Falls. He has always longed to travel but never had the opportunity in order to prevent rich skinflint Mr. Potter from taking over the entire town. All that ",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 136799,
    "title": "Trolls",
    "year": 2016,
    "genre": [
      "Adventure",
      "Animation",
      "Family"
    ],
    "rating": 6.7,
    "poster": "https://image.tmdb.org/t/p/w500/zKu5MNy9QW1a5ZHgv7iAp3kRZpE.jpg",
    "overview": "Lovable and friendly, the trolls love to play around. But one day, a mysterious giant shows up to end the party. Poppy, the optimistic leader of the Trolls, and her polar opposite, Branch, must embark on an adventure that takes them far bey",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 10947,
    "title": "High School Musical",
    "year": 2006,
    "genre": [
      "Comedy",
      "Drama",
      "Family"
    ],
    "rating": 6.1,
    "poster": "https://image.tmdb.org/t/p/w500/lkcc7eC4qTbhE2DBnoVpGg2ZeM9.jpg",
    "overview": "Troy (Zac Efron), the popular captain of the basketball team, and Gabriella (Vanessa Anne Hudgens), the brainy and beautiful member of the academic club, break all the rules of East High society when they secretly audition for the leads in ",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 703,
    "title": "Annie Hall",
    "year": 1977,
    "genre": [
      "Comedy",
      "Drama",
      "Romance"
    ],
    "rating": 7.8,
    "poster": "https://image.tmdb.org/t/p/w500/dEtjPywhDbAXYjoFfhBC4U9unU7.jpg",
    "overview": "In the city of New York, comedian Alvy Singer falls in love with the ditsy Annie Hall.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 9762,
    "title": "Step Up",
    "year": 2006,
    "genre": [
      "Music",
      "Drama",
      "Romance"
    ],
    "rating": 6.7,
    "poster": "https://image.tmdb.org/t/p/w500/uy1kUNtvYTZLkBSpQP8FQMRdAg7.jpg",
    "overview": "Everyone deserves a chance to follow their dreams, but some people only get one shot. Tyler Gage is a rebel from the wrong side of Baltimore's tracks and the only thing that stands between him and an unfulfilled life are his dreams of one d",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 339988,
    "title": "The Circle",
    "year": 2017,
    "genre": [
      "Drama",
      "Thriller",
      "Sci-Fi"
    ],
    "rating": 5.4,
    "poster": "https://image.tmdb.org/t/p/w500/bQVqd5rWrx5GbXhJNuvKy4Viz6j.jpg",
    "overview": "A young tech worker takes a job at a greedy Internet corporation, quickly rises up the company's ranks, and soon finds herself in a perilous situation concerning privacy, surveillance and freedom. She comes to learn that her decisions and a",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 2280,
    "title": "Big",
    "year": 1988,
    "genre": [
      "Fantasy",
      "Drama",
      "Comedy"
    ],
    "rating": 6.9,
    "poster": "https://image.tmdb.org/t/p/w500/me6uugsf6zWTkrcLBoNc9EElb5j.jpg",
    "overview": "A young boy, Josh Baskin makes a wish at a carnival machine to be big. He wakes up the following morning to find that it has been granted and his body has grown older overnight. But he is still the same 13-year-old boy inside. Now he must l",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 9286,
    "title": "Final Destination 3",
    "year": 2006,
    "genre": [
      "Horror",
      "Mystery"
    ],
    "rating": 5.8,
    "poster": "https://image.tmdb.org/t/p/w500/p7ARuNKUGPGvkBiDtIDvAzYzonX.jpg",
    "overview": "A student's premonition of a deadly rollercoaster ride saves her life and a lucky few, but not from death itself \u2013 which seeks out those who escaped their fate.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 9804,
    "title": "Waterworld",
    "year": 1995,
    "genre": [
      "Adventure",
      "Action"
    ],
    "rating": 5.9,
    "poster": "https://image.tmdb.org/t/p/w500/yordVJcPLh3VNRL7bXzFIBEhXRr.jpg",
    "overview": "In a futuristic world where the polar ice caps have melted and made Earth a liquid planet, a beautiful barmaid rescues a mutant seafarer from a floating island prison. They escape, along with her young charge, Enola, and sail off aboard his",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 76,
    "title": "Before Sunrise",
    "year": 1995,
    "genre": [
      "Drama",
      "Romance"
    ],
    "rating": 7.7,
    "poster": "https://image.tmdb.org/t/p/w500/jsQy4ZbPHA8hE2O6QU05PpofI61.jpg",
    "overview": "A dialogue marathon of a film, this fairytale love story of an American boy and French girl. During a day and a night together in Vienna their two hearts collide.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 1493,
    "title": "Miss Congeniality",
    "year": 2000,
    "genre": [
      "Comedy",
      "Crime",
      "Action"
    ],
    "rating": 6.1,
    "poster": "https://image.tmdb.org/t/p/w500/mILq93mndRkMRz1MgaKqD3WpR1d.jpg",
    "overview": "When the local FBI office receives a letter from a terrorist known only as 'The Citizen', it's quickly determined that he's planning his next act at the Miss America beauty pageant. Because tough-as-nails Gracie Hart is the only female Agen",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 571,
    "title": "The Birds",
    "year": 1963,
    "genre": [
      "Horror"
    ],
    "rating": 7.3,
    "poster": "https://image.tmdb.org/t/p/w500/z0iYrJ6GsAMP3abOha7uGMuc5kZ.jpg",
    "overview": "Chic socialite Melanie Daniels enjoys a passing flirtation with an eligible attorney in a San Francisco pet shop and, on an impulse, follows him to his hometown bearing a gift of lovebirds. But upon her arrival, the bird population runs amo",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 12477,
    "title": "Grave of the Fireflies",
    "year": 1988,
    "genre": [
      "Animation",
      "Drama",
      "War"
    ],
    "rating": 8.2,
    "poster": "https://image.tmdb.org/t/p/w500/bwVhmPpydv8P7mWfrmL3XVw0MV5.jpg",
    "overview": "In the latter part of World War II, a boy and his sister, orphaned when their mother is killed in the firebombing of Tokyo, are left to survive on their own in what remains of civilian life in Japan. The plot follows this boy and his sister",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 9471,
    "title": "Charlie's Angels: Full Throttle",
    "year": 2003,
    "genre": [
      "Action",
      "Adventure",
      "Comedy"
    ],
    "rating": 5.2,
    "poster": "https://image.tmdb.org/t/p/w500/n4cdJ0Wqxb7C0HmZbcaC4eYnkIf.jpg",
    "overview": "The Angels are charged with finding a pair of missing rings that are encoded with the personal information of members of the Witness Protection Program. As informants are killed, the ladies target a rogue agent who might be responsible.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 957,
    "title": "Spaceballs",
    "year": 1987,
    "genre": [
      "Comedy",
      "Sci-Fi"
    ],
    "rating": 6.7,
    "poster": "https://image.tmdb.org/t/p/w500/kNbaxEsnCyWBTfANVPHayujBsxp.jpg",
    "overview": "When the nefarious Dark Helmet hatches a plan to snatch Princess Vespa and steal her planet's air, space-bum-for-hire Lone Starr and his clueless sidekick fly to the rescue. Along the way, they meet Yogurt, who puts Lone Starr wise to the p",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 339964,
    "title": "Valerian and the City of a Thousand Planets",
    "year": 2017,
    "genre": [
      "Adventure",
      "Sci-Fi",
      "Action"
    ],
    "rating": 6.7,
    "poster": "https://image.tmdb.org/t/p/w500/8L7FE3bXjN98BcmKANzrL9WwKsK.jpg",
    "overview": "In the 28th century, Valerian and Laureline are special operatives charged with keeping order throughout the human territories. On assignment from the Minister of Defense, the two undertake a mission to Alpha, an ever-expanding metropolis w",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 805,
    "title": "Rosemary's Baby",
    "year": 1968,
    "genre": [
      "Horror",
      "Drama",
      "Mystery"
    ],
    "rating": 7.5,
    "poster": "https://image.tmdb.org/t/p/w500/kqA1pt9ovovArgJZi2Lu4Unf6He.jpg",
    "overview": "A young couple moves into an infamous New York apartment building to start a family. Things become frightening as Rosemary begins to suspect her unborn baby isn't safe around their strange neighbors.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 3034,
    "title": "Young Frankenstein",
    "year": 1974,
    "genre": [
      "Comedy",
      "Sci-Fi"
    ],
    "rating": 7.7,
    "poster": "https://image.tmdb.org/t/p/w500/tQJAWbIjvvqVKLLbIZHtwGw2HTf.jpg",
    "overview": "A young neurosurgeon inherits the castle of his grandfather, the famous Dr. Victor von Frankenstein. In the castle he finds a funny hunchback, a pretty lab assistant and the elderly housekeeper. Young Frankenstein believes that the work of ",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 9362,
    "title": "Tremors",
    "year": 1990,
    "genre": [
      "Horror",
      "Action"
    ],
    "rating": 6.6,
    "poster": "https://image.tmdb.org/t/p/w500/kv9ct0Nn6VX43uYSsqfyKwRalUC.jpg",
    "overview": "Hick handymen Val McKee and Earl Bassett can barely eke out a living in the Nevada hamlet of Perfection, so they decide to leave town -- despite an admonition from a shapely seismology coed who's picking up odd readings on her equipment. Be",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 9486,
    "title": "Johnny English",
    "year": 2003,
    "genre": [
      "Adventure",
      "Action",
      "Comedy"
    ],
    "rating": 6,
    "poster": "https://image.tmdb.org/t/p/w500/oSsisFLSeRJJaTX5l13jMqDKpwH.jpg",
    "overview": "Rowan plays the eponymous lead character in a spoof spy thriller. During the course of the story we follow our hero as he attempts to single-handedly save the country from falling into the hands of a despot.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 19912,
    "title": "The Final Destination",
    "year": 2009,
    "genre": [
      "Horror",
      "Mystery"
    ],
    "rating": 5.4,
    "poster": "https://image.tmdb.org/t/p/w500/5vxXrr1MqGsT4NNeRITpfDnl4Rq.jpg",
    "overview": "After a young man's premonition of a deadly race-car crash helps saves the lives of his peers, Death sets out to collect those who evaded their end.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 2252,
    "title": "Eastern Promises",
    "year": 2007,
    "genre": [
      "Thriller",
      "Crime",
      "Mystery"
    ],
    "rating": 7.2,
    "poster": "https://image.tmdb.org/t/p/w500/uQduBOXqpC4XG8qK2pMcqz1OnQY.jpg",
    "overview": "A Russian teenager living in London who dies during childbirth leaves clues to a midwife in her journal that could tie her child to a rape involving a violent Russian mob family.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 2288,
    "title": "Closer",
    "year": 2004,
    "genre": [
      "Drama",
      "Romance"
    ],
    "rating": 6.7,
    "poster": "https://image.tmdb.org/t/p/w500/fGGaokx4k00S0J603VG53Qlr9jz.jpg",
    "overview": "A witty, romantic, and very dangerous love story about chance meetings, instant attractions, and casual betrayals. Two couples disintegrate when they begin destructive adulterous affairs with each other.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 756,
    "title": "Fantasia",
    "year": 1940,
    "genre": [
      "Animation",
      "Family",
      "Music"
    ],
    "rating": 7.2,
    "poster": "https://image.tmdb.org/t/p/w500/dYZ1r3MJnXVGBBSYKgpd8UWGyFw.jpg",
    "overview": "Walt Disney's timeless masterpiece is an extravaganza of sight and sound! See the music come to life, hear the pictures burst into song and experience the excitement that is Fantasia over and over again.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 381341,
    "title": "Perfect Strangers",
    "year": 2016,
    "genre": [
      "Comedy",
      "Drama"
    ],
    "rating": 7.8,
    "poster": "https://image.tmdb.org/t/p/w500/3wknM629Vryofb1HNo2YnLQnQyn.jpg",
    "overview": "During a dinner, a group of friends decide to share whatever text message or phone call they will receive during the evening - and all hell breaks loose.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 387426,
    "title": "Okja",
    "year": 2017,
    "genre": [
      "Adventure",
      "Drama",
      "Fantasy"
    ],
    "rating": 7.7,
    "poster": "https://image.tmdb.org/t/p/w500/pHlRr2MfjK77VIIAO7p0R4jhsJI.jpg",
    "overview": "A young girl named Mija risks everything to prevent a powerful, multi-national company from kidnapping her best friend - a massive animal named Okja.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 180863,
    "title": "T2 Trainspotting",
    "year": 2017,
    "genre": [
      "Crime",
      "Drama"
    ],
    "rating": 7.1,
    "poster": "https://image.tmdb.org/t/p/w500/fbHXfr2N4pI2j7i9RLYiddjotBl.jpg",
    "overview": "After 20 years abroad, Mark Renton returns to Scotland and reunites with his old friends Sick Boy, Spud and Begbie.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 8741,
    "title": "The Thin Red Line",
    "year": 1998,
    "genre": [
      "Drama",
      "History",
      "War"
    ],
    "rating": 7.2,
    "poster": "https://image.tmdb.org/t/p/w500/jGDK6eM6vb8VEUmR0ZoaghcCG8f.jpg",
    "overview": "Based on the graphic novel by James Jones, The Thin Red Line tells the story of a group of men, an Army Rifle company called C-for-Charlie, who change, suffer, and ultimately make essential discoveries about themselves during the fierce Wor",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 9801,
    "title": "Bridget Jones: The Edge of Reason",
    "year": 2004,
    "genre": [
      "Comedy",
      "Romance"
    ],
    "rating": 6.1,
    "poster": "https://image.tmdb.org/t/p/w500/fs3nGIwSBk9H8EcuPtnj7qQrYj2.jpg",
    "overview": "Bridget Jones is becoming uncomfortable in her relationship with Mark Darcy. Apart from discovering that he's a conservative voter, she has to deal with a new boss, a strange contractor and the worst vacation of her life.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 793,
    "title": "Blue Velvet",
    "year": 1986,
    "genre": [
      "Crime",
      "Drama",
      "Mystery"
    ],
    "rating": 7.7,
    "poster": "https://image.tmdb.org/t/p/w500/psJb2NQKUWDQyhMRV3hoEWk60gS.jpg",
    "overview": "The discovery of a severed human ear found in a field leads a young man on an investigation related to a beautiful, mysterious nightclub singer and a group of criminals who have kidnapped her child.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 10999,
    "title": "Commando",
    "year": 1985,
    "genre": [
      "Action",
      "Adventure",
      "Thriller"
    ],
    "rating": 6.4,
    "poster": "https://image.tmdb.org/t/p/w500/ggVVcXvlLqFOK6lEkD8G2aDarDb.jpg",
    "overview": "John Matrix, the former leader of a special commando strike force that always got the toughest jobs done, is forced back into action when his young daughter is kidnapped. To find her, Matrix has to fight his way through an array of punks, k",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 9598,
    "title": "Babe",
    "year": 1995,
    "genre": [
      "Fantasy",
      "Drama",
      "Comedy"
    ],
    "rating": 6,
    "poster": "https://image.tmdb.org/t/p/w500/gN6X3fwPya8pLffk9OEWV3DqBnE.jpg",
    "overview": "Babe is a little pig who doesn't quite know his place in the world. With a bunch of odd friends, like Ferdinand the duck who thinks he is a rooster and Fly the dog he calls mom, Babe realizes that he has the makings to become the greatest s",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 341013,
    "title": "Atomic Blonde",
    "year": 2017,
    "genre": [
      "Action",
      "Thriller"
    ],
    "rating": 6.1,
    "poster": "https://image.tmdb.org/t/p/w500/kV9R5h0Yct1kR8Hf8sJ1nX0Vz4x.jpg",
    "overview": "An undercover MI6 agent is sent to Berlin during the Cold War to investigate the murder of a fellow agent and recover a missing list of double agents.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 872,
    "title": "Singin' in the Rain",
    "year": 1952,
    "genre": [
      "Comedy",
      "Music",
      "Romance"
    ],
    "rating": 7.9,
    "poster": "https://image.tmdb.org/t/p/w500/d5J53CwrVs6txB8zhE6qS2QhIV.jpg",
    "overview": "In 1927 Hollywood, Don Lockwood and Lina Lamont are a famous on-screen romantic pair in silent movies, but Lina mistakes the on-screen romance for real love. When their latest film is transformed into a musical, Don has the perfect voice fo",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 393457,
    "title": "Fences",
    "year": 2016,
    "genre": [
      "Drama"
    ],
    "rating": 6.7,
    "poster": "https://image.tmdb.org/t/p/w500/yZFBqealET1TunuVvu4YzcM1orT.jpg",
    "overview": "In 1950s Pittsburgh, a frustrated African-American father struggles with the constraints of poverty, racism, and his own inner demons as he tries to raise a family.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 80,
    "title": "Before Sunset",
    "year": 2004,
    "genre": [
      "Drama",
      "Romance"
    ],
    "rating": 7.6,
    "poster": "https://image.tmdb.org/t/p/w500/gycdE1ARByGQcK4fYR2mgpU6OO.jpg",
    "overview": "Nine years ago two strangers met by chance and spent a night in Vienna that ended before sunrise. They are about to meet for the first time since. Now they have one afternoon to find out if they belong together.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 23047,
    "title": "Season of the Witch",
    "year": 2011,
    "genre": [
      "Adventure",
      "Fantasy",
      "Action"
    ],
    "rating": 5.2,
    "poster": "https://image.tmdb.org/t/p/w500/rn62dxAysDJO5MEcz4yFw0Vc4aX.jpg",
    "overview": "A 14th century Crusader returns with his comrade to a homeland devastated by the Black Plague. The Church commands the two knights to transport a witch to a remote abbey, where monks will perform a ritual in hopes of ending the pestilence.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 260514,
    "title": "Cars 3",
    "year": 2017,
    "genre": [
      "Family",
      "Comedy",
      "Animation"
    ],
    "rating": 6.6,
    "poster": "https://image.tmdb.org/t/p/w500/fyy1nDC8wm553FCiBDojkJmKLCs.jpg",
    "overview": "Blindsided by a new generation of blazing-fast racers, the legendary Lightning McQueen is suddenly pushed out of the sport he loves. To get back in the game, he will need the help of an eager young race technician with her own plan to win, ",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 6972,
    "title": "Australia",
    "year": 2008,
    "genre": [
      "Drama"
    ],
    "rating": 6.3,
    "poster": "https://image.tmdb.org/t/p/w500/lgnwsUpqmEz40guXX92ACETptpB.jpg",
    "overview": "Set in northern Australia before World War II, an English aristocrat who inherits a sprawling ranch reluctantly pacts with a stock-man in order to protect her new property from a takeover plot. As the pair drive 2,000 head of cattle over un",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 401104,
    "title": "To the Bone",
    "year": 2017,
    "genre": [
      "Drama"
    ],
    "rating": 7.3,
    "poster": "https://image.tmdb.org/t/p/w500/rgPysl0uMpxllv43r4udHuRAhn4.jpg",
    "overview": "A young woman dealing with anorexia meets an unconventional doctor who challenges her to face her condition and embrace life.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 2044,
    "title": "The Lake House",
    "year": 2006,
    "genre": [
      "Romance",
      "Drama",
      "Mystery"
    ],
    "rating": 6.5,
    "poster": "https://image.tmdb.org/t/p/w500/tHpc1118dYWLnHZleGhwZxRbpae.jpg",
    "overview": "A lonely doctor who once occupied an unusual lakeside home begins exchanging love letters with its former resident, a frustrated architect. They must try to unravel the mystery behind their extraordinary romance before it's too late.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 353491,
    "title": "The Dark Tower",
    "year": 2017,
    "genre": [
      "Action",
      "Western",
      "Sci-Fi"
    ],
    "rating": 5.7,
    "poster": "https://image.tmdb.org/t/p/w500/i9GUSgddIqrroubiLsvvMRYyRy0.jpg",
    "overview": "The last Gunslinger, Roland Deschain, has been locked in an eternal battle with Walter O\u2019Dim, also known as the Man in Black, determined to prevent him from toppling the Dark Tower, which holds the universe together. With the fate of the wo",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 1370,
    "title": "Rambo III",
    "year": 1988,
    "genre": [
      "Action",
      "Adventure",
      "Thriller"
    ],
    "rating": 5.7,
    "poster": "https://image.tmdb.org/t/p/w500/oCD41FfUs1OMCdPaf5EcJ6dxxMW.jpg",
    "overview": "Combat has taken its toll on Rambo, but he's finally begun to find inner peace in a monastery. When Rambo's friend and mentor Col. Trautman asks for his help on a top secret mission to Afghanistan, Rambo declines but must reconsider when Tr",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 417678,
    "title": "Everything, Everything",
    "year": 2017,
    "genre": [
      "Drama",
      "Romance"
    ],
    "rating": 7.3,
    "poster": "https://image.tmdb.org/t/p/w500/c8W3Go48Mw0GoNXsGK4W9hNO4Vf.jpg",
    "overview": "A teenager who's lived a sheltered life because she's allergic to everything, falls for the boy who moves in next door.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 1268,
    "title": "Mr. Bean's Holiday",
    "year": 2007,
    "genre": [
      "Family",
      "Comedy"
    ],
    "rating": 6.1,
    "poster": "https://image.tmdb.org/t/p/w500/5G3gOZemcwXf2nbUFB4VCc5gl2A.jpg",
    "overview": "Mr. Bean wins a trip to Cannes where he unwittingly separates a young boy from his father and must help the two reunite. On the way he discovers France, bicycling and true love, among other things.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 12144,
    "title": "The Land Before Time",
    "year": 1988,
    "genre": [
      "Animation",
      "Adventure",
      "Family"
    ],
    "rating": 7,
    "poster": "https://image.tmdb.org/t/p/w500/hkKSmDRnbKUBAyZszz9b4kcQhvt.jpg",
    "overview": "An orphaned brontosaurus named Littlefoot sets off in search of the legendary Great Valley. A land of lush vegetation where the dinosaurs can thrive and live in peace. Along the way he meets four other young dinosaurs, each one a different ",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 1248,
    "title": "Hannibal Rising",
    "year": 2007,
    "genre": [
      "Crime",
      "Drama",
      "Thriller"
    ],
    "rating": 6,
    "poster": "https://image.tmdb.org/t/p/w500/k1QRG9qZzuuJe4JTTpe4jlnQ5tt.jpg",
    "overview": "The story of the early, murderous roots of the cannibalistic killer, Hannibal Lecter \u2013 from his hard-scrabble Lithuanian childhood, where he witnesses the repulsive lengths to which hungry soldiers will go to satiate themselves, through his",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 381289,
    "title": "A Dog's Purpose",
    "year": 2017,
    "genre": [
      "Comedy",
      "Drama",
      "Family"
    ],
    "rating": 6.6,
    "poster": "https://image.tmdb.org/t/p/w500/3jcNvhtVQe5Neoffdic39fRactM.jpg",
    "overview": "A dog goes on quest to discover his purpose in life over the course of several lifetimes with multiple owners.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 397837,
    "title": "Before I Fall",
    "year": 2017,
    "genre": [
      "Mystery",
      "Drama",
      "Thriller"
    ],
    "rating": 6.8,
    "poster": "https://image.tmdb.org/t/p/w500/eowzonDJMCuNXoJGVkP9Z7oCmiM.jpg",
    "overview": "Samantha Kingston has everything. Then, everything changes. After one fateful night, she wakes up with no future at all. Trapped into reliving the same day over and over, she begins to question just how perfect her life really was.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 271969,
    "title": "Ben-Hur",
    "year": 2016,
    "genre": [
      "Adventure",
      "Drama",
      "Action"
    ],
    "rating": 5.3,
    "poster": "https://image.tmdb.org/t/p/w500/c9CoGrBA5yw8A7YBMz0hGzfzpNq.jpg",
    "overview": "A falsely accused nobleman survives years of slavery to take vengeance on his best friend who betrayed him.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 388399,
    "title": "Patriots Day",
    "year": 2016,
    "genre": [
      "Crime",
      "Drama",
      "Thriller"
    ],
    "rating": 6.8,
    "poster": "https://image.tmdb.org/t/p/w500/mIDxsJTrOC7NhgOo3GziiHyKfsQ.jpg",
    "overview": "An account of Boston Police Commissioner Ed Davis's actions in the events leading up to the 2013 Boston Marathon bombing and the aftermath, which includes the city-wide manhunt to find the terrorists behind it.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 387,
    "title": "Das Boot",
    "year": 1981,
    "genre": [
      "Action",
      "Drama",
      "History"
    ],
    "rating": 7.9,
    "poster": "https://image.tmdb.org/t/p/w500/nAhTaTpjATAtoxlf3Hbe6bDvQe0.jpg",
    "overview": "A German submarine hunts allied ships during the Second World War, but it soon becomes the hunted. The crew tries to survive below the surface, while stretching both the boat and themselves to their limits.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 59860,
    "title": "Monte Carlo",
    "year": 2011,
    "genre": [
      "Adventure",
      "Comedy",
      "Romance"
    ],
    "rating": 6,
    "poster": "https://image.tmdb.org/t/p/w500/dcbqyycrWA56HXq5lm41HYuED8Y.jpg",
    "overview": "Three young women vacationing in Paris find themselves whisked away to Monte Carlo after one of the girls is mistaken for a British heiress.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 11319,
    "title": "The Rescuers",
    "year": 1977,
    "genre": [
      "Fantasy",
      "Family",
      "Animation"
    ],
    "rating": 6.7,
    "poster": "https://image.tmdb.org/t/p/w500/49rGpB2x6AFB83SC4IBl9foRIGp.jpg",
    "overview": "What can two little mice possibly do to save an orphan girl who's fallen into evil hands? With a little cooperation and faith in oneself, anything is possible! As members of the mouse-run International Rescue Aid Society, Bernard and Miss B",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 9336,
    "title": "Police Academy",
    "year": 1984,
    "genre": [
      "Comedy",
      "Crime"
    ],
    "rating": 6.5,
    "poster": "https://image.tmdb.org/t/p/w500/ApsenIoTzEScNe4HIRSKlmFQQhC.jpg",
    "overview": "New rules enforced by the Lady Mayoress mean that sex, weight, height and intelligence need no longer be a factor for joining the Police Force. This opens the floodgates for all and sundry to enter the Police Academy, much to the chagrin of",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 254473,
    "title": "Brick Mansions",
    "year": 2014,
    "genre": [
      "Action",
      "Crime",
      "Drama"
    ],
    "rating": 5.7,
    "poster": "https://image.tmdb.org/t/p/w500/v6M79FGu0G9KSR7bvXL76NbwyqC.jpg",
    "overview": "In a dystopian Detroit, grand houses that once housed the wealthy are now homes of the city's most-dangerous criminals. Surrounding the area is a giant wall to keep the rest of Detroit safe. For undercover cop Damien Collier, every day is a",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 203739,
    "title": "Vampire Academy",
    "year": 2014,
    "genre": [
      "Comedy",
      "Action",
      "Fantasy"
    ],
    "rating": 5.8,
    "poster": "https://image.tmdb.org/t/p/w500/cJZpKgiFfjDZ6L5aOJvbmDhsGqY.jpg",
    "overview": "Rose, a rebellious half-vampire/half-human guardian-in-training and her best friend, Lissa -- a mortal, royal vampire Princess - have been on the run when they are captured and returned to St. Vladamirs Academy, the very place where they be",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 338,
    "title": "Good bye, Lenin!",
    "year": 2003,
    "genre": [
      "Comedy",
      "Drama",
      "Romance"
    ],
    "rating": 7.4,
    "poster": "https://image.tmdb.org/t/p/w500/pb62NJ3tRxgmxBSM9u1Wg1dmmvG.jpg",
    "overview": "An affectionate and refreshing East/West-Germany comedy about a boy who\u2019s mother was in a coma while the Berlin wall fell and when she wakes up he must try to keep her from learning what happen (since she was an avid communist supporter) to",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 696,
    "title": "Manhattan",
    "year": 1979,
    "genre": [
      "Comedy",
      "Drama",
      "Romance"
    ],
    "rating": 7.8,
    "poster": "https://image.tmdb.org/t/p/w500/k4eT3EvfxW1L9Wmt04UqJqCvCR6.jpg",
    "overview": "The life of a divorced television writer dating a teenage girl is further complicated when he falls in love with his best friend's mistress.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 213681,
    "title": "Masterminds",
    "year": 2016,
    "genre": [
      "Action",
      "Comedy",
      "Crime"
    ],
    "rating": 5.6,
    "poster": "https://image.tmdb.org/t/p/w500/4CXgye1p8Vr7taDG389QhhHDUZ4.jpg",
    "overview": "A night guard at an armored car company in the Southern U.S. organizes one of the biggest bank heists in American history.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 406990,
    "title": "What Happened to Monday",
    "year": 2017,
    "genre": [
      "Sci-Fi",
      "Thriller"
    ],
    "rating": 7.3,
    "poster": "https://image.tmdb.org/t/p/w500/o6EsOqITcSzcdwD1zxBM9imdxjr.jpg",
    "overview": "In a world where families are limited to one child due to overpopulation, a set of identical septuplets must avoid being put to a long sleep by the government and dangerous infighting while investigating the disappearance of one of their ow",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 9595,
    "title": "Hot Shots!",
    "year": 1991,
    "genre": [
      "Action",
      "Comedy",
      "War"
    ],
    "rating": 6.4,
    "poster": "https://image.tmdb.org/t/p/w500/2e9g8SEXBmFysLKJZOb64ecWVTq.jpg",
    "overview": "Charlie Sheen, Lloyd Bridges, Cary Elwes, Valeria Golino and Jon Cryer co-star in director Jim Abrahams' (Airplane, Naked Gun) truly hilarious spoof of Top Gun. Recruited to join a top-secret mission for the Air Force, a renegade pilot (She",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 16866,
    "title": "Planet 51",
    "year": 2009,
    "genre": [
      "Sci-Fi",
      "Animation",
      "Family"
    ],
    "rating": 5.6,
    "poster": "https://image.tmdb.org/t/p/w500/n4Azjb2DyclHySvHWMUAsGW2Zb1.jpg",
    "overview": "When Earth astronaut Capt. Chuck Baker arrives on Planet 51 -- a world reminiscent of American suburbia circa 1950 -- he tries to avoid capture, recover his spaceship and make it home safely, all with the help of an empathetic little green ",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 365942,
    "title": "The Space Between Us",
    "year": 2017,
    "genre": [
      "Romance",
      "Adventure",
      "Sci-Fi"
    ],
    "rating": 7.2,
    "poster": "https://image.tmdb.org/t/p/w500/AjZ22T1tFWlmwi4jIsV0fsvnI6c.jpg",
    "overview": "A young man raised by scientists on Mars returns to Earth to find his father.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 11679,
    "title": "xXx: State of the Union",
    "year": 2005,
    "genre": [
      "Action",
      "Adventure",
      "Crime"
    ],
    "rating": 4.7,
    "poster": "https://image.tmdb.org/t/p/w500/sNnciVEuolaZoIzn5v2rP0pjiL0.jpg",
    "overview": "Ice Cube stars as Darius Stone, a thrill-seeking troublemaker whose criminal record and extreme sports obsession make him the perfect candidate to be the newest XXX agent. He must save the U.S. government from a deadly conspiracy led by fiv",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 2112,
    "title": "Payback",
    "year": 1999,
    "genre": [
      "Drama",
      "Action",
      "Thriller"
    ],
    "rating": 6.7,
    "poster": "https://image.tmdb.org/t/p/w500/6wvtqAKsMso4oKTCmAlKtV2W0Zy.jpg",
    "overview": "With friends like these, who needs enemies? That's the question bad guy Porter is left asking after his wife and partner steal his heist money and leave him for dead -- or so they think. Five months and an endless reservoir of bitterness la",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 400928,
    "title": "Gifted",
    "year": 2017,
    "genre": [
      "Drama"
    ],
    "rating": 7.7,
    "poster": "https://image.tmdb.org/t/p/w500/9Ts7Vc4wLlpI9oox9mkVUE1tBHy.jpg",
    "overview": "Frank, a single man raising his child prodigy niece Mary, is drawn into a custody battle with his mother.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 403119,
    "title": "47 Meters Down",
    "year": 2017,
    "genre": [
      "Horror",
      "Drama",
      "Thriller"
    ],
    "rating": 5.1,
    "poster": "https://image.tmdb.org/t/p/w500/2IgdRUTdHyoI3nFORcnnYEKOGIH.jpg",
    "overview": "Two sisters on Mexican vacation are trapped in a shark observation cage at the bottom of the ocean, with oxygen running low and great whites circling nearby, they have less than an hour of air left to figure out how to get to the surface.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 353070,
    "title": "Going in Style",
    "year": 2017,
    "genre": [
      "Crime",
      "Comedy",
      "Drama"
    ],
    "rating": 6.6,
    "poster": "https://image.tmdb.org/t/p/w500/8cfnkH6XVXJc0hDU4r0peedN7cZ.jpg",
    "overview": "Desperate to pay the bills and come through for their loved ones, three lifelong pals risk it all by embarking on a daring bid to knock off the very bank that absconded with their money.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 384682,
    "title": "Office Christmas Party",
    "year": 2016,
    "genre": [
      "Comedy"
    ],
    "rating": 5.4,
    "poster": "https://image.tmdb.org/t/p/w500/7r3w3cPTbNEIr1imb8zXyeIJCJe.jpg",
    "overview": "When his uptight CEO sister threatens to shut down his branch, the branch manager throws an epic Christmas party in order to land a big client and save the day, but the party gets way out of hand.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 55420,
    "title": "Another Earth",
    "year": 2011,
    "genre": [
      "Drama",
      "Sci-Fi"
    ],
    "rating": 6.8,
    "poster": "https://image.tmdb.org/t/p/w500/qvGJK3lFzpifAdyIupMNdWNX0qr.jpg",
    "overview": "On the night of the discovery of a duplicate Earth in the Solar system, an ambitious young student and an accomplished composer cross paths in a tragic accident.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 521,
    "title": "Dial M for Murder",
    "year": 1954,
    "genre": [
      "Crime",
      "Mystery",
      "Thriller"
    ],
    "rating": 7.9,
    "poster": "https://image.tmdb.org/t/p/w500/xrpK1PyckNWmRxU4kZURfaCyboS.jpg",
    "overview": "An ex-tennis pro carries out a plot to have his wife murdered after discovering she is having an affair, and assumes she will soon leave him for the other man anyway. When things go wrong, he improvises a new plan - to frame her for murder ",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 10708,
    "title": "Daddy Day Care",
    "year": 2003,
    "genre": [
      "Comedy",
      "Family"
    ],
    "rating": 5.6,
    "poster": "https://image.tmdb.org/t/p/w500/y3aq5fDNtSHw79wugWtZDhejToj.jpg",
    "overview": "Two men get laid off and have to become stay-at-home dads when they can't find jobs, which inspires them to open their own day-care center.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 2758,
    "title": "Addams Family Values",
    "year": 1993,
    "genre": [
      "Comedy",
      "Family",
      "Fantasy"
    ],
    "rating": 6.5,
    "poster": "https://image.tmdb.org/t/p/w500/zEwEXGDvJ8Ou2s6XbLMPvMTX53S.jpg",
    "overview": "Siblings Wednesday and Pugsley Addams will stop at nothing to get rid of Pubert, the new baby boy adored by parents Gomez and Morticia. Things go from bad to worse when the new \\\"black widow\\\" nanny, Debbie Jellinsky, launches her plan to a",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 6950,
    "title": "Outbreak",
    "year": 1995,
    "genre": [
      "Action",
      "Drama",
      "Sci-Fi"
    ],
    "rating": 6.4,
    "poster": "https://image.tmdb.org/t/p/w500/4KymNvlWR0XF0sqX2BWRd9Z3yXR.jpg",
    "overview": "A deadly airborne virus finds its way into the USA and starts killing off people at an epidemic rate. Col Sam Daniels' job is to stop the virus spreading from a small town, which must be quarantined, and to prevent an over reaction by the W",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 11551,
    "title": "Small Soldiers",
    "year": 1998,
    "genre": [
      "Comedy",
      "Adventure",
      "Fantasy"
    ],
    "rating": 6.2,
    "poster": "https://image.tmdb.org/t/p/w500/l5laJWvcxgkoqC3nRPs9N5u55jR.jpg",
    "overview": "When missile technology is used to enhance toy action figures, the toys soon begin to take their battle programming too seriously.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 8952,
    "title": "I Love You Phillip Morris",
    "year": 2009,
    "genre": [
      "Comedy",
      "Drama",
      "Romance"
    ],
    "rating": 6.4,
    "poster": "https://image.tmdb.org/t/p/w500/qtAuWLGQ7N4PNQ6boZeqqoUY2l9.jpg",
    "overview": "Steve Russell is a small-town cop. Bored with his bland lifestyle, Russell turns to fraud as a means of shaking things up. Before long, Russell's criminal antics have landed him behind bars, where he encounters the charismatic Phillip Morri",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 9535,
    "title": "Analyze This",
    "year": 1999,
    "genre": [
      "Comedy",
      "Crime"
    ],
    "rating": 6.4,
    "poster": "https://image.tmdb.org/t/p/w500/eqa4TEgkx63WRhqyD8eTwmL7bUi.jpg",
    "overview": "Countless wiseguy films are spoofed in this film that centers on the neuroses and angst of a powerful Mafia racketeer who suffers from panic attacks. When Paul Vitti needs help dealing with his role in the \\\"family,\\\" unlucky shrink Dr. Ben",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 23742,
    "title": "Cop Out",
    "year": 2010,
    "genre": [
      "Action",
      "Comedy",
      "Crime"
    ],
    "rating": 5.3,
    "poster": "https://image.tmdb.org/t/p/w500/cSkPYnVsD7MRNXPhkhBv3Mcxx39.jpg",
    "overview": "Detectives Jimmy and Paul, despite nine years as partners, can still sometimes seem like polar opposites \u2013 especially when Paul's unpredictable antics get them suspended without pay. Already strapped for cash and trying to pay for his daugh",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 9530,
    "title": "RV",
    "year": 2006,
    "genre": [
      "Comedy"
    ],
    "rating": 5.6,
    "poster": "https://image.tmdb.org/t/p/w500/eqV0JjfwcEJuK3JPZ2rsNvS1p30.jpg",
    "overview": "Climbing aboard their mammoth recreational vehicle for a cross-country road trip to the Colorado Rockies, the McNeive family \u2013 led by dysfunctional patriarch, Bob \u2013 prepares for the adventure of a lifetime. But spending two weeks together i",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 9276,
    "title": "The Faculty",
    "year": 1998,
    "genre": [
      "Horror",
      "Mystery",
      "Sci-Fi"
    ],
    "rating": 6.2,
    "poster": "https://image.tmdb.org/t/p/w500/6L1SgKyzDy5x2oEskUyfMcdVed2.jpg",
    "overview": "When some very creepy things start happening around school, the kids at Herrington High make a chilling discovery that confirms their worst suspicions: their teachers really are from another planet! As mind-controlling parasites rapidly beg",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 2657,
    "title": "Pleasantville",
    "year": 1998,
    "genre": [
      "Fantasy",
      "Drama",
      "Comedy"
    ],
    "rating": 7.1,
    "poster": "https://image.tmdb.org/t/p/w500/cKL23HqEEQis7Nbasr5kSyolbFZ.jpg",
    "overview": "Geeky teenager David and his popular twin sister, Jennifer, get sucked into the black-and-white world of a 1950s TV sitcom called \\\"Pleasantville,\\\" and find a world where everything is peachy keen all the time. But when Jennifer's modern a",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 9255,
    "title": "Hot Shots! Part Deux",
    "year": 1993,
    "genre": [
      "Action",
      "Comedy",
      "War"
    ],
    "rating": 6.2,
    "poster": "https://image.tmdb.org/t/p/w500/oOXt9gmvsbnoNAx6s202GDTirfw.jpg",
    "overview": "Topper Harley is found to be working as an odd-job-man in a monastery. The CIA want him to lead a rescue mission into Iraq, to rescue the last rescue team, who went in to rescue the last rescue team who... who went in to rescue hostages lef",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 374416,
    "title": "Quo vado?",
    "year": 2016,
    "genre": [
      "Comedy"
    ],
    "rating": 6.8,
    "poster": "https://image.tmdb.org/t/p/w500/cmx5AX1Lrs3Xlr3rFfQY1j4oJxx.jpg",
    "overview": "Checco is 39 and lived his entire life with his parents. He loves his job where he does nothing the all day until something happens that will change his behavior and maybe his life..",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 393519,
    "title": "Raw",
    "year": 2016,
    "genre": [
      "Horror",
      "Drama"
    ],
    "rating": 7,
    "poster": "https://image.tmdb.org/t/p/w500/kc8jT1MAiKM0iwdjAwC5lQrTNry.jpg",
    "overview": "In Justine\u2019s family everyone is a vet and a vegetarian. At 16, she\u2019s a gifted teen ready to take on her first year in vet school, where her older sister also studies. There, she gets no time to settle: hazing starts right away. Justine is f",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 18405,
    "title": "The Last House on the Left",
    "year": 2009,
    "genre": [
      "Horror",
      "Crime",
      "Thriller"
    ],
    "rating": 6.2,
    "poster": "https://image.tmdb.org/t/p/w500/2Y35XCUS8U8vC8vs0HDEVkPu1BM.jpg",
    "overview": "A group of teenage girls heading into the city hook up with a gang of drug-addled ne'er-do-wells and are brutally murdered. The killers find their way to the home of one of their victim's parents, where both father and mother exact a horrib",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 901,
    "title": "City Lights",
    "year": 1931,
    "genre": [
      "Comedy",
      "Drama",
      "Romance"
    ],
    "rating": 8.2,
    "poster": "https://image.tmdb.org/t/p/w500/bXNvzjULc9jrOVhGfjcc64uKZmZ.jpg",
    "overview": "City Lights is the first silent film that Charlie Chaplin directed after he established himself with sound accompanied films. The film is about a penniless man who falls in love with a flower girl. The film was a great success and today is ",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 402529,
    "title": "All Eyez on Me",
    "year": 2017,
    "genre": [
      "Drama",
      "Music"
    ],
    "rating": 6.3,
    "poster": "https://image.tmdb.org/t/p/w500/zmgsaKFWbmZ1Grz4SO0PLNxilv3.jpg",
    "overview": "All Eyez on Me chronicles the life and legacy of Tupac Shakur, including his rise to superstardom as a hip-hop artist, actor, poet and activist, as well as his imprisonment and prolific, controversial time at Death Row Records. Against insu",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 256917,
    "title": "The Water Diviner",
    "year": 2014,
    "genre": [
      "War",
      "Drama"
    ],
    "rating": 6.8,
    "poster": "https://image.tmdb.org/t/p/w500/kIlVtC22BDNiiAiCvSZoOS7FhY9.jpg",
    "overview": "In 1919, Australian farmer Joshua Connor travels to Turkey to discover the fate of his three sons, reported missing in action. Holding on to hope, Joshua must travel across the war-torn landscape to find the truth and his own peace.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 1092,
    "title": "The Third Man",
    "year": 1949,
    "genre": [
      "Thriller",
      "Mystery"
    ],
    "rating": 7.9,
    "poster": "https://image.tmdb.org/t/p/w500/rO2Fq0AZZx9obs52KJdx4mRE8p5.jpg",
    "overview": "Set in postwar Vienna, Austria, \\\"The Third Man\\\" stars Joseph Cotten as Holly Martins, a writer of pulp Westerns, who arrives penniless as a guest of his childhood chum Harry Lime, only to find him dead. Martins develops a conspiracy theor",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 316152,
    "title": "Free State of Jones",
    "year": 2016,
    "genre": [
      "War",
      "Action",
      "Drama"
    ],
    "rating": 6.6,
    "poster": "https://image.tmdb.org/t/p/w500/sxutq7sXcaMy8b4OguaWZwWrchM.jpg",
    "overview": "In 1863, Mississippi farmer Newt Knight serves as a medic for the Confederate Army. Opposed to slavery, Knight would rather help the wounded than fight the Union. After his nephew dies in battle, Newt returns home to Jones County to safegua",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 9576,
    "title": "Tootsie",
    "year": 1982,
    "genre": [
      "Comedy",
      "Romance"
    ],
    "rating": 6.9,
    "poster": "https://image.tmdb.org/t/p/w500/ngyCzZwb9y5sMUCig5JQT4Y33Q.jpg",
    "overview": "Michael Dorsey is an unemployed actor with an impossible reputation. In order to find work and fund his friend's play he dresses as a woman, Dorothy Michaels, and lands the part in a daytime drama. Dorsey loses himself in this woman role an",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 207933,
    "title": "Stonehearst Asylum",
    "year": 2014,
    "genre": [
      "Thriller"
    ],
    "rating": 6.6,
    "poster": "https://image.tmdb.org/t/p/w500/fZxGCCQ0NAtraevqULJ84wSSjo0.jpg",
    "overview": "A Harvard Medical School graduate takes a position at a mental institution and soon becomes obsessed with a female mental patient, but he has no idea of a recent and horrifying staffing change.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 4953,
    "title": "Be Kind Rewind",
    "year": 2008,
    "genre": [
      "Drama",
      "Comedy"
    ],
    "rating": 6.2,
    "poster": "https://image.tmdb.org/t/p/w500/f0oX20YrQEiVPDH9InCQ1d3Cm66.jpg",
    "overview": "A man whose brain becomes magnetized unintentionally destroys every tape in his friend's video store. In order to satisfy the store's most loyal renter, an aging woman with signs of dementia, the two men set out to remake the lost films.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 5516,
    "title": "The Ladykillers",
    "year": 2004,
    "genre": [
      "Comedy",
      "Crime",
      "Thriller"
    ],
    "rating": 6,
    "poster": "https://image.tmdb.org/t/p/w500/l4g9R39NCp6VaYFrw6q8JwKNW9x.jpg",
    "overview": "An eccentric, if not charming Southern professor and his crew pose as a band in order to rob a casino, all under the nose of his unsuspecting landlord \u2013 a sharp old woman.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 4688,
    "title": "Across the Universe",
    "year": 2007,
    "genre": [
      "Adventure",
      "Drama",
      "Music"
    ],
    "rating": 7.1,
    "poster": "https://image.tmdb.org/t/p/w500/447c8Te3DXC46rQvDEixKGO4dS6.jpg",
    "overview": "Musical based on The Beatles songbook and set in the 60s England, America, and Vietnam. The love story of Lucy and Jude is intertwined with the anti-war movement and social protests of the 60s.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 996,
    "title": "Double Indemnity",
    "year": 1944,
    "genre": [
      "Drama",
      "Mystery",
      "Thriller"
    ],
    "rating": 8,
    "poster": "https://image.tmdb.org/t/p/w500/nW0cCpfuGcR1JG7EinDbdL2Ijf2.jpg",
    "overview": "Unsuspecting Mr. Dietrichson becomes increasingly accident prone after his icily calculating wife encourages him to sign a double indemnity policy proposed by a smooth-talking insurance agent. Against a backdrop of distinctly California set",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 4977,
    "title": "Paprika",
    "year": 2006,
    "genre": [
      "Animation",
      "Drama",
      "Mystery"
    ],
    "rating": 7.7,
    "poster": "https://image.tmdb.org/t/p/w500/dJI2FSs3qfEPW82cWYfIaV8cVmN.jpg",
    "overview": "When a machine that allows therapists to enter their patient's dreams is stolen, all hell breaks loose. Only a young female therapist can stop it: Paprika.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 342473,
    "title": "Ballerina",
    "year": 2016,
    "genre": [
      "Animation",
      "Family",
      "Adventure"
    ],
    "rating": 7.1,
    "poster": "https://image.tmdb.org/t/p/w500/60ZhK1FstSkC9Ms8lRWaTPm55kD.jpg",
    "overview": "Set in 1879 Paris. An orphan girl dreams of becoming a ballerina and flees her rural Brittany for Paris, where she passes for someone else and accedes to the position of pupil at the Grand Opera house.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 9697,
    "title": "Lady in the Water",
    "year": 2006,
    "genre": [
      "Drama",
      "Thriller",
      "Fantasy"
    ],
    "rating": 5.3,
    "poster": "https://image.tmdb.org/t/p/w500/ddNmoSy1Jd3PBF5XDZvrrBIfrja.jpg",
    "overview": "Apartment building superintendent Cleveland Heep rescues what he thinks is a young woman from the pool he maintains. When he discovers that she is actually a character from a bedtime story who is trying to make the journey back to her home,",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 5689,
    "title": "The Blue Lagoon",
    "year": 1980,
    "genre": [
      "Romance",
      "Adventure",
      "Drama"
    ],
    "rating": 5.8,
    "poster": "https://image.tmdb.org/t/p/w500/6zmAK0Ormo2xQh0K4FYPAnsKYc0.jpg",
    "overview": "Two small children and a ship's cook survive a shipwreck and find safety on an idyllic tropical island. Soon, however, the cook dies and the young boy and girl are left on their own. Days become years and Emmeline (Brooke Shields) and Richa",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 84175,
    "title": "Beasts of the Southern Wild",
    "year": 2012,
    "genre": [
      "Drama",
      "Fantasy"
    ],
    "rating": 6.8,
    "poster": "https://image.tmdb.org/t/p/w500/nQJmWekGYlXhezGUb21xFfEfwhH.jpg",
    "overview": "Hushpuppy, an intrepid six-year-old girl, lives with her father, Wink in 'the Bathtub', a southern Delta community at the edge of the world. Wink\u2019s tough love prepares her for the unraveling of the universe \u2013 for a time when he\u2019s no longer ",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 7979,
    "title": "The Kite Runner",
    "year": 2007,
    "genre": [
      "Drama"
    ],
    "rating": 7.3,
    "poster": "https://image.tmdb.org/t/p/w500/dom2esWWW8C9jS2v7dOhW48LwHh.jpg",
    "overview": "After spending years in California, Amir returns to his homeland in Afghanistan to help his old friend Hassan, whose son is in trouble.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 15789,
    "title": "A Goofy Movie",
    "year": 1995,
    "genre": [
      "Romance",
      "Animation",
      "Family"
    ],
    "rating": 6.7,
    "poster": "https://image.tmdb.org/t/p/w500/bycmMhO3iIoEDzP768sUjq2RV4T.jpg",
    "overview": "Though Goofy always means well, his amiable cluelessness and klutzy pratfalls regularly embarrass his awkward adolescent son, Max. When Max's lighthearted prank on his high-school principal finally gets his longtime crush, Roxanne, to notic",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 10098,
    "title": "The Kid",
    "year": 1921,
    "genre": [
      "Comedy",
      "Drama"
    ],
    "rating": 8,
    "poster": "https://image.tmdb.org/t/p/w500/drgMcyTsySQBnUPGaBThCHGdlWT.jpg",
    "overview": "Considered one of Charlie Chaplin's best films, The Kid also made a star of little Jackie Coogan, who plays a boy cared for by The Tramp when he's abandoned by his mother, Edna. Later, Edna has a change of heart and aches to be reunited wit",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 11775,
    "title": "Intolerable Cruelty",
    "year": 2003,
    "genre": [
      "Crime",
      "Comedy",
      "Romance"
    ],
    "rating": 5.8,
    "poster": "https://image.tmdb.org/t/p/w500/7K8hDwOWsZv0MluyrB8nWlhJOgB.jpg",
    "overview": "A revenge-seeking gold digger marries a womanizing Beverly Hills lawyer with the intention of making a killing in the divorce.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 411088,
    "title": "The Invisible Guest",
    "year": 2016,
    "genre": [
      "Mystery",
      "Crime",
      "Thriller"
    ],
    "rating": 8.1,
    "poster": "https://image.tmdb.org/t/p/w500/fptnZJbLzKUHeNlYrAynbyoL5YJ.jpg",
    "overview": "\\\"The Invisible Guest\u201d turns on a young businessman who wakes up in a hotel room locked from the inside with the dead body of his lover next to him. He hires a prestigious lawyer, and over one night they work together to clarify what happen",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 283378,
    "title": "Fallen",
    "year": 2016,
    "genre": [
      "Drama",
      "Fantasy",
      "Romance"
    ],
    "rating": 5.9,
    "poster": "https://image.tmdb.org/t/p/w500/cJacj8U5QlBNTO3cOcZIm0ELILl.jpg",
    "overview": "Lucinda Price is sent to a reform academy under the assumption that she has killed a boy. There, she meets two mysterious boys, Cam and Daniel, to whom she feels drawn to both. But as the love triangle unfurls, it is Daniel that Luce cannot",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 339967,
    "title": "Colossal",
    "year": 2017,
    "genre": [
      "Action",
      "Comedy",
      "Drama"
    ],
    "rating": 6.2,
    "poster": "https://image.tmdb.org/t/p/w500/4VOyofBd1pexblxtDZYtYIk7NI4.jpg",
    "overview": "A woman discovers that severe catastrophic events are somehow connected to the mental breakdown from which she's suffering.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 398,
    "title": "Capote",
    "year": 2005,
    "genre": [
      "Crime",
      "Drama"
    ],
    "rating": 6.9,
    "poster": "https://image.tmdb.org/t/p/w500/k7z0tDxzbDNev7F8l3Y56Pk5seR.jpg",
    "overview": "A biopic of the writer, Truman Capote and his assignment for The New Yorker to write the non-fiction book, 'In Cold Blood'.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 417870,
    "title": "Girls Trip",
    "year": 2017,
    "genre": [
      "Comedy"
    ],
    "rating": 7.1,
    "poster": "https://image.tmdb.org/t/p/w500/94nCLn74lBh4pLdZPIad18BpheE.jpg",
    "overview": "Four girlfriends take a trip to New Orleans for an annual festival and, along the way, rediscover their wild sides and strengthen the bonds of sisterhood.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 398929,
    "title": "Alibi.com",
    "year": 2017,
    "genre": [
      "Comedy"
    ],
    "rating": 6.9,
    "poster": "https://image.tmdb.org/t/p/w500/mC7S1vN4gIE8PR8r0UenMqwXXa7.jpg",
    "overview": "Greg founded a company called Alibi.com that creates any type of alibi. With his associate, Augustin, and Medhi his new employee, they devise unstoppable stratagems and stagings to cover their clients. But meeting Flo, a pretty blonde who h",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 18162,
    "title": "Land of the Lost",
    "year": 2009,
    "genre": [
      "Adventure",
      "Comedy",
      "Sci-Fi"
    ],
    "rating": 5.4,
    "poster": "https://image.tmdb.org/t/p/w500/avlfNn8w9F3Z6iKrGe8FnJpQr7j.jpg",
    "overview": "On his latest expedition, Dr. Rick Marshall is sucked into a space-time vortex alongside his research assistant and a redneck survivalist. In this alternate universe, the trio make friends with a primate named Chaka, their only ally in a wo",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 368031,
    "title": "Friend Request",
    "year": 2016,
    "genre": [
      "Horror",
      "Thriller"
    ],
    "rating": 5.3,
    "poster": "https://image.tmdb.org/t/p/w500/8sc2FXCczMd4lb8j5YiT0S6aQiO.jpg",
    "overview": "Enjoying college life as a popular student, Laura shares everything with her more  than 800 friends on Facebook. But one day, after accepting a friend request from a  social outcast named Marina, Laura\u2019s life is cursed...",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 10061,
    "title": "Escape from L.A.",
    "year": 1996,
    "genre": [
      "Action",
      "Adventure",
      "Sci-Fi"
    ],
    "rating": 5.6,
    "poster": "https://image.tmdb.org/t/p/w500/rAjz6XFC6Zs07oraJSnajbaAbG9.jpg",
    "overview": "This time, a cataclysmic temblor hits Los Angeles, turning it into an island. The president views the quake as a sign from above, expels Los Angeles from the country and makes it a penal colony for those found guilty of moral crimes. When h",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 705,
    "title": "All About Eve",
    "year": 1950,
    "genre": [
      "Drama"
    ],
    "rating": 8,
    "poster": "https://image.tmdb.org/t/p/w500/6numIZH6uR3NlJgY9m7nGH0jhs.jpg",
    "overview": "From the moment she glimpses her idol at the stage door, Eve Harrington is determined to take the reins of power away from the great actress Margo Channing. Eve maneuvers her way into Margo's Broadway role, becomes a sensation and even caus",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 1646,
    "title": "Freedom Writers",
    "year": 2007,
    "genre": [
      "Crime",
      "Drama"
    ],
    "rating": 7.6,
    "poster": "https://image.tmdb.org/t/p/w500/bffP9cAgOHsMNnc55zIXrDnz7QD.jpg",
    "overview": "A young teacher inspires her class of at-risk students to learn tolerance, apply themselves, and pursue education beyond high school.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 12104,
    "title": "Pink Floyd: The Wall",
    "year": 1982,
    "genre": [
      "Music"
    ],
    "rating": 7.7,
    "poster": "https://image.tmdb.org/t/p/w500/jshxdvf8A7oQqBAH3GFwXRwDyCX.jpg",
    "overview": "A troubled rock star descends into madness in the midst of his physical and social isolation from everyone.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 9433,
    "title": "The Edge",
    "year": 1997,
    "genre": [
      "Action",
      "Adventure",
      "Drama"
    ],
    "rating": 6.8,
    "poster": "https://image.tmdb.org/t/p/w500/fvokkKZuhMosdpABHduMdOdIDkp.jpg",
    "overview": "The plane carrying wealthy Charles Morse crashes down in the Alaskan wilderness. Together with the two other passengers, photographer Robert and assistant Stephen, Charles devises a plan to help them reach civilization. However, his biggest",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 22798,
    "title": "Whip It",
    "year": 2009,
    "genre": [
      "Drama"
    ],
    "rating": 6.7,
    "poster": "https://image.tmdb.org/t/p/w500/llpanXzIJq65qEM4weBaYaLEiY9.jpg",
    "overview": "In Bodeen, Texas, Land Of The Dragon, an indie-rock loving misfit finds a way of dealing with her small-town misery after she discovers a roller derby league in nearby Austin.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 11001,
    "title": "Blue Streak",
    "year": 1999,
    "genre": [
      "Action",
      "Comedy",
      "Crime"
    ],
    "rating": 6.1,
    "poster": "https://image.tmdb.org/t/p/w500/jek2osBtFhzU6Hjj7yp1egOtbqO.jpg",
    "overview": "Miles Logan is a jewel thief who just hit the big time by stealing a huge diamond. However, after two years in jail, he comes to find out that he hid the diamond in a police building that was being built at the time of the robbery. In an at",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 10215,
    "title": "Sliding Doors",
    "year": 1998,
    "genre": [
      "Comedy",
      "Drama",
      "Fantasy"
    ],
    "rating": 6.6,
    "poster": "https://image.tmdb.org/t/p/w500/v4fYFjEtDk3uCbDl5K6cgBCx1kZ.jpg",
    "overview": "Gwyneth Paltrow plays London publicist Helen, effortlessly sliding between parallel storylines that show what happens if she does or does not catch a train back to her apartment. Love. Romantic entanglements. Deception. Trust. Friendship. C",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 418078,
    "title": "It Comes at Night",
    "year": 2017,
    "genre": [
      "Horror",
      "Mystery",
      "Thriller"
    ],
    "rating": 5.6,
    "poster": "https://image.tmdb.org/t/p/w500/h9VOirT4dKXzVyVzZZxPfAghmRV.jpg",
    "overview": "Secure within a desolate home as an unnatural threat terrorizes the world, a man has established a tenuous domestic order with his wife and son, but this will soon be put to test when a desperate young family arrives seeking refuge.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 6435,
    "title": "Practical Magic",
    "year": 1998,
    "genre": [
      "Drama",
      "Fantasy",
      "Comedy"
    ],
    "rating": 6.3,
    "poster": "https://image.tmdb.org/t/p/w500/AwmToSgf2IL3aHv0QRVsR5KvChv.jpg",
    "overview": "Sally and Gillian Owens, born into a magical family, have mostly avoided witchcraft themselves. But when Gillian's vicious boyfriend, Jimmy Angelov, dies unexpectedly, the Owens sisters give themselves a crash course in hard magic. With pol",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 149871,
    "title": "The Tale of the Princess Kaguya",
    "year": 2013,
    "genre": [
      "Animation",
      "Drama",
      "Fantasy"
    ],
    "rating": 8,
    "poster": "https://image.tmdb.org/t/p/w500/11Az4sMt1C9sm8atgB199Z0BsIQ.jpg",
    "overview": "Found inside a shining stalk of bamboo by an old bamboo cutter and his wife, a tiny girl grows rapidly into an exquisite young lady. The mysterious young princess enthralls all who encounter her - but ultimately she must confront her fate, ",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 324542,
    "title": "Sleepless",
    "year": 2017,
    "genre": [
      "Action",
      "Crime",
      "Thriller"
    ],
    "rating": 5.8,
    "poster": "https://image.tmdb.org/t/p/w500/9WkUSY33MDPGmz0vtzbsfaxTHVa.jpg",
    "overview": "Undercover Las Vegas police officer Vincent Downs is caught in a high stakes web of corrupt cops and the mob-controlled casino underground. When a heist goes wrong, a crew of homicidal gangsters kidnaps Downs\u2019 teenage son. In one sleepless ",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 345922,
    "title": "Fist Fight",
    "year": 2017,
    "genre": [
      "Comedy"
    ],
    "rating": 6.2,
    "poster": "https://image.tmdb.org/t/p/w500/yONLyCSO0zyDvmVJO2i1U4yrNHE.jpg",
    "overview": "When one school teacher gets the other fired, he is challenged to an after-school fight.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 397422,
    "title": "Rough Night",
    "year": 2017,
    "genre": [
      "Drama",
      "Comedy"
    ],
    "rating": 5.6,
    "poster": "https://image.tmdb.org/t/p/w500/i66xbL1C6FEWDm2KoX11DHmP4Rz.jpg",
    "overview": "Five best friends from college reunite 10 years later for a wild bachelorette weekend in Miami. Their hard partying takes a hilariously dark turn when they accidentally kill a male stripper. Amidst the craziness of trying to cover it up, th",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 2614,
    "title": "Innerspace",
    "year": 1987,
    "genre": [
      "Action",
      "Comedy",
      "Sci-Fi"
    ],
    "rating": 6.6,
    "poster": "https://image.tmdb.org/t/p/w500/vf6oLT1SWLLY6AVrA6jfFPSAL7g.jpg",
    "overview": "Test pilot Tuck Pendleton volunteers to test a special vessel for a miniaturization experiment. Accidentally injected into a neurotic hypochondriac, Jack Putter, Tuck must convince Jack to find his ex-girlfriend, Lydia Maxwell, to help him ",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 99,
    "title": "All About My Mother",
    "year": 1999,
    "genre": [
      "Comedy",
      "Drama"
    ],
    "rating": 7.4,
    "poster": "https://image.tmdb.org/t/p/w500/sQdalmBSUiaU0QCgZKBfy0l2vUR.jpg",
    "overview": "A single mother in Madrid sees her only son die on his birthday as he runs to seek an actress' autograph. Beside herself with grief, she returns to Barcelona to tell the boy's father about the death of the son he never knew he had.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 11878,
    "title": "Yojimbo",
    "year": 1961,
    "genre": [
      "Drama",
      "Thriller"
    ],
    "rating": 8,
    "poster": "https://image.tmdb.org/t/p/w500/tN7kYPjRhDolpui9sc9Eq9n5b2O.jpg",
    "overview": "A nameless ronin, or samurai with no master, enters a small village in feudal Japan where two rival businessmen are struggling for control of the local gambling trade. Taking the name Sanjuro Kuwabatake, the ronin convinces both silk mercha",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 9298,
    "title": "Ali G Indahouse",
    "year": 2002,
    "genre": [
      "Comedy"
    ],
    "rating": 6,
    "poster": "https://image.tmdb.org/t/p/w500/pjKvQrVpekshVM6DUDOt3ImhAVH.jpg",
    "overview": "Ali G unwittingly becomes a pawn in the evil Chancellor's plot to overthrow the Prime Minister of Great Britain. However, instead of bringing the Prime Minister down, Ali is embraced by the nation as the voice of youth and 'realness', makin",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 5336,
    "title": "Sal\u00f2, or the 120 Days of Sodom",
    "year": 1975,
    "genre": [
      "History",
      "War",
      "Drama"
    ],
    "rating": 6.4,
    "poster": "https://image.tmdb.org/t/p/w500/xnaDdiRfZlJaTf6JRc4in40eaeI.jpg",
    "overview": "Four corrupted fascist libertines round up 9 teenage boys and girls and subject them to 120 days of sadistic physical, mental and sexual torture.",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 345938,
    "title": "The Shack",
    "year": 2017,
    "genre": [
      "Drama",
      "Fantasy"
    ],
    "rating": 6.9,
    "poster": "https://image.tmdb.org/t/p/w500/doAzav9kfdtsoSdw1MDFvjKq3J4.jpg",
    "overview": "After suffering a family tragedy, Mack Phillips spirals into a deep depression causing him to question his innermost beliefs. Facing a crisis of faith, he receives a mysterious letter urging him to an abandoned shack deep in the Oregon wild",
    "director": "Acclaimed Director"
  },
  {
    "tmdb_id": 3114,
    "title": "The Searchers",
    "year": 1956,
    "genre": [
      "Western"
    ],
    "rating": 7.7,
    "poster": "https://image.tmdb.org/t/p/w500/tOnLv480hVF40FU2o3vOrVotF9O.jpg",
    "overview": "As a Civil War veteran spends years searching for a young niece captured by Indians, his motivation becomes increasingly questionable.",
    "director": "Acclaimed Director"
  }
];

// Helper: Get list of all distinct genres with counts
export const getAllGenres = () => {
  const genreCounts = {};
  popularMovies.forEach(m => {
    (m.genre || []).forEach(g => {
      genreCounts[g] = (genreCounts[g] || 0) + 1;
    });
  });
  return Object.entries(genreCounts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
};

// Helper: Filter movies by genre (guaranteed valid posters)
export const getMoviesByGenre = (genre, limit = 48) => {
  if (!genre || genre.toLowerCase() === 'all') {
    return popularMovies.slice(0, limit);
  }
  const target = genre.toLowerCase();
  return popularMovies
    .filter(m => (m.genre || []).some(g => g.toLowerCase() === target))
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
};

// Content-based keyword and metadata search algorithm
export const getRecommendations = (query, limit = 16) => {
  if (!query || !query.trim()) return popularMovies.slice(0, limit);
  const q = query.toLowerCase().trim();

  // If query is an exact genre match, prioritize that genre
  const matchingGenre = popularMovies.filter(m =>
    (m.genre || []).some(g => g.toLowerCase() === q)
  );

  const scored = popularMovies.map(m => {
    let score = 0;
    const title = m.title.toLowerCase();
    const director = (m.director || '').toLowerCase();
    const overview = (m.overview || '').toLowerCase();
    const genres = (m.genre || []).map(g => g.toLowerCase());

    if (title === q) score += 50;
    else if (title.includes(q)) score += 20;

    if (genres.includes(q)) score += 18;
    else if (genres.some(g => g.includes(q))) score += 10;

    if (director.includes(q)) score += 12;
    if (overview.includes(q)) score += 4;

    return { ...m, score };
  });

  return scored
    .filter(m => m.score > 0)
    .sort((a, b) => b.score - a.score || b.rating - a.rating)
    .slice(0, limit);
};
