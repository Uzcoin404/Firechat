// Import => React
import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { db } from "../firebase/firebase";
import { query, collection, orderBy, onSnapshot } from "firebase/firestore";

// Import => Mui
import { Box, Button, IconButton, Avatar, Typography } from "@mui/material";
import { UserContext } from "../../context/auth";
import { ChatID } from "../../context/chatId";

// Import => Components
import ChatUsers from "../chatUsers/chatUsers";
import ChatMessages from "../chatMessages/chatMessages";
import ChatSend from "../chatSend/chatSend";
import useWindowDimensions from "../../utils/windowDimension";
import ArrowLeft from "../../lib/icons/arrowLeft";
import Dots from "../../assets/img/icon/dots.svg";

// Import => Style
import "./chat.scss";
import "aos/dist/aos.css";

function Chat() {
    const { user } = useContext(UserContext);
    const { chatID, setChatID } = useContext(ChatID);
    const [chatUser, setChatUser] = useState(true);
    const { windowWidth } = useWindowDimensions();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        setChatID(location.pathname.substring(1));
        console.log(chatID);
    }, [location]);

    useEffect(() => {
        setTimeout(() => {
            Notification.requestPermission().then((result) => {});
            document.querySelector("#__replain_widget_iframe")?.remove();
        }, 3000);
    }, []);

    function showNotification(chat) {
        let user = chat.user?.name + " " + chat.user?.lastname;
        let message = chat.latest.message.slice(0, 50);
        let userAvatar = chat.user.image ? chat.user.image : defaultAvatar;

        new Notification(user, { body: message, icon: userAvatar });
        return 0;
    }

    return (
        <Box className="chat">
            <ChatUsers />

            <Box component="section" className="messagesPanel">
                <Box
                    className="messagesPanel__header"
                    style={{ display: !chatID ? "none" : "flex" }}
                >
                    <IconButton
                        className="chat_menu_btn"
                        color="primary"
                        onClick={() => navigate("/")}
                    >
                        <ArrowLeft />
                    </IconButton>

                    <Box className="chatProfile">
                        <Avatar
                            src={chatUser.image}
                            alt=""
                            className="chatProfile__img"
                        ></Avatar>
                        <Box className="chatProfile__content">
                            <h5 className="chatProfile__name">
                                {chatUser.name} {chatUser.lastname}
                            </h5>
                            <span className="chatProfile__text">Online</span>
                        </Box>
                    </Box>
                    <div className="header__more">
                        <IconButton className="header__more__btn">
                            <img src={Dots} alt="" />
                        </IconButton>
                    </div>
                </Box>

                <ChatMessages />

                <ChatSend />
            </Box>

            <Box component="section" className="infoPanel" sx={{ mt: 10 }}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Avatar
                        src={user.photoURL}
                        alt=""
                        sx={{ width: 100, height: 100 }}
                    />
                    <Typography
                        variant="h4"
                        sx={{
                            mt: 2,
                            overflowWrap: "break-word",
                            width: "100%",
                        }}
                        color="#0f315e"
                        fontWeight={600}
                        textAlign="center"
                    >
                        {user.displayName}
                    </Typography>
                    <Typography variant="p" color="#333" fontSize={15}>
                        {user.email}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}
export default Chat;
