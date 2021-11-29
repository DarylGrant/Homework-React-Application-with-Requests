function FilmSelector({onSelectedFilmIncrement, onSelectedFilmDecrement}) {
    return (
        <>
        <button onClick={onSelectedFilmDecrement}>Previous Film</button>
        <button onClick={onSelectedFilmIncrement}>Next Film</button>
        </>
    );
}

export default FilmSelector;