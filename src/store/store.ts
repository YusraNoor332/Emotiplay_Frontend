import { combineSlices, configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

const reducer = combineSlices({
    user: userSlice
})


const store = configureStore({ reducer });

export default store;