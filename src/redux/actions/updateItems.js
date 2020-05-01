export const updateItems = (state, payload) => {
    return state.cart.filter((item, i)=>i!==payload)
};