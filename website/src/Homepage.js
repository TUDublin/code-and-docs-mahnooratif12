function Homepage() {
    return (
        <div>    
            <nav class="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
                <link rel="style.css" type="style/css" href="style.css"></link>
                <div class="container-fluid">
                <a class="navbar-brand" href="./homepage"><img src="./TUH logo.jpg" alt="TUH Logo" class="img"/> </a>
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
                        <a class="nav-link justify-content-center " href="./Help">Help</a>
                    </li>
                    </ul>
                    <input type="text" id="searchInput" placeholder="Search..."></input>
                    <button class="search-button bg-primary">
                           <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        Search
                        </button>

                    


                </div>
                </div>
            </nav>
            <div class="header">
                <h1>Tallaght University Hopsital (TUH) Blood Results </h1>
                <p></p>
            </div>
            <footer className="Justify-content-center ">
                <div className="text-white text-center bg-dark fixed-bottom Justify-content-center">
                    TUH BLood Results 
                </div>
            </footer>
            
        </div>  
          
    )
  }

  export default Homepage;

