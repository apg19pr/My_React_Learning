import { configureStore } from "@reactjs/toolkit";
import toggleSlice from './cartSlice';

const appStore = configureStore({
    reducer: {
        toggle: toggleSlice
    }
})

export default appStore;