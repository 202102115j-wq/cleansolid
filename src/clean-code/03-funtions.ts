(() => {

    // función para obtener información de una película por Id
    function fetchFilmDetails(filmId: string) {
        console.log({ filmId });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function fetchFilmActors(filmIdentifier: string) {
        console.log({ filmIdentifier });
    }

    // funcion para obtener el bio del actor por el id
    function fetchActorBiography(personId: string) {
        console.log({ personId });
    }

    // Crear una película
    function registerFilm(filmTitle: string, filmDescription: string, filmRating: number, actorList: string[]) {
        console.log({ filmTitle, filmDescription, filmRating, actorList });
    }

    // Crea un nuevo actor
    function registerActor(actorName: string, dateOfBirth: Date): boolean {

        // tarea asincrona para verificar nombre
        // ..
        // ..
        if (actorName === 'fernando') return false;

        console.log('Crear actor');
        return true;        
    }

    const calculateSalary = ({ deceased = false, hasSeparated = true, retired = false }): number => {
        //let result;

        if (deceased) return 1500;
        if (hasSeparated) return 2500;
        return (retired) ? 3000 : 4000;

        /*if (isDead) {
        result = 1500;
        } else {
        if (isSeparated) {
            result = 2500;
        } else {
            if (isRetired) {
            result = 3000;
            } else {
            result = 4000;
            }
        }
        }

        return result;*/
    };

})();