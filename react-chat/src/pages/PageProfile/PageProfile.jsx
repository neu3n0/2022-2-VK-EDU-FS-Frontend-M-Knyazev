import React, { useState } from "react";
import styles from './PageProfile.module.scss'
import ChatProfileHeader from "../../components/ChatProfileHeader/ChatProfileHeader";
import ChatProfileForm from "../../components/ChatProfileForm/ChatProfileForm";

export function PageProfile(props) {
    const [profile, setProfile] = useState(props.user);


    return (
        <div className={styles.profileLayout}>
            <ChatProfileHeader setUser={() => {props.setUser(profile)}}/>
            <ChatProfileForm profile={profile} handleProfile={(key, value) => {
                const prof = {...profile};
                prof[key] = value;
                setProfile(prof);
            }} />
            <div className={styles.buttonLogout}>
                <a className={styles.logout} href="http://localhost:8000/logout/" style={{ textDecoration: 'none', color: '#333' }}>
                    Logout
                </a>
            </div>
            
        </div>
    )
}