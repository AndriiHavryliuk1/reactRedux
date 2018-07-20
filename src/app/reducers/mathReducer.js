
const mathReducer = (state = {
    result: 1,
    lastValues: []
}, action) => {
    switch (action.type) {
        case "ADD":
            state =  Object.assign({}, state, {
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            });
            break;
        case "SUBTRACT":
            state =  Object.assign({}, state, {
                result: state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]
            });
            break;
    }

    return state;
}

export default mathReducer;