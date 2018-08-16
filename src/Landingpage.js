import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// import '../src/Landingpage.css'
// import '../src/Landingpage.scss'
// import '../src/Landingpage.less'
import './css/landing-page.css'
import './css/landing-page.min.css'
// import '../src/scss/style.scss'
// import '../src/css/style.css'
import './vendor/bootstrap/css/bootstrap-grid.css'
import './vendor/bootstrap/css/bootstrap-grid.min.css'
import './vendor/bootstrap/css/bootstrap-reboot.css'
import './vendor/bootstrap/css/bootstrap-reboot.min.css'
import './vendor/bootstrap/css/bootstrap.css'
import './vendor/bootstrap/css/bootstrap.css.map'
import './vendor/bootstrap/css/bootstrap.min.css'
import './vendor/bootstrap/css/bootstrap.min.css.map'
import './scss/_call-to-action.scss'
import './scss/_footer.scss'
import './scss/_global.scss'
import './scss/_icons.scss'
import './scss/_masthead.scss'
import './scss/_mixins.scss'
import './scss/_showcase.scss'
import './scss/_testimonials.scss'
import './scss/_variables.scss'
import './scss/landing-page.scss'
import './css/img/bg-masthead.jpg'
import './css/img/bg-showcase-1.jpg'
import './css/img/bg-showcase-2.jpg'
import './css/img/bg-showcase-3.jpg'
import './css/img/testimonials-1.jpg'
import './css/img/testimonials-2.jpg'
import './css/img/testimonials-3.jpg'
import './vendor/bootstrap/js/bootstrap.bundle.js.map'
import './vendor/bootstrap/js/bootstrap.bundle.min.js.map'
import './vendor/bootstrap/js/bootstrap.js.map'
import './vendor/bootstrap/js/bootstrap.min.js.map'
import './vendor/font-awsome/css/font-awesome.css'
import './vendor/font-awsome/css/font-awesome.css.map'
import './vendor/font-awsome/css/font-awesome.min.css'
import './vendor/font-awsome/css/font-awesome.css'
import './vendor/font-awsome/fonts/fontawesome-webfont.eot'
import './vendor/font-awsome/fonts/fontawesome-webfont.svg'
import './vendor/font-awsome/fonts/fontawesome-webfont.ttf'
import './vendor/font-awsome/fonts/fontawesome-webfont.woff'
import './vendor/font-awsome/fonts/fontawesome-webfont.woff2'
import './vendor/font-awsome/fonts/FontAwesome.otf'
import './vendor/font-awsome/less/animated.less'
import './vendor/font-awsome/less/bordered-pulled.less'
import './vendor/font-awsome/less/core.less'
import './vendor/font-awsome/less/fixed-width.less'
import './vendor/font-awsome/less/font-awesome.less'
import './vendor/font-awsome/less/icons.less'
import './vendor/font-awsome/less/larger.less'
import './vendor/font-awsome/less/list.less'
import './vendor/font-awsome/less/mixins.less'
import './vendor/font-awsome/less/path.less'
import './vendor/font-awsome/less/rotated-flipped.less'
import './vendor/font-awsome/less/screen-reader.less'
import './vendor/font-awsome/less/stacked.less'
import './vendor/font-awsome/less/variables.less'
import './vendor/font-awsome/scss/_animated.scss'
import './vendor/font-awsome/scss/_bordered-pulled.scss'
import './vendor/font-awsome/scss/_core.scss'
import './vendor/font-awsome/scss/_fixed-width.scss'
import './vendor/font-awsome/scss/_icons.scss'
import './vendor/font-awsome/scss/_larger.scss'
import './vendor/font-awsome/scss/_list.scss'
import './vendor/font-awsome/scss/_mixins.scss'
import './vendor/font-awsome/scss/_path.scss'
import './vendor/font-awsome/scss/_rotated-flipped.scss'
import './vendor/font-awsome/scss/_screen-reader.scss'
import './vendor/font-awsome/scss/_stacked.scss'
import './vendor/font-awsome/scss/_variables.scss'
import './vendor/font-awsome/scss/font-awesome.scss'
import './vendor/jquery/jquery.min.map'
import './vendor/jquery/jquery.slim.min.map'
import './vendor/simple-line-icons/css/simple-line-icons.css'
import './vendor/simple-line-icons/fonts/Simple-Line-Icons.eot'
import './vendor/simple-line-icons/fonts/Simple-Line-Icons.svg'
import './vendor/simple-line-icons/fonts/Simple-Line-Icons.ttf'
import './vendor/simple-line-icons/fonts/Simple-Line-Icons.woff'
import './vendor/simple-line-icons/fonts/Simple-Line-Icons.woff2'



class LandingPage extends Component {

