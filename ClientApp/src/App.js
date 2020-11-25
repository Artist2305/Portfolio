import React, { } from 'react';
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
import ProjectDetails from './components/ProjectDetails'

import AOS from "aos";
import 'aos/dist/aos.css'

import { Route, Switch } from "react-router-dom";

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
            isLoading: true,
            isProjectActive: false
        }

    }
    componentDidMount() {
        this.loading();
        AOS.init();
    }
    handlePosition = (func, pos) => {
        if (this.state.isProjectActive == false) {
            switch (pos) {
                case 1:
                    this.setState({ landingPos: this.landingRef.current.getBoundingClientRect().y }, () => { func(this.state.landingPos); })
                    break;
                case 2:
                    this.setState({ projectsPos: this.projectsRef.current.getBoundingClientRect().y }, () => { func(this.state.projectsPos); })
                    break;
                case 3:
                    this.setState({ aboutMePos: this.aboutMeRef.current.getBoundingClientRect().y }, () => { func(this.state.aboutMePos); })
                    break;
                case 4:
                    this.setState({ lastestOnBlogPos: this.lastestOnBlogRef.current.getBoundingClientRect().y }, () => { func(this.state.lastestOnBlogPos); })
                    break;
                case 5:
                    this.setState({ contactMePos: this.contactMeRef.current.getBoundingClientRect().y }, () => { func(this.state.contactMePos); })
                    break;
                default:
            }
        }
        else {
            this.setState({ isProjectActive: false }, () => { this.handlePosition(func, pos) })
        }
    };

    loading = () => {
        setTimeout(() => {
            this.setState({
                isLoading: false
            });
            console.log("ustawiam false")
            // if (this.state.isLoading == false)
            //    this.setState.isDisable = true;
        }, 1000);
    }

    switchProjectDetailsStatus = (status) => {
        this.setState({
            isProjectActive: status
        });
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

                            handlePosition={this.handlePosition}
                        />
                        <Switch>
                            <Route exact path="/">
                                <React.Fragment>
                                    <div ref={this.landingRef}>
                                        <Landing isLoading={this.state.isLoading} switchProjectDetailsStatus={this.switchProjectDetailsStatus} />
                                    </div>
                                    <div ref={this.projectsRef}>
                                        <Projects />
                                    </div>
                                    <div ref={this.aboutMeRef}>
                                        <AboutMe />
                                    </div>
                                    <div ref={this.lastestOnBlogRef}>
                                        <LastestOnBlog />
                                    </div>
                                    <div ref={this.contactMeRef}>
                                        <ContactMe />
                                    </div>
                                </React.Fragment>
                            </Route>
                            <Route path="/SaperLogic">
                                <ProjectDetails switchProjectDetailsStatus={this.switchProjectDetailsStatus} />
                            </Route>
                            <Route path="/MagicWonder">
                                <ProjectDetails switchProjectDetailsStatus={this.switchProjectDetailsStatus} />
                            </Route>
                            <Route path="/ChefMaster">
                                <ProjectDetails switchProjectDetailsStatus={this.switchProjectDetailsStatus} />
                            </Route>
                            <Route path="/TransportCompanySinglePage">
                                <ProjectDetails switchProjectDetailsStatus={this.switchProjectDetailsStatus} />
                            </Route>
                        </Switch>
                        <Footer />
                  </div>
              </div> 
          </React.Fragment>
    );
  }
}

