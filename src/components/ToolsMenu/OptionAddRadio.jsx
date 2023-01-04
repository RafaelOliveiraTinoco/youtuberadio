import React from "react";

function addNewRadio(element){

    // validate url
    let url = element.value;
    element.value = "";

    if (!url.includes("youtube.com/watch?") && !url.includes("youtu.be/")){
        alert("Invalid Youtube URL!");
        return null;
    }
    if (url.includes("youtube.com/watch?")){
        url = url.slice(url.search(/youtube.com\/watch\?/) + "youtube.com/watch?".length);
        url = url.split("&");
        let urlParams = url.map(param => param.split("="));   
        urlParams.forEach(param => {
            if (param[0] === "v"){
                url = param[1]
            }
        });
    }else{
        url = url.slice(url.search(/youtu.be\//) + "youtu.be/".length);
    }
    
    if (url.length === 0){
        alert("Invalid URL!");
        return null;
    }

    // create cookie and validate video existence
    window.newRadio.loadVideoById("jfKfPfyJRdk");

}

function OptionAddRadio() {
    
    return (

        <>

            {/* New Stream / Video */}
            <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">New Stream / Video</button>
            <ul className="dropdown-menu">

                <form onSubmit={(event) => {
                    event.preventDefault();
                    addNewRadio(document.querySelector("#inputNewRadio"));}}>

                    <li><input type="text" className="form-control" id="inputNewRadio" placeholder="URL" autoComplete="off"></input></li>
                    <li><hr className="dropdown-divider"></hr></li>
                    <li><button type="submit" className="btn">Add Radio</button></li>

                </form>

            </ul>

        </>

    );

}

export default OptionAddRadio;