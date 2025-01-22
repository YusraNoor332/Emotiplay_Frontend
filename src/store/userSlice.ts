import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthData {
    user: object | null;
    auth_token: string | null;
}

const initialState: AuthData = {
    user: null,
    auth_token: null
};

function saveLocal(authData: AuthData) {
    localStorage.setItem("auth-data", JSON.stringify(authData));
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<AuthData>) => {
            state.user = action.payload.user;
            state.auth_token = action.payload.auth_token;
            saveLocal(state);
        },
        removeUser: (state) => {
            state.user = null;
            state.auth_token = null;
            saveLocal(state);
        }
    }
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
