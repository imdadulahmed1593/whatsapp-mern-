import React, { useEffect, useState } from 'react';
import "./SidebarChat.css";
import { Avatar } from "@material-ui/core";

const SidebarChat = ({ addNewChat }) => {
    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);


    const createChat = () => {
        const roomName = prompt("Please enter name for chat");
        if (roomName) {
            //do sth
        }
    };

    return !addNewChat ? (
        <div className="sidebarChat">

            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className="sidebarChat__info">
                <h2>Sidebar Chat</h2>
                <p>Last Message...</p>
            </div>


        </div>
    ) : (
            <div className="sidebarChat" onClick={createChat}>
                <h2>Add new chat</h2>
            </div>
        )
};

export default SidebarChat;