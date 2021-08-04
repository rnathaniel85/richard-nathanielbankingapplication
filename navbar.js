function NavBar(){
    return(
      <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#" title = "A really bad bank!">Baaad Bank</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#/CreateAccount/" title = "Make an Account and get $100">Create Account</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/deposit/" title = "Deposit money from an account">Deposit</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/withdraw/" title = "Withdraw money from an account">Withdraw</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/alldata/" title = "Check all Users Data">AllData</a>
            </li>          
          </ul>
        </div>
      </nav>
      </>
    );
  }