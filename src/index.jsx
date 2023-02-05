import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
} from "@mui/material/styles";

import { Provider as UserProvider } from "./context/auth";
import { ChatProvider } from "./context/chatId";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <UserProvider>
            <ThemeProvider theme={theme}>
                <ChatProvider>
                    <App />
                </ChatProvider>
            </ThemeProvider>
        </UserProvider>
    </React.StrictMode>
);
