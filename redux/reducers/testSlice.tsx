import { createSlice } from "@reduxjs/toolkit";

interface initialStateProps {
    test: string
}

const initialState: initialStateProps = {
    test: 'Testing'
}

const testReducer = createSlice({
    name: 'testing',
    initialState,
    reducers: {

    }
})

export default testReducer.reducer