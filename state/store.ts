import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./Form/loginFormSlice"

export const store = configureStore({
    reducer: {
        form: loginReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;