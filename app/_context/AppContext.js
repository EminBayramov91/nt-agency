"use client"
import {createContext, useReducer} from "react";

export const AppContext = createContext();
const initialState = {
    popupOpen: false,
    scrollTo: null,
    formStatus: "idle",
};


function reducer(state, action) {
    switch (action.type) {
        case "OPEN_POPUP":
            return { ...state, popupOpen: true };
        case "CLOSE_POPUP":
            return { ...state, popupOpen: false };
        case "SCROLL_TO":
            return { ...state, scrollTo: action.payload };
        case "RESET_SCROLL":
            return { ...state, scrollTo: null };
        case "FORM_SUCCESS":
            return { ...state, formStatus: "success" };
        case "FORM_ERROR":
            return { ...state, formStatus: "error" };
        case "FORM_IDLE":
            return { ...state, formStatus: "idle" };
        default:
            return state;
    }
}

export function AppProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={[state, dispatch]}>
            {children}
        </AppContext.Provider>
    )
}