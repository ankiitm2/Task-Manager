"use client";
import { useState } from "react";
import { createContext, useContext } from "react";
import themes from "./themes";


export const GlobalContext = createContext();
export const GlobalUpdateContext = createContext();

export const GlobalProvider = ({children}) => {
const [selectedTheme, setSelectedTheme] = useState(0);
const theme = themes(selectedTheme);
}