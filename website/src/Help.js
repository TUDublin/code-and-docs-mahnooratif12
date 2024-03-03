function Help() {
    return(
        <div>
             <nav class="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
                        <div class="container-fluid">
                        <a class="navbar-brand" href="./homepage"><img src="TUH logo.jpg" alt="TUH Logo" class="img"/> </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-center" id="mynavbar">
                            <ul class="navbar-nav me-auto justify-content-center">
                            <li class="nav-item justify-content-center ">
                                <a class="nav-link justify-content-center " href="./Visualization">Visualization</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link justify-content-center " href="./Importdata">Import Data</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link justify-content-center " href="./Exportdata">Export Data</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link justify-content-center " href="./Help">Help</a>
                            </li>
                            </ul>
                            <form class="d-flex">
                            <input class="form-control me-2" type="text" placeholder="Search"/>
                            <button class="btn btn-primary" type="button">Search</button>
                            </form>
                        </div>
                        </div>
                    </nav>
        </div>
    )
}

export default Help; 