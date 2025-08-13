import { create } from "zustand";

type FilmType = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

type Store = {
  films: FilmType[];
  AddFilm: (films: FilmType[]) => void;
  DeleteFilm: (id: string) => void;
};

const useStore = create<Store>((set) => ({
  films: [],
  AddFilm: (films) =>
    set(() => ({
      films: films,
    })),
  DeleteFilm: (id) =>
    set((state) => ({
      films: [],
    })),
}));

export default useStore;
