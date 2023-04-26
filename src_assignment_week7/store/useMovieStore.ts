import { create } from 'zustand'
import { Movie } from '../types/MovieProps'
import {zustandStorage} from './zustandStorage';
import {createJSONStorage,persist} from 'zustand/middleware'

const fixedData: Movie[] = [
    {
      id: 1,
      image: require('../../src_assignment/assets/inception.jpg'),
      title: 'Inception (2010)',
      description:
        "Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobb's criminal history as payment for performing an inception on his sick competitor's son.",
    },
    {
      id: 2,
      image: require('../../src_assignment/assets/parasite.jpg'),
      title: 'Parasite (2019)',
      description:
        'The struggling Kim family sees an opportunity when the son starts working for the wealthy Park family. Soon, all of them find a way to work within the same household and start living a parasitic life.',
    },
    {
      id: 3,
      image: require('../../src_assignment/assets/interstellar.png'),
      title: 'Interstellar (2014)',
      description:
        'When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.',
    },
  ];


export interface MovieState{
    movies : Movie[];
    movie  : Movie | null;
    setCurrentMovie: (movie:Movie) => void
}

const useMovieStore = create(persist<MovieState>((set) => ({
  movies:fixedData,
  movie: null,
  setCurrentMovie: (newMovie: Movie) => set((state: MovieState) => ({ movie: newMovie })),
}),{
  name:'movie-storage',
  storage:createJSONStorage(()=> zustandStorage)
}))

export default useMovieStore;



