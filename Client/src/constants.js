export const STORAGE_KEY = 'TO-DO-ITEMS'
const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
export const API_ROUTES = {
    HOME: `${API_ENDPOINT}/`,
    TO_DO_ITEMS: {
        ADD_ITEM : `${API_ENDPOINT}/add`,
        EDIT_ITEM : `${API_ENDPOINT}/edit`, 
        DELETE_ITEM : `${API_ENDPOINT}/delete`,
        UPDATE_ITEM : `${API_ENDPOINT}/update`,
        LIST_ITEMS: `${API_ENDPOINT}/list`
    }
}