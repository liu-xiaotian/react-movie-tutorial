import MovieCard from "../components/MovieCard";
function Home() {
  const movies = [
    { id: 1, title: "John 1", release_date: "2020" },
    { id: 2, title: "John 2", release_date: "2022" },
    { id: 3, title: "John 3", release_date: "2023" },
  ];

  return (
    <div className="home">
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
