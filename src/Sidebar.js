import React from 'react';
import "./Sidebar.css";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import { SearchOutlined } from "@material-ui/icons";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SidebarChat from "./SidebarChat.js";

const Sidebar = () => {
    return (
        <div className='sidebar'>

            <div className="sidebar__header">
                <Avatar />
                <div className="sidebar__headerRight">
                    <IconButton> <DonutLargeIcon /></IconButton>
                    <IconButton> <ChatIcon /></IconButton>
                    <IconButton> <MoreVertIcon /></IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input type="text" placeholder="Search or start new chat" />
                </div>

            </div>
            <div className="sidebar__chats">
                <SidebarChat addNewChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />

            </div>

        </div>
    );
};

export default Sidebar;