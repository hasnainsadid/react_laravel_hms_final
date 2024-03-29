import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="page-footer">
        <div className="container">
          <div className="row px-md-3">
            <div className="col-sm-6 col-lg-3 py-3">
              <h5 className='h5'>Company</h5>
              <ul className="footer-menu">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Career</a></li>
                <li><a href="#">Editorial Team</a></li>
                <li><a href="#">Protection</a></li>
              </ul>
            </div>
            <div className="col-sm-6 col-lg-3 py-3">
              <h5 className='h5'>More</h5>
              <ul className="footer-menu">
                <li><a href="#">Terms &amp; Condition</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Advertise</a></li>
                <li><a href="#">Join as Doctors</a></li>
              </ul>
            </div>
            <div className="col-sm-6 col-lg-3 py-3">
              <h5 className='h5'>Our partner</h5>
              <ul className="footer-menu">
                <li><a href="#">One-Fitness</a></li>
                <li><a href="#">One-Drugs</a></li>
                <li><a href="#">One-Live</a></li>
              </ul>
            </div>
            <div className="col-sm-6 col-lg-3 py-3">
              <h5 className='h5'>Contact</h5>
              <p className="footer-link mt-2">351 Willow Street Franklin, MA 02038</p>
              <a href="#" className="footer-link">701-573-7582</a>
              <a href="#" className="footer-link">healthcare@temporary.net</a>
              <h5 className="mt-3 h5">Social Media</h5>
              <div className="footer-sosmed mt-3">
                <a href="#" target="_blank"><span className="mai-logo-facebook-f" /></a>
                <a href="#" target="_blank"><span className="mai-logo-twitter" /></a>
                <a href="#" target="_blank"><span className="mai-logo-google-plus-g" /></a>
                <a href="#" target="_blank"><span className="mai-logo-instagram" /></a>
                <a href="#" target="_blank"><span className="mai-logo-linkedin" /></a>
              </div>
            </div>
          </div>
          <hr />
          <p id="copyright" className="text-center"><strong>Copyright © 2021-2023 TrueMedicare Haven.</strong>
            All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer