import types from './types';

export const catsReducer = (state = [], action) => {
    switch(action.type) {
        case types.CAT_LIST_SUCCESS:
            return [...action.payload];
        case types.CAT_CREATE_SUCCESS:
            return [...state, action.payload]
        case types.CAT_DELETE_SUCCESS:
            return [...state.filter(el => el.id !== action.payload)]
        case types.CAT_EDIT_SUCCESS:
            return [...state.map(cat => (action.payload._id === cat._id)? action.payload : cat)]
        default:
            return state;
    }
}