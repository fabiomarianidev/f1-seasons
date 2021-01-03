import { createSlice } from "redux-toolkit";

const initialState = {
    season: 0,
    driverStandings: [],
    constructorStandings: [],
    isLoading: false,
    isError: false
}

const standingsSlice = createSlice({
    name: "standings",
    initialState: initialState,
    reducers: {
        
    }
})