const initialState = {
    count: 0
}

const counterReducer = (state=initialState, action) => {
    switch(action.type){

        case "INCREMENT COUNTER":
            return {...state, count: action.count};

        case "DECREMENT COUNTER":
            return {...state, count: action.count};

        default:
            return state;
    }
}

export default counterReducer;