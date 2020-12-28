import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    races: [],
    isLoading: false,
    isError: false,
}

const seasonSlice = createSlice({
    name: "season",
    initialState: initialState,
    reducers: {
        loadSeasonStart: state => {
            state.isLoading = true;
        },
        loadSeasonComplete: (state, action) => {
            state.isLoading = false;
            state.races = action.payload;
            state.isError = false;
        },
        loadSeasonError: state => {
            state.isLoading = false;
            state.isError = true;
        }
    }
})

//thunk
export const loadSeason = () => {
    return async (dispatch) => {
        dispatch(loadSeasonStart());

        try {
            const response = await fetch('http://ergast.com/api/f1/2020.json');
            const data = await response.json();
            const seasonData = await data.MRData.RaceTable.Races;
            dispatch(loadSeasonComplete(seasonData));
        } catch (error) {
            dispatch(loadSeasonError());
        }
    }
}

export const { loadSeasonStart, loadSeasonComplete, loadSeasonError} = seasonSlice.actions;
export default seasonSlice.reducer;