
import * as actionTypes from '../actions';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
   
    if (action.type === actionTypes.STORE_RESULT) {
        //Concat returns a new array instead of push that is the same state
        return {
            ...state, results: state.results.concat({
                id: new Date(),
                value: action.result
            })
        };
    }

    if (action.type === actionTypes.DELETE_RESULT) {
        const updatedArray = state.results.filter(result => result.id !== action.resultElId);
        return { ...state, results: updatedArray };
    }

    return state;
};

export default reducer;