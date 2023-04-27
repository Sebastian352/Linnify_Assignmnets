export const getMovies = async(limit:number,page:number) => {
    const  response = await fetch(`https://6448d351e7eb3378ca36d040.mockapi.io/api/movies?limit=5&page=${page}`);
    console.log({response});
    const json = await response.json();
    console.log({json});
    return json
}