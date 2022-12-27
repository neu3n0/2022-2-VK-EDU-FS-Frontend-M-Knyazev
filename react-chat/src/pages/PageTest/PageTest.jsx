import { useEffect } from "react";
import { connect } from "react-redux";
import { getMessages } from "../../actions/test";

function PageTest(props) {

    // useEffect(() => {
    //     setInterval(() => props.getMessages(), 3000)
    // }, [])

    return (
        <>
            <h1>Home</h1>
            <button onClick={() => props.getMessages()}>GetMessages</button>
            {
                props.loading && 'Loading'
            }
            <br></br>
            {
                props.messages && props.messages.length
                ? props.messages.map(c => c.text).join(', ')
                : <p>empty</p>
            }
        </>
    )
}

const mapStateToProps = (state) => ({
    messages: state.messages.messages,
    loading: state.messages.loading,
})

export default connect(mapStateToProps, {getMessages})(PageTest)