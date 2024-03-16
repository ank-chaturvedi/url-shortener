import { createSlice } from '@reduxjs/toolkit';

type TypeSate = {
    urls: unknown[]
}
const initialState: TypeSate = {
    urls: []
}

const urlSlice = createSlice({
    name: "shortUrl",
    initialState,
    reducers: {
        add(state, action) {
            state.urls.push(action.payload);
        }
    }
});

export const urlActions = urlSlice.actions;
export default urlSlice.reducer