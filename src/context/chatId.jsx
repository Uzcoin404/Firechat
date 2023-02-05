import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./auth";

const ChatID = createContext();

function ChatProvider({ children }) {
    const { user } = useContext(UserContext);
    let userID = user?.providerData[0].uid
    let urlHash = window.location.hash.substring(1);

    const [chatID, setChatID] = useState(
        urlHash.trim() != "" && !isNaN(urlHash) && urlHash != userID
            ? urlHash
            : null
    );

    useEffect(() => {
        window.addEventListener("hashchange", getHashUrl);
        function getHashUrl() {
            let hash = window.location.hash.substring(1);
            if (hash.trim() != "" && !isNaN(hash) && hash != userID) {
                setChatID(hash);
            } else {
                setChatID(null);
                window.addEventListener("hashchange", getHashUrl, {
                    once: true,
                });
                window.location.hash = "";
            }
        }
    }, []);

    return <ChatID.Provider value={{ chatID }}>{children}</ChatID.Provider>;
}
export { ChatID, ChatProvider };
