import React, { useState, useContext, createRef, useEffect } from "react";
import { query, collection, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { NavLink as Link } from "react-router-dom";
import { v4 } from "uuid";
import { ChatID } from "../../context/chatId";

import { auth } from "../firebase/firebase";
import { Button, ButtonBase } from "@mui/material";
import { UserContext } from "../../context/auth";

import useWindowDimensions from "../../utils/windowDimension";
import TimeConverter from "../../utils/timeConverter";
import noChatsIcon from "../../assets/img/icon/noChats.svg";
import "./chatUsers.scss";

function ChatUsers() {
    const { user } = useContext(UserContext);
    const { chatID } = useContext(ChatID);
    const [chats, setChats] = useState("loading");
    const userIndicator = createRef();
    const { windowWidth } = useWindowDimensions();
    const isOpen = windowWidth < 768 && !chatID ? true : false;

    useEffect(() => {
        const q = query(collection(db, "users"));
        onSnapshot(
            q,
            (querySnapshot) => {
                const chats = [];
                querySnapshot.forEach((doc) => {
                    chats.push(doc.data());
                });
                setChats(chats);
            },
            (error) => setChats(null)
        );
    }, []);

    function showChats() {
        if (chats === "loading") {
            return "loading...";
        } else {
            if (chats) {
                return chats.map((chat) => {
                    // let lastMsgDate = TimeConverter(chat.latest?.created, true);
                    let chatUserId = chat.uid;
                    if (user.providerData[0].uid !== chatUserId)
                        return (
                            <ButtonBase
                                LinkComponent="a"
                                focusRipple
                                href={`#${chatUserId}`}
                                id={chatUserId}
                                key={v4()}
                                onClick={() => {
                                    userIndicator.current?.classList.remove(
                                        "active"
                                    );
                                }}
                                sx={{ width: "100%" }}
                            >
                                <div
                                    className={
                                        chatID != chatUserId
                                            ? "chatProfile"
                                            : "chatProfile active"
                                    }
                                >
                                    <img
                                        src={chat.photoURL ?? defaultAvatar}
                                        alt=""
                                        className="chatProfile__img"
                                        // onError={(e) =>
                                        //     (e.target.src = defaultAvatar)
                                        // }
                                    />
                                    <div className="chatProfile__content">
                                        <div className="chatProfile__content__item">
                                            <h3 className="chatProfile__name">
                                                {chat?.displayName}
                                            </h3>
                                            {/* <p className="chatProfile__text">
                                            {chat?.latest?.message.slice(0, 20)}
                                        </p> */}
                                        </div>
                                        <span
                                            ref={userIndicator}
                                            className={`chatProfile__read${
                                                !chat ? "" : " active"
                                            }`}
                                        >
                                            20:00
                                        </span>
                                    </div>
                                </div>
                            </ButtonBase>
                        );
                });
            } else {
                return (
                    <div className="noChats">
                        <img
                            src={noChatsIcon}
                            alt=""
                            className="noChats__img"
                        />
                        <h3 className="noChats__title">Chats not found</h3>
                    </div>
                );
            }
        }
    }

    function logOut() {
        auth.signOut();
    }

    return (
        <section className={isOpen ? "chatsPanel active" : "chatsPanel"}>
            <div className="chatsPanel__header">
                <Link to="/" className="chatsPanel__logo">
                    <h4 className="chatsPanel__header__title">Messages</h4>
                </Link>
                <Button variant="outlined" color="error" onClick={logOut}>
                    Log out
                </Button>
            </div>
            <div className="chatsPanel__main">
                <div className="chatsPanel__chats">{showChats()}</div>
            </div>
            <div>Soruce Code</div>
        </section>
    );
}
export default ChatUsers;
