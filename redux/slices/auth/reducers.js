import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    user: 'usr',
    password: 'pwd'
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,

})


export default authSlice.reducer