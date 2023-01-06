import React, { useState } from "react";

let cookie = null;
let setCookie = null;

function RadioListStructure(props){
    let cookie = props.cookie;
    
    return(
        <>
            {
                cookie.length !== 0 && JSON.parse(cookie).radiosList !== undefined ? 
                    <div className="btn-group dropend">
                        <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Radios</button>
                        <ul className="dropdown-menu">
                            {JSON.parse(cookie).radiosList.map(radio => {
                                return(
                                    <li key={radio.videoId}>
                                        <form onSubmit={
                                            (event) => {event.preventDefault();
                                            window.youtubePlayer.player.loadVideoById(event.target.children[0].getAttribute("videoid"));
                                            let playButton = document.querySelector("button.radioPlayerButton.radioPlayerButtonPlay");
                                            playButton.classList.remove("radioPlayerButtonPlay");
                                            playButton.classList.add("radioPlayerButtonPause");
                                            let radioName = radio.radioName;
                                            if (radioName.length > 30){
                                                radioName = radioName.substring(0, 30) + "...";
                                            }
                                            document.querySelector(".radioPlayerInfo h4").innerText = radioName;
                                            document.querySelector(".radioPlayerInfo p").innerText = radio.author;
                                            document.querySelector("button.navbar-toggler").click()}
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