import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    season: 0,
    races: [],
    drivers: [],
    constructors: [],
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
            state.season = action.payload.season;
            state.races = action.payload.seasonData;
            state.drivers = action.payload.driverData;
            state.constructors = action.payload.constructorData;
            state.isError = false;
        },
        loadSeasonError: state => {
            state.isLoading = false;
            state.isError = true;
        }
    }
})

//thunk
export const loadSeason = (season) => {
    const asyncLoadSeason = async (url) => {
        const seasonResponse = await fetch(url);
        const seasonJson = await seasonResponse.json();
        const seasonData = await seasonJson.MRData.RaceTable.Races;
        return (seasonData);
    }

    const asyncLoadDriver = async (url) => {
        const driverResponse = await fetch(url);
        const driverJson = await driverResponse.json();
        const driverData = await driverJson.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        return(driverData);
    }

    const asyncLoadConstructor = async (url) => {
        const constructorResponse = await fetch(url);
        const constructorJson = await constructorResponse.json();
        const constructorData = await constructorJson.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
        return(constructorData);
    }

    return async (dispatch) => {
        const seasonUrl = 'http://ergast.com/api/f1/' + season + '.json';
        const driverUrl = 'http://ergast.com/api/f1/' + season + '/driverStandings.json';
        const constructorUrl = 'http://ergast.com/api/f1/' + season + '/constructorStandings.json';

        dispatch(loadSeasonStart());

        try {
            const [seasonData, driverData, constructorData] = await Promise.all([
                asyncLoadSeason(seasonUrl),
                asyncLoadDriver(driverUrl),
                asyncLoadConstructor(constructorUrl),
            ])

            dispatch(loadSeasonComplete({seasonData, driverData, constructorData, season}));
        } catch (error) {
            dispatch(loadSeasonError());
        }
    }
}

export const selectSeason = (state) => state.season;

export const { loadSeasonStart, loadSeasonComplete, loadSeasonError} = seasonSlice.actions;
export default seasonSlice.reducer;