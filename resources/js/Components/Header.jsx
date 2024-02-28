import { Link } from '@inertiajs/react'
import React from 'react'

const Header = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light shadow-sm">
          <div className="container">
            {/* <div class="row"> */}
            <div className="col-md-12 col-lg-6">
              <Link className="navbar-brand" href="/"><span className="text-primary">TrueMedicare Haven</span></Link>
            </div>
            <div className="col-sm-12 col-lg-6">
              <div id="navbarSupport">
                <ul className="navbar-nav ml-auto">
                  <form>
                    <div className="input-group input-navbar">
                      <input type="text" className="form-control" placeholder="Enter keyword.." aria-label="Username" aria-describedby="icon-addon1" />
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="icon-addon1"><span className="mai-search" /></span>
                      </div>
                    </div>
                  </form>
                  <li className="nav-item mt-md-1">
                    <Link className="btn btn-primary ml-lg-3" href="login">Login / Register</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* </div> */}
          </div> {/* .container */}
        </nav>
      </header>
    </>
  )
}

export default Header