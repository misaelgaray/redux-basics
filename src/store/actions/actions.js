export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBSTRACT = 'SUBSTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = "DELETE_RESULT";

export const increment= () => {
    return {
        type : INCREMENT
    };
};
export const decrement = () => {
    return {
        type: DECREMENT
    };
};
export const add = (val) => {
    return {
        type: ADD,
        val: val
    };
};
export const subsctract = (val) => {
    return {
        type: SUBSTRACT,
        val: val
    };
};
export const storeResult = result => {
    return { 
        type: STORE_RESULT, result: result
    };
};
export const deleteResult = resultElId => {
         return { type: DELETE_RESULT, resultElId: resultElId };
};