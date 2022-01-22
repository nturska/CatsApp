export const getBreeds = state => state.breeds;

export const getBreedById = (state, breedId) => state.breeds.find( breed => breed._id === breedId)