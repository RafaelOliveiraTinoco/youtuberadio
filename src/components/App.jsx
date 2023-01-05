import React from "react";

// components
import Background from "./Background"
import ToolsMenu from "./ToolsMenu/ToolsMenu";
import YoutubeNewRadio from "./YoutubeNewRadio";
import YoutubePlayer from "./YoutubePlayer";
import RadioPlayer from "./RadioPlayer";

function App(){

    return (
        <div>

            <Background />
            <ToolsMenu />
            <YoutubeNewRadio />
            <YoutubePlayer />
            <RadioPlayer />

        </div>
    )

}

export default App;