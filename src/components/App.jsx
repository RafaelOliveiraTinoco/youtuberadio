import React from "react";

function App(){

    return (
        <div>
            
            {/* Tools Menu */}
            <nav class="navbar navbar-dark">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#toolsMenu" aria-controls="toolsMenu" aria-expanded="false" aria-label="Tools">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
            <div class="collapse" id="toolsMenu">

                <div class="btn-group dropend">

                    <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">New Stream / Video</button>
                    <ul class="dropdown-menu">

                        <li>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="newRadio" placeholder="URL"></input>
                                <label for="newRadio">URL</label>
                            </div>
                        </li>

                        <li>
                            <button class="btn">Add Radio</button>
                        </li>

                    </ul>

                </div>

            </div>

            {/* Background */}
            <div className="broadcast">

                <img src="images/broadcast.svg" alt="broadcast.svg"></img>

            </div>

        </div>
    )

}

export default App;