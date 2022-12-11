import { createContext, useContext, useEffect, useState } from 'react'

import { Centrifuge } from 'centrifuge'

export const CentrifugoContext = createContext()

export const CentrifugoProvider = ({ children }) => {

    const [centrifugo, setCentrifugo] = useState(null);

    useEffect(() => {
        init()
    }, []);

    const init = async () => {
        const centrifugo = new Centrifuge('ws://localhost:9000/connection/websocket');
        centrifugo.connect()
        setCentrifugo(centrifugo)
    }

    console.log("c: ", centrifugo);

    return (
        <CentrifugoContext.Provider
            children={children}
            value={centrifugo}
        />
    )
}