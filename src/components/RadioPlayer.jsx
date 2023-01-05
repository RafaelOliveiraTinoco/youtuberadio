import React from "react";

function playpauseRadio(button){
    if (button.classList.contains("radioPlayerButtonPlay")){
        window.youtubePlayer.player.playVideo();
        button.classList.add("radioPlayerButtonPause");
        button.classList.remove("radioPlayerButtonPlay");
    }else{
        if (button.classList.contains("radioPlayerButtonPause")){
            window.youtubePlayer.player.pauseVideo();
            button.classList.add("radioPlayerButtonPlay");
            button.classList.remove("radioPlayerButtonPause");
        }
    }
    
}

function changePlayerVolume(volume){
    window.youtubePlayer.player.setVolume(volume);

    // save cookie volume

    // declare cookie
    let cookie = "";

    // cookie, expire date
    let cookieExpires = new Date();
    cookieExpires.setFullYear(cookieExpires.getFullYear() + 1);

    if (document.cookie.length !== 0) {
        cookie = JSON.parse(document.cookie);
        cookie.volume = volume;
        cookie = JSON.stringify(cookie);
    }else{
        cookie = {volume: volume};
        cookie = JSON.stringify(cookie);
    }

    // create cookie
    document.cookie = cookie + "; expires=" + cookieExpires.toUTCString();

}

function RadioPlayer(){

    return(

        <div className="radioPlayerContainer">

            <div className="radioPlayerInfo">

                <h4> </h4>
                <p> </p>

            </div>

            <div className="radioPlayerControls">

                <button className="radioPlayerButton radioPlayerButtonPrevious"></button>
                
                <button className="radioPlayerButton radioPlayerButtonPlay" onClick={(event) => {playpauseRadio(event.target)}}></button>

                <button className="radioPlayerButton radioPlayerButtonNext"></button>

            </div>

            <div className="radioPlayerVolume">

                <input type="range" min="0" max="100" step="1" onChange={(event) => {changePlayerVolume(event.target.value)}}></input>

            </div>

        </div>

    );
    
}

export default RadioPlayer;