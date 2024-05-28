import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import React from "react";
import {ThemeProvider} from "@/components/ThemeProvider";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Stephen Nguyễn",
    description: "Generated by leader of S-team",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressContentEditableWarning>
        <head>
            <title>Stephen Nguyễn</title>
            <link rel="icon" href="/images/icon.png"/>
        </head>
        <body className={inter.className}>
        <ThemeProvider attribute={'class'} defaultTheme={'light'}>
            <Header/>
            {children}
            <Footer/>
        </ThemeProvider>
        </body>
        </html>
    );
}
