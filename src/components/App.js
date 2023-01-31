
import React, {useEffect, useState} from "react";

function App() {
    const [src, setSrc] = useState(null);
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(json => setSrc(json.message))
    },[])

    if(!src) return (
        <p>Loading...</p>
    )

    return (
        <img src={src} alt="A Random Dog" />
    )
}

export default App;

