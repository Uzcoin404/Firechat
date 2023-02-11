import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./auth";

const ChatID = createContext();

function ChatProvider({ children }) {
    const { user } = useContext(UserContext);
    let userID = user?.providerData[0].uid;
    let url = window.location.pathname.substring(1);

    const [chatID, setChatID] = useState(
        url.trim() != "" && !isNaN(url) && url != userID ? url : null
    );

    return (
        <ChatID.Provider value={{ chatID, setChatID }}>
            {children}
        </ChatID.Provider>
    );
}
export { ChatID, ChatProvider };
