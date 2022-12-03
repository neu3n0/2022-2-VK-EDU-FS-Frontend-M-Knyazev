import React from 'react'
import './ChatProfileHeader.scss'
import '../button.scss'

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DoneIcon from '@mui/icons-material/Done';

export default function ChatProfileHeader(props) {
    return (
        <div className="header-chat">
            <div className="header-left">
                <button className="button button-back" onClick={props.onClick}>
                    <ArrowBackIcon/>
                </button>

                <div className="editProfile">
                    Edit Profile
                </div>
            </div>

            <div className="header-right">
                <button className="button  button-find">
                    <DoneIcon/>
                </button>
            </div>
        </div>
    )
}