import { configureStore } from "@reduxjs/toolkit";
import githubReducer from "./feature/githubSlice";
const store = configureStore({
    reducer: githubReducer
})

export default store;