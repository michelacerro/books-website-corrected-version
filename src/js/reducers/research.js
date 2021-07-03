const researchReducer = (state = '', action) => {
    switch(action.type) {
        case 'SET_RESEARCH':
            return state = action.value;
        default:
            return state = '';
    }
}
export default researchReducer;