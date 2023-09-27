import React from "react"
import { AppProvider } from "./src/context/app-context"

export const wrapPageElement = ({ element, props }) => {
    return <AppProvider {...props}>{element}</AppProvider>
}