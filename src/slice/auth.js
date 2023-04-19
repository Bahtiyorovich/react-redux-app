import { createSlice } from "@reduxjs/toolkit";
import { setItem } from "../helpers/persistance-storage";

const initialState = {
    isLoading: false,
    loggedIn: false,
    error: null,
    user: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,

    // Metodlar yoziladigan reduserlar:
    reducers: {

        // Register va Login 
        signUserStart: state => {
            state.isLoading = true
        },
        signUserSuccess: (state, action ) => {
            state.isLoading = false
            state.loggedIn = true
            state.user = action.payload
            setItem('token', action.payload.token)
        },
        signUserFailure:( state, action )=> {
            state.isLoading = false
            state.error = action.payload
        },

        logoutUser: state => {
            state.user = null
            state.loggedIn = false
        }

    }
})

export const {signUserStart, signUserFailure,signUserSuccess, logoutUser} = authSlice.actions
export default authSlice.reducer

