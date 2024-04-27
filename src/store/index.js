import { configureStore } from "@reduxjs/toolkit";
import colorSlice from "./colorSlice/index";

export const store = configureStore({
    reducer: {
        color_slice: colorSlice,
        // setting:settingSlice
    },
});