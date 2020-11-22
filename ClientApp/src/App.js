import React, { useEffect  } from 'react';
import LogoBackground from './components/LogoBackground';
import Landing from './components/Landing';
import Projects from './components/Projects';
import LastestOnBlog from './components/LastestOnBlog';
import ContactMe from './components/ContactMe';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import './css/App.css';
import Navigation from './components/Navigation';
import AppCover from './components/AppCover';

import AOS from "aos";
import 'aos/dist/aos.css'

export default class App extends React.Component {

    constructor() {
        super()

        this.landingRef = React.createRef();
        this.projectsRef = React.createRef();
        this.aboutMeRef = React.createRef();
        this.lastestOnBlogRef = React.createRef();
        this.contactMeRef = React.createRef();

        this.state = {
            landingPos: undefined,
            projectsPos: undefined,
            aboutMePos: undefined,
            lastestOnBlogPos: undefined,
            contactMePos: undefined,
            isLoading: true
        }

    }
    componentDidMount() {
        this.setState({
            landingPos: this.landingRef.current.getBoundingClientRect().y,
            projectsPos: this.projectsRef.current.getBoundingClientRect().y,
            aboutMePos: this.aboutMeRef.current.getBoundingClientRect().y,
            lastestOnBlogPos: this.lastestOnBlogRef.current.getBoundingClientRect().y,
            contactMePos: this.contactMeRef.current.getBoundingClientRect().y
        });
        window.addEventListener("resize", this.handlePosition);
        window.addEventListener("scroll", this.handlePosition);
        window.addEventListener("click", this.handlePosition);
        this.loading();
        AOS.init();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handlePosition);
    }

    handlePosition = () => {
        console.log(this.contactMeRef.current.getBoundingClientRect());
        this.setState({
            landingPos: this.landingRef.current.getBoundingClientRect().y,
            projectsPos: this.projectsRef.current.getBoundingClientRect().y,
            aboutMePos: this.aboutMeRef.current.getBoundingClientRect().y,
            lastestOnBlogPos: this.lastestOnBlogRef.current.getBoundingClientRect().y,
            contactMePos: this.contactMeRef.current.getBoundingClientRect().y
        })
    };

    loading = () => {
        setTimeout(() => {
            this.setState({
                isLoading: false
            });
            console.log("ustawiam false")
            // if (this.state.isLoading == false)
            //    this.setState.isDisable = true;
        }, 4000);
    }

  static displayName = App.name;

    render() {
        return (
          <React.Fragment>
              <LogoBackground />
              <div className="app-container center-all">
                  <div className="app-wrap">
                      <AppCover isLoading={this.state.isLoading} />
                      <Navigation
                          landingPos={this.state.landingPos}
                          projectsPos={this.state.projectsPos}
                          aboutMePos={this.state.aboutMePos}
                          lastestOnBlogPos={this.state.lastestOnBlogPos}
                          contactMePos={this.state.contactMePos}
                      />
                        <div ref={this.landingRef}>
                            <Landing isLoading={this.state.isLoading} />
                        </div>
                        <div ref={this.projectsRef}>
                            <Projects /></div>
                        <div ref={this.aboutMeRef}><AboutMe />
                        </div>
                        <div ref={this.lastestOnBlogRef}>
                            <LastestOnBlog />
                        </div>
                        <div ref={this.contactMeRef}>
                            <ContactMe />
                        </div>
                        <Footer />
                  </div>
              </div> 
          </React.Fragment>
    );
  }
}

