import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import reducer, { loadSeason, loadSeasonComplete, loadSeasonStart, loadSeasonError } from "./seasonSlice";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

beforeEach( async function () {
    fetch.resetMocks();
} )

describe("testing reducer", () => {
    it("should return initial state if no state is supplied", ()=>{
        expect(reducer(undefined, {})).toEqual({
            races: [],
            isLoading: false,
            isError: false,
        })
    }),
    test("default reducer", ()=> {
        const inputState = {
            races: [],
            isLoading: false,
            isError: false,
        }

        expect(reducer(inputState, {})).toEqual(inputState)
    }),
    test("loadSeasonStart action", ()=>{
        expect(reducer(undefined, {type: loadSeasonStart})).toEqual({
            races: [],
            isLoading: true,
            isError: false,
        })
    }),
    test("loadSeasonComplete action", () => {
        const payload = [
                { round: 1 },
                { round: 2 }
            ]

        expect(reducer(undefined, {
            type: loadSeasonComplete,
            payload: payload
        })).toEqual(
            {races: payload, isLoading: false, isError: false}
        )
    }),
    test("loadSeasonError action", () => {
        expect(reducer(undefined, {type: loadSeasonError})).toEqual({
            races: [],
            isLoading: false,
            isError: true,
        })
    })
})

describe("testing async function loadseason", () => {
    test("completed run of loadSeason", async () => {
        //setting up the mock fetch response
        const testResponse = {
            "MRData": {
                "RaceTable": {
                    "Races": [ 
                        {
                            "round": "1",
                            "raceName": "Race 1"
                        }, 
                        {
                            "round": "2",
                            "raceName": "Race 2"
                        }
                    ]
                }
            }
        }
    
        fetch.mockResponseOnce(JSON.stringify(testResponse));
    
        //setting up the mocked store
        const store = mockStore({
            races: [],
            isLoading: false,
            isError: false,
        })
    
        //expected action
        const expectedActions = [
            {
                type: loadSeasonStart.toString()
            },
            {
                type: loadSeasonComplete.toString(),
                payload: [ 
                    {
                        "round": "1",
                        "raceName": "Race 1"
                    }, 
                    {
                        "round": "2",
                        "raceName": "Race 2"
                    }
                ]
            }
            ]
    
        return(store.dispatch(loadSeason(2020))).then( () => {
            expect(fetch).toHaveBeenCalledTimes(1);
            expect(store.getActions()).toEqual(expectedActions);
            expect(fetch).toHaveBeenCalledWith('http://ergast.com/api/f1/2020.json');
        } )
    }) 
    
    test("failed run of loadSeason", async () => {
        fetch.mockReject(() => Promise.reject("Forced a rejection"));
    
        const store = mockStore({
            races: [],
            isLoading: false,
            isError: false,
        })
    
        const expectedActions = [
            {
                type: loadSeasonStart.toString()
            },
            {
                type: loadSeasonError.toString()
            }
        ]
    
        return(store.dispatch(loadSeason(2020))).then( () => {
            expect(fetch).toHaveBeenCalledTimes(1);
            expect(store.getActions()).toEqual(expectedActions);
            expect(fetch).toHaveBeenCalledWith('http://ergast.com/api/f1/2020.json');
        })
    })
})
