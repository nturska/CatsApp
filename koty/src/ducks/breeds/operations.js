import { createAction } from "redux-api-middleware"
import types from './types';

export const getBreedList = () => {
    return createAction({
        endpoint: '/breeds',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        types: [
            types.BREED_LIST_REQUEST,
            types.BREED_LIST_SUCCESS,
            types.BREED_LIST_FAILURE
        ]
    })
}

export const createBreed = (newBreed) => {
    return createAction({
        endpoint: '/breeds',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newBreed),
        types: [
            types.BREED_LIST_REQUEST,
            types.BREED_LIST_SUCCESS,
            types.BREED_LIST_FAILURE
        ]
    })
}
export const editBreed = (editBreed) => {
    return createAction({
        endpoint: `/breeds/${editBreed._id}`,
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(editBreed),
        types: [
            types.BREED_EDIT_REQUEST,
            types.BREED_EDIT_SUCCESS,
            types.BREED_EDIT_FAILURE
        ]
    })
}
export const deleteBreed = (deleteBreed) => {
    return createAction({
        endpoint: `/breeds/${deleteBreed}`,
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        types: [
            types.BREED_DELETE_REQUEST,
            types.BREED_DELETE_SUCCESS,
            types.BREED_DELETE_FAILURE
        ]
    })
}