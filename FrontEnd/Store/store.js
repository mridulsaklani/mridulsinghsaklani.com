"use client"
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./slice";

export const store = configureStore({
    reducer: {
        contact: reducer
    }
})