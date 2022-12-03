import React, { useState } from "react";
import Avatar from "../Avatar/Avatar";
import './ChatProfileForm.scss'
import kek from "../../images/kek.jpeg"

export default function ChatProfileForm(props) {
    return (
        <div className="settings-profile">
            <Avatar style={{height: '100px',  width: '100px'}}/>
            <FullNameForm />
            <UserNameForm />
            <DescriptionForm />
        </div>
    )
}


function FullNameForm(props) {
    const [fullName, setfullName] = useState(0);
    return (
        <fieldset className="fullname-form">
            <legend>Full name</legend>
            <input value={fullName} />
        </fieldset>
    )
}

function UserNameForm(props) {
    const [username, setUserName] = useState(0);
    return (
        <fieldset className="username-form">
            <legend>Username</legend>
            <input value={username} />
        </fieldset>
    )
}

function DescriptionForm(props) {
    const [description, setdescription] = useState(0);
    return (
        <fieldset className="description-form">
            <legend>Description</legend>
            <input value={description} />
        </fieldset>
    )
}