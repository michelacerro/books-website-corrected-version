// logReducer
export const loginState = () => {
    return {
        type: 'LOG_IN'
    }
}

export const logoutState = () => {
    return {
        type: 'LOG_OUT'
    }
}


// searchReducer
export const setResearch = (string) => {
    return {
        type: 'SET_RESEARCH',
        value: string
    }
}


// listReducer
export const addBook = (object) => {
    return {
        type: 'ADD_BOOK',
        data: object
    }
}

export const deleteBook = (string) => {
    return {
        type: 'DELETE_BOOK',
        id: string
    }
}