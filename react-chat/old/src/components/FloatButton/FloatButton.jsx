import React from 'react'
import '../button.scss'

import EditIcon from '@mui/icons-material/Edit';

export default function FloatButton(props) {
    return (
        <div className="fixed_button">
            <button className="button button-edit">
                <EditIcon/>
            </button>
        </div>
    )
}