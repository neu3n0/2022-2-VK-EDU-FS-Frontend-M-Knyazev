import React, { useState, useEffect } from "react";
import ChatProfileHeader from "../../components/ChatProfileHeader/ChatProfileHeader"
import ChatProfileForm from "../../components/ChatProfileForm/ChatProfileForm"
import './PageProfile.scss'


export default function PageProfile(props) {

    // async function getUser() {
    //     const user = await fetch("/users/8/")
    //         .then(resp => resp.json())
    //     setProfile(user);
    // }
    // useEffect(() => { getUser() }, [])

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