
const userReducer = (state = {
    name: "Sonik",
    age: 21
}, action) => {
    switch (action.type) {
        case "SET_NAME":
        case "SET_NAME_FULFILLED":
            state = Object.assign({}, state, {
                name: action.payload
            });
            break;
        case "SET_AGE":
            state = Object.assign({}, state, {
                age: action.payload
            });
            break;
    }

    return state;
}

export default userReducer;