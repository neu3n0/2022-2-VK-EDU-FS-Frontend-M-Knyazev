import React from 'react'
import './Avatar.scss'
import kek from "../../images/kek.jpeg"


export default function Avatar(props) {
    return (
        <img className="avatar" src={kek} alt="lol" />
    )
}