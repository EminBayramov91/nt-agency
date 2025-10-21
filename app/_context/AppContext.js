"use client"
import {createContext, useReducer} from "react";

export const AppContext = createContext();
const initialState = {
    popupOpen: false,
    scrollTo: null,
};

function reducer(state, action) {
    switch (action.type) {
        case "OPEN_POPUP":
            return {...state, popupOpen: true};
        case "CLOSE_POPUP":
            return {...state, popupOpen: false};
        case "SCROLL_TO":
            return {...state, scrollTo: action.payload}
        case "RESET_SCROLL":
            return {...state, scrollTo: null}
        default:
            return state;
    }
};

export function AppProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={[state, dispatch]}>
            {children}
        </AppContext.Provider>
    )
}