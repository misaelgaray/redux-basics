import * as actionTypes from '../actions/actionType';
const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    if (action.type === actionTypes.INCREMENT) {
        return {
            //Don't copy the object with ...state because we only have the counter property
            ...state,
            counter: state.counter + 1
        }
    }

    if (action.type === actionTypes.DECREMENT) {
        return { ...state, counter: state.counter - 1 };
    }

    if (action.type === actionTypes.ADD) {
        return { ...state, counter: state.counter + action.val };
    }

    if (action.type === actionTypes.SUBSTRACT) {
        return { ...state, counter: state.counter - action.val };
    }

    return state;
};

export default reducer;