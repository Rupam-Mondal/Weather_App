import { create } from "zustand";

const useStore = create((set) => ({
    place: 'Kolkata',
    updatePlace: (newPlace) => set(() => ({ place: newPlace })),
}));

export default useStore;
