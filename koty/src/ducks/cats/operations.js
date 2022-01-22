import { createAction } from "redux-api-middleware"
import types from './types';

export const getCatList = () => {
    return createAction({
        endpoint: '/cats',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        types: [
            types.CAT_LIST_REQUEST,
            types.CAT_LIST_SUCCESS,
            types.CAT_LIST_FAILURE
        ]
    })
}

export const createCat = (newCat) => {
    return createAction({
        endpoint: '/cats',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newCat),
        types: [
            types.CAT_CREATE_REQUEST,
            types.CAT_CREATE_SUCCESS,
            types.CAT_CREATE_FAILURE
        ]
    })
}
export const editCat = (editCat) => {
    return createAction({
        endpoint: `/cats/${editCat._id}`,
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(editCat),
        types: [
            types.CAT_EDIT_REQUEST,
            types.CAT_EDIT_SUCCESS,
            types.CAT_EDIT_FAILURE
        ]
    })
}
export const deleteCat = (deleteCat) => {
    return createAction({
        endpoint: `/cats/${deleteCat}`,
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        types: [
            types.CAT_DELETE_REQUEST,
            types.CAT_DELETE_SUCCESS,
            types.CAT_DELETE_FAILURE
        ]
    })
}