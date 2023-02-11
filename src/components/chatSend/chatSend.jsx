import React, { createRef, useContext, useState } from "react";

import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, storage } from "../firebase/firebase";
import { ChatID } from "../../context/chatId";
import uid from "../../utils/uid";
import { UserContext } from "../../context/auth";

import {
    IconButton,
    Button,
    Modal,
    Paper,
    Box,
    CircularProgress,
    Typography,
} from "@mui/material";
import TimeConverter from "../../utils/timeConverter";
import PaperClip from "../../assets/img/icon/paperclip.svg";
import PaperPlane from "../../assets/img/icon/paper-plane.svg";
import "./chatSend.scss";

function ChatSend() {
    const { chatID } = useContext(ChatID);
    const { user } = useContext(UserContext);
    const [previewImages, setPreviewImages] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [picUploadState, setPicUploadState] = useState(0);
    let msgValue = createRef();
    let fileInput = createRef();

    async function sendMessage(e) {
        e.preventDefault();
        let message = msgValue.current.value.trim();

        messageChange("");
        // createMessage(message);
        await addDoc(collection(db, "messages"), {
            sender: user.uid,
            receiver: chatID,
            message: message,
            photo: previewImages,
            date: serverTimestamp(),
        });
    }

    function createMessage(message) {
        const messages = document.querySelector(
            // ".styles_scrollable-div__prSCv"
            ".bubbles"
        );
        const lastMessage = Array.from(
            document.querySelectorAll(".message")
        ).pop();

        let newMessage = document.createElement("div");
        let newMessageContent = document.createElement("div");
        let newMessageText = document.createElement("p");
        let newMessageTime = document.createElement("p");

        newMessage.className = "message outgoing move";
        newMessageContent.className = "message__content sending";
        newMessageText.className = "message__text";
        newMessageTime.className = "message__date";

        newMessageText.innerHTML = message;
        newMessageTime.innerHTML = TimeConverter(Math.floor(Date.now() / 1000));

        newMessageContent.appendChild(newMessageText);
        newMessageContent.appendChild(newMessageTime);
        newMessage.appendChild(newMessageContent);
        messages.appendChild(newMessage);

        if (lastMessage.classList.contains("outgoing")) {
            lastMessage.classList.add("messageGroup");
        }

        // if (messages.childElementCount > 0) {
        //     const chatProfileList =
        //         document.querySelector(".chatsPanel__chats");
        //     const chatProfile = document.querySelector(
        //         ".chatProfile.active"
        //     ).parentNode;
        //     chatProfile.querySelector(".chatProfile__text").innerHTML =
        //         message.slice(0, 20);
        //     chatProfileList.prepend(chatProfile);
        // }
        messages.scrollTop = messages.scrollHeight;
    }

    function messageChange(msg) {
        let sendBtn = document.querySelector("#msgSend");

        if (msg.trim() != "") {
            sendBtn.classList.add("active");
            sendBtn.removeAttribute("disabled", "");
        } else {
            msgValue.current.value = "";
            sendBtn.classList.remove("active");
            sendBtn.setAttribute("disabled", "");
        }
    }

    function sendFile() {
        // setModalOpen(false);
        console.log(previewImages[0]);
        const imageRef = ref(
            storage,
            "images/" +
                uid() +
                "." +
                previewImages[0].file.name.split(".").pop()
        );
        const uploadTask = uploadBytesResumable(
            imageRef,
            previewImages[0].file
        );
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                setPicUploadState(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
            },
            (error) => {
                // Handle unsuccessful uploads
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log("File available at", downloadURL);
                });
            }
        );
    }

    function previewImage() {
        const objectUrl = [];
        let files = fileInput.current.files;

        if (files.length > 0) {
            for (let i = 0; i < files.length; i++) {
                objectUrl.push({
                    file: files[i],
                    pic: URL.createObjectURL(files[i]),
                });
            }
            setPreviewImages(objectUrl);
            setModalOpen(true);
        }
        console.log(objectUrl);
    }

    function ProgressBar(props) {
        return (
            <Box className="circularProgress" sx={{ position: "relative", display: "inline-flex", width: 'max-content' }}>
                <CircularProgress variant="determinate" {...props} />
                <Box
                    sx={{
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        position: "absolute",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Typography
                        variant="caption"
                        component="div"
                        color="text"
                    >
                        {`${Math.round(props.value)}%`}
                    </Typography>
                </Box>
            </Box>
        );
    }

    function PreviewModal() {
        const handleClose = () => setModalOpen(false);
        return (
            <Modal open={modalOpen} onClose={handleClose}>
                <Paper
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 400,
                        p: 3,
                        borderRadius: 5,
                    }}
                    className="imagePreview"
                >
                    <div className="imagePreview__content">
                        <Box
                            className="imagePreview__group"
                            sx={{
                                gridTemplateColumns:
                                    previewImages?.length <= 1
                                        ? "1fr"
                                        : "1fr 1fr",
                            }}
                        >
                            {previewImages?.map((image, i) => (
                                <Box className={"uploaded__image"( + picUploadState == 100 ? ' active' : '')}>
                                    <img
                                        src={image.pic}
                                        key={i}
                                        alt=""
                                        className="imagePreview__image"
                                    />
                                    <Box className="upload__progress">
                                        <ProgressBar value={picUploadState} />
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                        <div className="imagePreview__buttons">
                            <Button
                                variant="outlined"
                                color="error"
                                className="imagePreview__btn"
                                onClick={() => setModalOpen(false)}
                            >
                                Bekor qilish
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                className="imagePreview__btn"
                                onClick={() => sendFile()}
                            >
                                Yuborish
                            </Button>
                        </div>
                    </div>
                </Paper>
            </Modal>
        );
    }

    return (
        <form
            action="#"
            className="inputMessage sendMsgForm"
            onSubmit={(e) => sendMessage(e)}
            style={{ display: !chatID ? "none" : "flex" }}
        >
            <PreviewModal />
            <IconButton className="attachFile" color="primary">
                <img src={PaperClip} alt="" />
                <input
                    type="file"
                    className="attachFile__input"
                    name="media"
                    onChange={() => previewImage()}
                    multiple
                    ref={fileInput}
                    onClick={(event) => (event.target.value = null)}
                />
            </IconButton>
            <div className="chatInput">
                <input
                    type="text"
                    className="message__input"
                    id="messageInput"
                    autoFocus
                    autoComplete="off"
                    placeholder="Type a message"
                    ref={msgValue}
                    onChange={(e) => messageChange(e.target.value)}
                />
                <IconButton
                    className="sendBtn"
                    id="msgSend"
                    title="Yuborish"
                    type="submit"
                    disabled
                >
                    <img src={PaperPlane} alt="" />
                </IconButton>
            </div>
        </form>
    );
}
export default ChatSend;
