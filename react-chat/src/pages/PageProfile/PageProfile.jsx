import React, { useState } from "react";
import ChatProfileHeader from "../../components/ChatProfileHeader/ChatProfileHeader"
import ChatProfileForm from "../../components/ChatProfileForm/ChatProfileForm"
import './PageProfile.scss'


export default function PageProfile(props) {

    const [profile, setProfile] = useState(props.user);

    return (
        <div className="profile-layout">
            <ChatProfileHeader setCurrUser={() => {props.setUser(profile)}}/>
            <ChatProfileForm profile={profile} handleProfile={(key, value) => {
                const prof = {...profile};
                prof[key] = value;
                setProfile(prof);
            }} />
        </div>
    )
}