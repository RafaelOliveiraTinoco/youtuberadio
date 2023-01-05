import React, { useState } from "react";

let cookie = null;
let setCookie = null;

function RadioListStructure(props){
    let cookie = props.cookie;

    
    return(
        <>
            {
                cookie.length !== 0 ? 
                    <div className="btn-group dropend">
                        <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Radios</button>
                        <ul className="dropdown-menu">
                            {JSON.parse(cookie).radiosList.map(radio => {
                                return(
                                    <li key={radio.videoId}>
                                        <form onSubmit={
                                            (event) => {event.preventDefault();
                                            window.youtubePlayer.player.loadVideoById(event.target.children[0].getAttribute("videoid"))}
                                        }>
                                            <button type="submit" className="btn" videoid={radio.videoId}>{radio.radioName}</button>
                                        </form>
                                    </li>
                                );
                            })}
                        </ul> 
                    </div>
                : null
            }
        </>
    );
}

function RadioList(){

    [cookie, setCookie] = useState(document.cookie);

    return (
        <RadioListStructure cookie={cookie}>{cookie}</RadioListStructure>
    );

}

window.updateRadioList = function updateRadioList(){

    setCookie(document.cookie);

}

export default RadioList;