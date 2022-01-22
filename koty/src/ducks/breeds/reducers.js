import types from './types';

export const breedsReducer = (state = [], action) => {
    switch(action.type) {
        case types.BREED_LIST_SUCCESS:
            return [...action.payload];
        case types.BREED_CREATE_SUCCESS:
            return [...state, action.payload];
        case types.BREED_DELETE_SUCCESS:
            return [...state.filter(el => el._id !== action.payload._id)];
        case types.BREED_EDIT_SUCCESS:
                return [...state.map(el => (action.payload._id === el._id)? action.payload : el)]
        default:
            return state;
    }
}