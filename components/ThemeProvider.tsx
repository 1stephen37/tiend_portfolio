'use client'
import { ThemeProvider as NextThemesProvider} from "next-themes";
import React from "react";

export function ThemeProvider({children, attribute, defaultTheme} : {
    children: React.ReactNode,
    attribute : string,
    defaultTheme: string
}) {
    return (
        <NextThemesProvider attribute={attribute} defaultTheme={defaultTheme}>
            {children}
        </NextThemesProvider>
    )
}
