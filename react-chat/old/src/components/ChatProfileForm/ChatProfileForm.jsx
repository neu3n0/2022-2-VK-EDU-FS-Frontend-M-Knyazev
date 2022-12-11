import React from "react";
import './ChatProfileForm.scss'
import kek from "../../images/kek.jpeg"

export default function ChatProfileForm(props) {
    return (
        <div className="settings-profile">
            <img className="profile-avatar" src={kek} alt="lol" />
            <FullNameForm first_name={props.profile.first_name} handleProfile={props.handleProfile}/>
            <UserNameForm username={props.profile.username} handleProfile={props.handleProfile}/>
            <DescriptionForm description={props.profile.description} handleProfile={props.handleProfile}/>
        </div>
    )
}


function FullNameForm(props) {
    const first_name = props.first_name;
    return (
        <fieldset className="profile-form">
            <legend>Fullname</legend>
            <input className="heh" type="text" value={first_name} onChange={(e) => props.handleProfile('first_name', e.target.value)}/>
        </fieldset>
    )
}

function UserNameForm(props) {
    const username =  props.username;
    return (
        <fieldset className="profile-form">
            <legend>Username</legend>
            <input className="heh" type="text" value={username} onChange={(e) => props.handleProfile('username', e.target.value)}/>
        </fieldset>
    )
}

function DescriptionForm(props) {
    const description =  props.description;
    return (
        <fieldset className="profile-form">
            <legend>Description</legend>
            <input className="heh" type="text" value={description} onChange={(e) => props.handleProfile('boi', e.target.value)}/>
        </fieldset>
    )
}