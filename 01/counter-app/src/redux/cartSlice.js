import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
    name: "toggle",
    initialState: {
        items: ['shirt', 'jeans', 'T-shirts']
    },
    reducers: { // dispatch the action // to add something into cart
        addItem: (state, action) => {
            state.items.push(action.payload) // updating the state of item by pushing items inside current state of item
            // action.payload => something which want to pass
        },
        removeItem: (state) => {
            state.items.pop()
        },
        clearItem: (state) => {
            state.items = [] // remove all the items by empty Array
        },
    }
})


export const { addItem, removeItem, clearItem } = toggleSlice.actions;
export default toggleSlice.reducer;