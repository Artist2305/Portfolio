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
import ProjectDetails from './components/ProjectDetails';

import projectsData from './json/projectsData.json';
import ProjectWrapper from './components/ProjectWrapper';
import AOS from "aos";
import 'aos/dist/aos.css'

import { Route, Switch } from "react-router-dom";

import { AnimatePresence, motion } from 'framer-motion'


export default class AppContainer extends React.Component {

    constructor(props) {
        super(props)

        this.landingRef = React.createRef();
        this.projectsRef = React.createRef();
        this.aboutMeRef = React.createRef();
        this.lastestOnBlogRef = React.createRef();
        this.contactMeRef = React.createRef();

        this.state = {
          //  landingPos: undefined,
         //   projectsPos: undefined,
         //   aboutMePos: undefined,
         //   lastestOnBlogPos: undefined,
          //  contactMePos: undefined,

            landingRef: undefined,
            projectsRef: undefined,
            aboutMeRef: undefined,
            lastestOnBlogRef: undefined,
            contactMeRef: undefined,

            chosedRef: undefined,

            isLoading: true,
            isProjectActive: false,
            isCoverActive: false,
            isLinkClicked: false
        }

    }

    ismounted = false;

    componentDidMount() {
        this.initializePositions();
        this.loading();
        AOS.init();
    }

    handlePosition = (refPos) => {
        
    };
    scrollTo = (amount) => {
        console.log(amount);
        window.scrollBy(0, amount);
    }
    whereToScroll = (refPos) => {
        if (this.state.isLinkClicked == true) {
            const amount = refPos.current.getBoundingClientRect().y;
            console.log(amount);
            window.scrollBy(0, amount);
            this.switchLinkStatus(false);
        }
    }

    initializePositions = () => {
        console.log("INICJALIZUJE");
        this.setState({ chosedRef: this.landingRef }, () => { console.log(this.state.chosedRef); });
    }

    loading = () => {
        setTimeout(() => {
            this.setState({
                isLoading: false
            });
        }, 1000);
    }

    choseRef = (ref) => {
        this.setState({ chosedRef: ref }, () => { console.log(this.state.chosedRef) });
    }
    switchCoverStatus = (status) => {
        this.setState({
            isCoverActive: status
        });
    }
    switchProjectDetailsStatus = (status) => {
        this.setState({
            isProjectActive: status
        });
    }
    switchLinkStatus = (status) => {
        this.setState({
            isLinkClicked: status
        });
    }

    static displayName = AppContainer.name;


    pageTransition = {
        in: {
            x: ["-120vw", "-10vw", "0vw"],
            opacity: [0, 0, 1],
            times: [0, 0.5, 1],
            duration: 0.6,
            ease: "ease",
        },
        out: {
            x: ["0vw", "-10vw", "-120vw"],
            opacity: [1,  0, 0],
            times: [0, 0.5, 1],
            duration: 0.6,
            ease: "ease",
            },
        }

    render() {
        return (
            <React.Fragment>
                <LogoBackground />
                <div className="app-container center-all">
                    <div className="app-wrap">
                        <AppCover isLoading={this.state.isLoading} />
                        <Navigation
                            landingRef={this.landingRef}
                            projectsRef={this.projectsRef}
                            aboutMeRef={this.aboutMeRef}
                            lastestOnBlogRef={this.lastestOnBlogRef}
                            contactMeRef={this.contactMeRef}
                            handlePosition={this.handlePosition}

                            choseRef={this.choseRef}
                            isCoverActive={this.state.isCoverActive}
                            switchCoverStatus={this.switchCoverStatus}
                            switchLinkStatus={this.switchLinkStatus}

                        />
                        <AnimatePresence exitBeforeEnter>
                            <Switch location={this.props.location} key={this.props.location.pathname} >

                                <Route exact path="/">
                                    <motion.div initial="in" animate="in" exit="out" variants={this.pageTransition}>
                                        <div ref={this.landingRef}>
                                            <Landing
                                                isLoading={this.state.isLoading} switchProjectDetailsStatus={this.switchProjectDetailsStatus}
                                                whereToScroll={this.whereToScroll}
                                                chosedRef={this.state.chosedRef}
                                            />
                                        </div>
                                        <div ref={this.projectsRef}>
                                            <Projects
                                                projectsData={projectsData}
                                                switchCoverStatus={this.switchCoverStatus}
                                            />
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
                                    </motion.div>
                                </Route>
                                <Route path={projectsData[0].link}>


                                    <ProjectWrapper switchProjectDetailsStatus={this.switchProjectDetailsStatus}
                                        projectData={projectsData[0]}
                                        switchCoverStatus={this.switchCoverStatus} />


                                </Route>
                                <Route path={projectsData[1].link}>
                                    <ProjectWrapper switchProjectDetailsStatus={this.switchProjectDetailsStatus}
                                        projectData={projectsData[1]}
                                        switchCoverStatus={this.switchCoverStatus} />
                                </Route>
                                <Route path={projectsData[2].link}>
                                    <ProjectWrapper switchProjectDetailsStatus={this.switchProjectDetailsStatus}
                                        projectData={projectsData[2]}
                                        switchCoverStatus={this.switchCoverStatus} />
                                </Route>
                                <Route path={projectsData[3].link}>
                                    <ProjectWrapper switchProjectDetailsStatus={this.switchProjectDetailsStatus}
                                        projectData={projectsData[3]}
                                        switchCoverStatus={this.switchCoverStatus} />
                                </Route>
                            </Switch>
                        </AnimatePresence>
                        <Footer />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

