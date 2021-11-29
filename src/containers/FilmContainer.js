import { useEffect, useState } from "react";
import FilmDetails from '../components/FilmDetails';
import FilmSelector from '../components/FilmSelector';


function FilmContainer() {
    const [film, setFilm] = useState({});
    const [selectedFilmId, setSelectedFilmId] = useState(0);
    const [loaded, setLoaded] = useState(false);


    useEffect(() => {
        getFilm();
    }, []);

    useEffect(() => {
        getFilm();
    }, [selectedFilmId]);

    const getFilm = async () => {
        const response = await fetch(`https://ghibliapi.herokuapp.com/films/${selectedFilmId}`);
        const data = await response.json();
        await setFilm(data);
        await setLoaded(true);
    }

    const incrementSelectedFilmId = () => {
        setSelectedFilmId(selectedFilmId + 1);
        if (selectedFilmId >= 21) {
            return;
        }
    };

    const decrementSelectedFilmId = () => {
        if (selectedFilmId <= 1) {
            return;

        }
        setSelectedFilmId(selectedFilmId - 1);
    };


    return (
        <>
            <h1>Film Details</h1>
            <FilmSelector
                onSelectedFilmIncrement={incrementSelectedFilmId}
                onSelectedFilmDecrement={decrementSelectedFilmId}
            />
            <FilmDetails film={film} loaded={loaded} />
        </>
    );
}


export default FilmContainer;