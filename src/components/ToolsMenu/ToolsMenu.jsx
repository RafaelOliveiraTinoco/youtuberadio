import React from "react";

import OptionAddRadio from "./OptionAddRadio";
import RadioList from "./RadioList";

function ToolsMenu(){

    return (

        <div>

            {/* Hidden Menu */}
            
            <div className="collapse" id="toolsMenu">

                    <OptionAddRadio />
                    <RadioList />

            </div>

            {/* Tools Menu */}
            <nav className="navbar navbar-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#toolsMenu" aria-controls="toolsMenu" aria-expanded="false" aria-label="Tools">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>

        </div>

    );

}

export default ToolsMenu;