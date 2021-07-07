const initialState = {
    books: []
}

const listReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_BOOK':
            return {
                ...state,
                books: [action.data, ...state.books]
            };
        case 'DELETE_BOOK':
            return {
                ...state,
                books: state.books.filter(book => book.id !== action.id)
            };
        default:
            return state;
    }
}
export default listReducer;