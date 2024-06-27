import { createSlice } from "@reduxjs/toolkit";

interface LoginFormState {
    email: string;
    password: string;
}

const initialState : LoginFormState = {
    email: "",
    password: ""
}

const loginSlice = createSlice({
    name: "loginForm",
    initialState: initialState,
    reducers: {
        clearForm: (state) => {
            state.email = "";
            state.password = ""
        }
    }
})

export const { clearForm } = loginSlice.actions;
export default loginSlice.reducer