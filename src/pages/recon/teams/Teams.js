import React, { useRef } from "react";
import './teams.css';

function Teams() {
    const searchbar = useRef(null);

    const redirect = k => {
        if (k.key !== "Enter") return;
        
        window.location.pathname = `/recon/teams${searchbar.current.value ? '/' : ''}${searchbar.current.value}`;
    }

    return <>
        <input type='number' ref={searchbar} onKeyDown={redirect}></input>   
    </>
}

export default Teams;