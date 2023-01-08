import React, { useEffect, useState } from 'react'
import FormMessage from '../FormMessage/FormMessage';

import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
// import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import MicIcon from '@mui/icons-material/Mic';

import '../button.scss'
import styles from './ChatFooter.module.scss'

export default function ChatFooter(props) {
    const [val, setVal] = useState('');
    const [file, setFile] = useState(null);
    const [linkToFile, setlinkToFile] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if (!file) {
            props.sendMess(val);
            setVal('');
        }
        else {
            const data = new FormData();
            data.append('image', file);
            fetch('https://tt-front.vercel.app/upload', {
                method: 'POST',
                body: data,
            })
                .then(response => {
                    console.log(response);
                    return response.json();
                })
                .then(dataFile => { props.sendMess(dataFile["imgSrc"] + '  ' + val) })
            setVal('');
            setFile(null);
        }
    }

    const [loc, setLoc] = useState('location');

    function geoFindMe() {

        function success(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            setLoc(`https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`);
        }

        function error() {
            alert('Unable to retrieve your location');
        }

        if (!navigator.geolocation) {
            alert('Geolocation is not supported by your browser');
        } else {
            navigator.geolocation.getCurrentPosition(success, error);
        }
    }

    useEffect(() => {
        geoFindMe();
    }, [])

    function handleChangeImage(event) {
        setFile(event.target.files[0]);
        setlinkToFile(URL.createObjectURL(event.target.files[0]));
    }

    function handleDrag(event) {
        event.preventDefault();
    }

    function handleDrop(event) {
        event.preventDefault();
        setFile(event.dataTransfer.files[0]);
        setlinkToFile(URL.createObjectURL(event.dataTransfer.files[0]));
    }

    return (
        <>
            <>
                {file && <img className={styles.imageFile} src={linkToFile} alt='pic' />}
            </>
            <div className={styles.footerChat}>
                <div className={styles.footerLeft}>

                    <button className="button button-emoji">
                        <SentimentSatisfiedIcon />
                    </button>
                    <FormMessage chat_id={props.chat_id} handleSubmit={handleSubmit} val={val} setVal={setVal} handleDrag={handleDrag} handleDrop={handleDrop} />

                    <button className="button button-attach" onClick={() => { props.sendMess(loc) }}>
                        <AddLocationIcon />
                    </button>

                    <button >
                        <input id='file' accept="*.jpg" type="file" onChange={handleChangeImage} />
                    </button>

                    <button className="button button-micro"
                        onMouseDown={() => {
                            console.log('start rec');
                        }}
                        onMouseUp={() => {
                            console.log('stop rec')
                        }}>
                        <MicIcon />
                    </button>
                </div>

                <div className={styles.footerRight}>
                    <button className="button button-send" onClick={handleSubmit}>
                        <SendIcon />
                    </button>
                </div>
            </div>
        </>


    )
}