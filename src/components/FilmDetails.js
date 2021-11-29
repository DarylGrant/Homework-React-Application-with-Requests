function FilmDetails({ film, loaded }) {
    if (!loaded) {
        return (
            <p>Loading...</p>
        );
    }

    return (
        <>
            <h2>{film.title}</h2>
            <p>{film.release_date}</p>
            <p>{film.description}</p>
        </>
    );

}

export default FilmDetails;