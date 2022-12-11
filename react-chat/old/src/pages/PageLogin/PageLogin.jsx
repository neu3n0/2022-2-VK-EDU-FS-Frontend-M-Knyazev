import './PageLogin.scss'
import kek from "../../images/kek.jpeg"
import { Link } from 'react-router-dom'
import { googleLogin } from '@react-oauth/google'
import { Redirect } from 'react-router-dom';


export default function PageLogin(props) {
    return (
        <div className='login-wrapper'>
            <div className="login-container">
                <img className="logo" src={kek} alt="lol" />
                <Link to="/chats" style={{ textDecoration: 'none', color: '#333' }}>
                    <button className='button-login'>
                        Google
                    </button>
                </Link>
                <button className='button-login'>
                    Facebook
                </button>
                <button className='button-login'>
                    Instagram
                </button>
            </div>
        </div>
    )
}
