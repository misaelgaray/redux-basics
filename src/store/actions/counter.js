import * as actionType from './actionType';
export const increment = () => {
    return { type: actionType.INCREMENT };
};
export const decrement = () => {
    return { type: actionType.DECREMENT };
};
export const add = (val) => {
    return { type: actionType.ADD, val: val };
};
export const subsctract = (val) => {
    return { type: actionType.SUBSTRACT, val: val };
};