  render() {
    return (


      <div>

        <nav className="navbar navbar-light bg-light static-top">
          <div className="container">
            <a className="navbar-brand" href="#">Live Teach</a>
            <a className="btn btn-primary" href="#">Home</a>
            <a className="btn btn-primary" href="#">Categories</a>
            <a className="btn btn-primary" href="#">Contact US </a>
            <Link to="/users/login">
              <a className="btn btn-primary" href="#">Login In for LiveTeach</a>
            </Link>
            <Link to="/users/register">
              <a className="btn btn-primary" href="#">Sign Up for LiveTeach</a>
            </Link>
          </div>
        </nav>


        <header className="masthead text-white text-center">
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-xl-9 mx-auto">
                <h1 className="mb-5">Real time and on-demand live streaming classess</h1>
              </div>
              <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                <form>
                  <div className="form-row">
                    <div className="col-12 col-md-9 mb-2 mb-md-0">
                      <input type="email" className="form-control form-control-lg" placeholder="Enter your email..." />
                    </div>
                    <div className="col-12 col-md-3">
                      <button type="submit" className="btn btn-block btn-lg btn-primary">Sign up!</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </header>

        <section className="features-icons bg-light text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="icon-screen-desktop m-auto text-primary"></i>
                  </div>
                  <h3>Live Interactive Experience</h3>

                </div>
              </div>
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="icon-layers m-auto text-primary"></i>
                  </div>
                  <h3>Real Time and On-Deman Live Streaming </h3>

                </div>
              </div>
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="icon-check m-auto text-primary"></i>
                  </div>
                  <h3>Easy to Use</h3>

                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="showcase">
          <div className="container-fluid p-0">
            <div className="row no-gutters">

              <div className="col-lg-6 order-lg-2 text-white showcase-img" ></div>
              <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                <h2>Whay Teaching on Live Teach ?</h2>
                <p className="lead mb-0">-Earn Mony . Share Your Expertise . Build Your Following and Share Your Passion With MIllion Of Student Around The World </p>
              </div>
            </div>
            <div className="row no-gutters">
              <div className="col-lg-6 text-white showcase-img" ></div>
              <div className="col-lg-6 my-auto showcase-text">
                <h2>As a Student , Whay Should I take classes from LiveTeach?</h2>
                <p className="lead mb-0">-We are The Shortest Distance Between You and your SUCCESS</p>
                <p className="lead mb-0">-Affordable classes with Expert Teachers  </p>
                <p className="lead mb-0">-Accessibility , Any one who has Connection can connect and become a part of LiveTeach Community </p>
              </div>
            </div>
            <div className="row no-gutters">
              <div className="col-lg-6 order-lg-2 text-white showcase-img" ></div>
              <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                <h2>Easy To Use and on Your own Schedule </h2>
                <p className="lead mb-0">-More than 1.5 Million Students Have Said Hello to Stress-Free Studying </p>

              </div>
            </div>
          </div>
        </section>

        <section className="testimonials text-center bg-light">
          <div className="container">
            <h2 className="mb-5">What people are saying...</h2>
            <div className="row">
              <div className="col-lg-4">
                <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                  <img className="img-fluid rounded-circle mb-3" src="img/testimonials-1.jpg" alt="" />
                  <h5>Margaret E.</h5>
                  <p className="font-weight-light mb-0">"This is fantastic! Thanks so much guys!"</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                  <img className="img-fluid rounded-circle mb-3" src="img/testimonials-2.jpg" alt="" />
                  <h5>Fred S.</h5>
                  <p className="font-weight-light mb-0">"Live Teach is amazing. I've been using it to preper for my Math Exam ."</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                  <img className="img-fluid rounded-circle mb-3" src="img/testimonials-3.jpg" alt="" />
                  <h5>Sarah	W.</h5>
                  <p className="font-weight-light mb-0">"Thanks so much for making these affordable classess available to us!"</p>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="call-to-action text-white text-center">
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-xl-9 mx-auto">
                <h2 className="mb-4">Ready to get started? Sign up now!</h2>
              </div>
              <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                <form>
                  <div className="form-row">
                    <div className="col-12 col-md-9 mb-2 mb-md-0">
                      <input type="email" className="form-control form-control-lg" placeholder="Enter your email..." />
                    </div>
                    <div className="col-12 col-md-3">
                      <button type="submit" className="btn btn-block btn-lg btn-primary">Sign up!</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer bg-light">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 h-100 text-center text-lg-left my-auto">
                <ul className="list-inline mb-2">
                  <li className="list-inline-item">
                    <a href="#">About</a>
                  </li>
                  <li className="list-inline-item">&sdot;</li>
                  <li className="list-inline-item">
                    <a href="#">Contact</a>
                  </li>
                  <li className="list-inline-item">&sdot;</li>
                  <li className="list-inline-item">
                    <a href="#">Terms of Use</a>
                  </li>
                  <li className="list-inline-item">&sdot;</li>
                  <li className="list-inline-item">
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
                <p className="text-muted small mb-4 mb-lg-0">&copy; Your Website 2018. All Rights Reserved.</p>
              </div>
              <div className="col-lg-6 h-100 text-center text-lg-right my-auto">
                <ul className="list-inline mb-0">
                  <li className="list-inline-item mr-3">
                    <a href="#">
                      <i className="fa fa-facebook fa-2x fa-fw"></i>
                    </a>
                  </li>
                  <li className="list-inline-item mr-3">
                    <a href="#">
                      <i className="fa fa-twitter fa-2x fa-fw"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fa fa-instagram fa-2x fa-fw"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>


        <script src="vendor/jquery/jquery.min.js"></script>
        <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

      </div>



    );
  }
}

export default LandingPage;