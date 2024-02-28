import { Link } from '@inertiajs/react'
import React from 'react'

const Login = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light shadow-sm">
        <Link href="/" className="nav-icon"><i className="fa fa-arrow-left" aria-hidden="true" /></Link>
        <div className="container">
          {/* <div class="row"> */}
          <div className="col-md-12 col-lg-6">
            <Link className="navbar-brand" href="/"><span className="text-primary">TrueMedicare Haven</span></Link>
          </div>
        </div> {/* .container */}
      </nav>
      <div className="page-hero bg-image overlay-dark" style={{backgroundImage: 'url("frontend/assets/img/bg_image_1.jpg")', backgroundPosition: 'bottom', height: '60vh'}}>
        <div className="hero-section">
          <div className="container text-center wow zoomIn">
            <span className="subhead">Don't have an account?</span>
            <h1 className="display-4">Registration for Appointment</h1>
            <a href="patients/register" className="btn btn-primary">Registration</a>
          </div>
        </div>
      </div>
      <div className="bg-light">
        <div className="page-section py-3 mt-md-n5 custom-index">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-4 py-3 py-md-0">
                <a href="login/doctor">
                  <div className="card-service wow fadeInUp">
                    <div className="circle-shape bg-secondary text-white">
                      <i className="nav-icon fas fa-user-md" />
                    </div>
                    <p>Login as a Doctor</p>
                  </div>
                </a>
              </div>
              <div className="col-md-4 py-3 py-md-0">
                <a href="login/patient">
                  <div className="card-service wow fadeInUp">
                    <div className="circle-shape bg-primary text-white">
                      <i className="nav-icon fas fa-wheelchair" />
                    </div>
                    <p>Login as a Patient</p>
                  </div>
                </a>
              </div>
              <div className="col-md-4 py-3 py-md-0">
                <a href="login/admin">
                  <div className="card-service wow fadeInUp">
                    <div className="circle-shape bg-accent text-white">
                      <span className="mai-person-outline" />
                    </div>
                    <p>Login as an Admin</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login