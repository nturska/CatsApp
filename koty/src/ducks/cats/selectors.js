export const getCats = state => state.cats;

export const getCatsOfBreed = (state, breedid) => state.cats.filter(cat => cat.breed._id === breedid)

export const getCatById = (state, catId) => state.cats.find( cat => cat._id === catId)