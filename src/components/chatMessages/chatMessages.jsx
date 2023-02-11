import React, { useEffect, useContext, useState } from "react";
import { db } from "../firebase/firebase";
import { query, collection, orderBy, where, onSnapshot } from "firebase/firestore";

import { UserContext } from "../../context/auth";
import { ChatID } from "../../context/chatId";
import AOS from "aos";
import TimeConverter from "../../utils/timeConverter";
import { Box, Skeleton, Avatar } from "@mui/material";
import { v4 } from "uuid";
import ArrowDown from "../../lib/icons/arrowDown";
import "./chatMessages.scss";
import noMessageIcon from "../../assets/img/noMessages.svg";
import welcomeToChat from "../../assets/img/welcomeToChat.svg";

function ChatMessages() {
    const { user } = useContext(UserContext);
    const { chatID } = useContext(ChatID);
    const [messages, setMessages] = useState("loading");

    useEffect(() => {
        AOS.init({
            offset: 0,
            duration: 500,
            debounceDelay: 50,
            throttleDelay: 90,
            mirror: true,
            once: false,
            anchorPlacement: "top-bottom",
        });
    }, []);
    useEffect(() => {
        if (chatID) {
            const request = query(
                collection(db, "messages"),
                orderBy("date"),
                where("receiver", "==", chatID)
            );
            onSnapshot(
                request,
                (querySnapshot) => {
                    let newMessages = [];
                    querySnapshot.forEach((doc) => {
                        newMessages.push({ ...doc.data() });
                    });
                    setMessages(newMessages);
                },
                (error) => setMessages(null)
            );
        }
        console.log(messages)
        document.querySelector("#messageInput")?.focus();
    }, [chatID]);
    const messagesBlog = document.querySelector(
        ".bubbless"
    );
    const scrollBottomBtn = document.querySelector(".scrollBottom");

    messagesBlog?.addEventListener("scroll", function () {
        if (this.scrollHeight - this.clientHeight - this.scrollTop > 400) {
            scrollBottomBtn.classList.add("active");
        } else {
            scrollBottomBtn.classList.remove("active");
        }
    });
    scrollBottomBtn?.addEventListener("click", function () {
        messagesBlog.scrollTop = messagesBlog.scrollHeight;
    });

    if (!chatID) {
        return (
            <div className="welcomeChat">
                <img src={welcomeToChat} alt="" className="welcomeChat__img" />
                <h3 className="welcomeChat__title">Welcome to Firechat</h3>
                <p className="welcomeChat__text">
                   Click on one of user to start conservation
                </p>
            </div>
        );
    } else {
        if (messages == "loading") {
            return (
                <div className="messages__loader">
                    {Array(6)
                        .fill()
                        .map(() => (
                            <div className="skeleton__bubble" key={v4()}>
                                <Skeleton
                                    variant="circular"
                                    width={40}
                                    height={40}
                                    sx={{ mr: 1 }}
                                    animation="wave"
                                />
                                <Skeleton
                                    variant="rounded"
                                    width={
                                        Math.floor(Math.random() * 50 + 50) +
                                        "%"
                                    }
                                    height={Math.floor(Math.random() * 35 + 50)}
                                    animation="wave"
                                />
                            </div>
                        ))}
                </div>
            );
        } else if (messages) {
            let sendingMessages = document.querySelectorAll(".message.move");
            if (sendingMessages) {
                for (let i = 0; i < sendingMessages.length; i++) {
                    sendingMessages[i]?.remove();
                }
            }

            return (
                <div className="messages">
                    <div className="bubbles">
                        {messages.map((message, i) => {
                            let messageText = message.message;
                            let date = TimeConverter(message.date);
                            let animate =
                                messages.length > 10
                                    ? ""
                                    : messages.length - 10 > i + 1
                                    ? ""
                                    : "fade-up";

                            // if (message.to == chatUser.id) {
                            //     let className = `message${
                            //         message.to == chatUser.id &&
                            //         messages[i]?.to == chatUser.id
                            //             ? " messageGroup"
                            //             : ""
                            //     } outgoing`;
                            //     return (
                            //         <div
                            //             className={className}
                            //             key={v4()}
                            //             data-aos={animate}
                            //         >
                            //             <div className="message__content">
                            //                 <p className="message__text">
                            //                     {messageText}
                            //                 </p>
                            //                 <p className="message__date">
                            //                     {date}
                            //                 </p>
                            //             </div>
                            //         </div>
                            //     );
                            // } else {
                            //     let className = `message${
                            //         message.to != chatUser.id &&
                            //         messages[i]?.to != chatUser.id &&
                            //         messages[i]?.to
                            //             ? " messageGroup"
                            //             : ""
                            //     } incoming`;
                            //     return (
                            //         <div
                            //             className={className}
                            //             key={v4()}
                            //             data-aos={animate}
                            //             to={message.to}
                            //         >
                            //             <img
                            //                 src={
                            //                     chatUser.image
                            //                         ? chatUser.image
                            //                         : defaultAvatar
                            //                 }
                            //                 alt=""
                            //                 className="message__sender"
                            //                 onError={(e) =>
                            //                     (e.target.src =
                            //                         defaultAvatar)
                            //                 }
                            //             />
                            //             <div className="message__content">
                            //                 <p className="message__text">
                            //                     {messageText}
                            //                 </p>
                            //                 <p className="message__date">
                            //                     {date}
                            //                 </p>
                            //             </div>
                            //         </div>
                            //     );
                            // }
                            return (
                                <div
                                    className="message"
                                    key={i}
                                    data-aos={animate}
                                    to={message.to}
                                >
                                    <Avatar
                                        src=""
                                        alt=""
                                        className="message__sender"
                                    ></Avatar>
                                    <div className="message__content">
                                        <p className="message__text">
                                            {messageText}
                                        </p>
                                        <p className="message__date">{date}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="scrollBottom">
                        <ArrowDown
                            className="arrowDown"
                            color="#fff"
                            width={16}
                            height={16}
                        />
                    </div>
                </div>
            );
        } else {
            return (
                <div className="noChatMessages">
                    <img
                        src={noMessageIcon}
                        alt=""
                        className="noChatMessages__img"
                    />
                    <h3 className="noChatMessages__title">
                        There are no messages here yet
                    </h3>
                </div>
            );
        }
    }
}
export default ChatMessages;
