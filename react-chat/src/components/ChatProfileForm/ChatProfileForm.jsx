import React from "react";
import kek from "../../images/kek.jpeg"
import styles from './ChatProfileForm.module.scss'

export default function ChatProfileForm(props) {
    return (
        <div className={styles.settingsProfile}>
            <img className={styles.profileAvatar} src={kek} alt="lol" />
            <FirstNameForm first_name={props.profile.first_name} handleProfile={props.handleProfile}/>
            <LastNameForm last_name={props.profile.last_name} handleProfile={props.handleProfile}/>
            <UserNameForm username={props.profile.username} handleProfile={props.handleProfile}/>
            <DescriptionForm description={props.profile.description} handleProfile={props.handleProfile}/>
        </div>
    )
}


function FirstNameForm(props) {
    const first_name = props.first_name ? props.first_name : '';
    return (
        <fieldset className={styles.profileForm}>
            <legend>First name</legend>
            <input className={styles.heh} type="text" value={first_name} onChange={(e) => props.handleProfile('first_name', e.target.value)}/>
        </fieldset>
    )
}

function LastNameForm(props) {
    const last_name = props.last_name ? props.last_name : '';
    return (
        <fieldset className={styles.profileForm}>
            <legend>Last name</legend>
            <input className={styles.heh} type="text" value={last_name} onChange={(e) => props.handleProfile('last_name', e.target.value)}/>
        </fieldset>
    )
}

function UserNameForm(props) {
    const username =  props.username ? props.username : '';
    return (
        <fieldset className={styles.profileForm}>
            <legend>Username</legend>
            <input className={styles.heh} type="text" value={username} onChange={(e) => props.handleProfile('username', e.target.value)}/>
        </fieldset>
    )
}

function DescriptionForm(props) {
    const description =  props.description ? props.description : '';
    return (
        <fieldset className={styles.profileForm}>
            <legend>Description</legend>
            <input className={styles.heh} type="text" value={description} onChange={(e) => props.handleProfile('description', e.target.value)}/>
        </fieldset>
    )
}