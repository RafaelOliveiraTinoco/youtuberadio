import React from "react";

function RadiosList(){
    let radios =[];

    let embedVideos = document.querySelector("#embedVideos").children;

    for (let i = 0; i < embedVideos.length; i++){
        radios.push({
            radio: embedVideos[i].src.slice("https://ww.youtube.com/embed/".length + 1),
            image: ''
        });
    }
};

export default RadiosList;