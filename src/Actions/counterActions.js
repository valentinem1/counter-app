export const incrementCounter = (count) => {
    return {
        type: "INCREMENT COUNTER",
        count
    }
}

export const decrementCounter = (count) => {
    return{
        type: "DECREMENT COUNTER",
        count
    }
}