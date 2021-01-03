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
export const loadSeason = (year) => {
    return async (dispatch) => {
        const completeUrl = 'http://ergast.com/api/f1/' + year + '.json'

        dispatch(loadSeasonStart());

        try {
            const response = await fetch(completeUrl);
            const data = await response.json();
            const seasonData = await data.MRData.RaceTable.Races;
            dispatch(loadSeasonComplete(seasonData));
        } catch (error) {
            dispatch(loadSeasonError());
        }
    }
}

export const selectSeason = (state) => state.season;

export const { loadSeasonStart, loadSeasonComplete, loadSeasonError} = seasonSlice.actions;
export default seasonSlice.reducer;