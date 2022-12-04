import React from 'react'
import './ChatProfileHeader.scss'
import '../button.scss'
import { Link } from 'react-router-dom'

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DoneIcon from '@mui/icons-material/Done';

export default function ChatProfileHeader(props) {
    return (
        <div className="header-chat">
            <div className="header-left">
                <Link to="/">
                    <button className="button button-back">
                        <ArrowBackIcon />
                    </button>
                </Link>

                <div className="editProfile">
                    Edit Profile
                </div>
            </div>

            <div className="header-right">
                <button className="button  button-find" onClick={() => {props.setCurrUser()}}>
                    <DoneIcon/>
                </button>
            </div>
        </div>
    )
}