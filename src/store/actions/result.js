import * as actionType from "./actionType";
/** create both. Sync and Asyc version of the action creator */
export const saveResult = result => {
    return { type: actionType.STORE_RESULT, result: result };
};

export const storeResult = result => {
    return (dispatch, getState) => {
        setTimeout(() => {
            const oldCounter = getState().counter.counter;
            console.log(oldCounter);
            dispatch(saveResult(result));
        }, 2000);
    };
};

export const deleteResult = resultElId => {
    return { type: actionType.DELETE_RESULT, resultElId: resultElId };
};