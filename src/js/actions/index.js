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