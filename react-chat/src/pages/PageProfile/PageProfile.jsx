import React from "react";
import ChatProfileHeader from "../../components/ChatProfileHeader/ChatProfileHeader"
import ChatProfileForm from "../../components/ChatProfileForm/ChatProfileForm"
import './PageProfile.scss'

export default function PageProfile(props) {
    return (
        <div className="profile-layout">
            <ChatProfileHeader/>
            <ChatProfileForm/>
        </div>
    )
}