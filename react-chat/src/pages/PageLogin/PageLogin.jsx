import './PageLogin.scss'
import kek from "../../images/kek.jpeg"
import { Link } from 'react-router-dom'
import { googleLogin } from '@react-oauth/google'



export default function PageChatList(props) {
    
    // const { setTokens, setUser } = useContext(LoginContext)

    // const login = googleLogin({
    //   onSuccess: async (tokensResponse) => {
    //     const tokens = await getTokens(tokensResponse.access_token)
    //     setTokens(tokens)
  
    //     const user = await getUser(tokens.access_token)
    //     setUser(user)
    //   }
    // })



    return (
        <div className='login-wrapper'>
            <div className="login-container">
                <img className="logo" src={kek} alt="lol" />
                <Link to="/" style={{ textDecoration: 'none', color: '#333' }}>
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
                <googleLogin
                    onSuccess={credentialResponse => {
                        console.log(credentialResponse);
                    }}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                    />;
            </div>
        </div>
    )
}
