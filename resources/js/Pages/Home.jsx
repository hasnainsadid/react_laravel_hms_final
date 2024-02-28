import React from 'react'
import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import { Link, usePage } from '@inertiajs/react'
import Messages from '@/Components/Messages'

const Home = (props) => {
  const {doctors} = usePage().props
  console.log(doctors);
  return (
    <>
      <Header />
        <div className="page-hero bg-image overlay-dark" style={{backgroundImage: 'url("frontend/assets/img/bg_image_1.jpg")'}}>
          <div className="hero-section">
            <div className="container text-center wow zoomIn">
              <span className="subhead">Let's make your life happier</span>
              <h1 className="display-4">Healthy Living</h1>
              <a href="#" className="btn btn-primary">Let's Consult</a>
            </div>
          </div>
        </div>
        <div className="bg-light">
          <div className="page-section py-3 mt-md-n5 custom-index">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-4 py-3 py-md-0">
                  <div className="card-service wow fadeInUp">
                    <div className="circle-shape bg-secondary text-white">
                      <span className="mai-chatbubbles-outline" />
                    </div>
                    <p><span>Chat</span> with a doctors</p>
                  </div>
                </div>
                <div className="col-md-4 py-3 py-md-0">
                  <div className="card-service wow fadeInUp">
                    <div className="circle-shape bg-primary text-white">
                      <span className="mai-shield-checkmark" />
                    </div>
                    <p><span>One</span>-Health Protection</p>
                  </div>
                </div>
                <div className="col-md-4 py-3 py-md-0">
                  <div className="card-service wow fadeInUp">
                    <div className="circle-shape bg-accent text-white">
                      <span className="mai-basket" />
                    </div>
                    <p><span>One</span>-Health Pharmacy</p>
                  </div>
                </div>
              </div>
            </div>
          </div> {/* .page-section */}
          <div className="page-section pb-0">
            <div className="container">
              <h1 className="text-center mb-5 wow fadeInDown h1">About Us</h1>
              <div className="row align-items-center">
                <div className="col-lg-6 py-3 wow fadeInUp">
                  <h1 className='h1'>Welcome to Your Health <br /> Center</h1>
                  <p className="text-grey mb-4 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt neque sit, explicabo vero nulla animi nemo quae cumque, eaque pariatur eum ut maxime! Tenetur aperiam maxime iure explicabo aut consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt neque sit, explicabo vero nulla animi nemo quae cumque, eaque pariatur eum ut maxime! Tenetur aperiam maxime iure explicabo aut consequuntur. <br /> <br />
                    Expedita iusto sunt beatae esse id nihil voluptates magni, excepturi distinctio impedit illo, incidunt iure facilis atque, inventore reprehenderit quidem aliquid recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quod ad sequi atque accusamus deleniti placeat dignissimos illum nulla voluptatibus vel optio, molestiae dolore velit iste maxime, nobis odio molestias!</p>
                  {/* <a href="about.php" class="btn btn-primary">Learn More</a> */}
                </div>
                <div className="col-lg-6 wow fadeInRight" data-wow-delay="400ms">
                  <div className="img-place custom-img-1">
                    <img src="frontend/assets/img/bg-doctor.png" alt />
                  </div>
                </div>
              </div>
            </div>
          </div> 
        </div> 
        <div className="page-section">
          <div className="container">
            <h1 className="text-center mb-5 wow fadeInUp h1">Our Doctors</h1>
              <div className="row">
                {
                  doctors.map(doctor=>
                    <div className="col-md-3 my-3">
                      <div className="card">
                        <div className="card-header">
                        <img src= {'images/' +doctor.img} alt="doctor_image" style={{height: '280px'}} />
                        </div>
                        <div className="body p-3">
                          <p className="text-xl mb-0">{doctor.name}</p>
                          <span className="text-sm text-grey">{doctor.designation}</span>
                        </div>
                      </div>
                    </div>
                  )
                }
                
              </div>
              
          </div>
        </div>

        <Messages />
        
        <div className="maps-container wow fadeInUp">
          <div id="google-maps"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2904.745288660335!2d90.37694107413742!3d23.778154287712596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c74e8282b185%3A0x5e029ded49de5bfc!2sIDB%20Bhaban%2C%20E%2F8-A%2C%20Dhaka%201207!5e1!3m2!1sen!2sbd!4v1695393491435!5m2!1sen!2sbd" width="100%" height="100%" style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
        </div>
        <div className="page-section banner-home bg-image" style={{backgroundImage: 'url(frontend/assets/img/banner-pattern.svg)'}}>
          <div className="container py-5 py-lg-0">
            <div className="row align-items-center">
              <div className="col-lg-4 wow zoomIn">
                <div className="img-banner d-none d-lg-block">
                  <img src="frontend/assets/img/mobile_app.png" alt />
                </div>
              </div>
              <div className="col-lg-8 wow fadeInRight">
                <h1 className="font-weight-normal mb-3 h1">Get easy access of all features using One Health Application</h1>
                <Link href="#"><img src="frontend/assets/img/google_play.svg" alt /></Link>
                <a href="#" className="ml-2"><img src="frontend/assets/img/app_store.svg" alt /></a>
              </div>
            </div>
          </div>
        </div>
      <Footer />
    </>

  )
}

export default Home