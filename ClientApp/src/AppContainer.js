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
//import projectsData from './json/projectsData.json';
import AOS from "aos";
import 'aos/dist/aos.css'

import { Route, Switch } from "react-router-dom";

import { AnimatePresence, motion } from 'framer-motion'
import ProjectDetails from './components/ProjectDetails';
import MagicWanderScreens from './img/magicWanderImages.js';
import SaperLogicScreens from './img/saperLogicImages.js';

export default class AppContainer extends React.Component {

    constructor(props) {
        super(props)
        this.landingRef = React.createRef();
        this.projectsRef = React.createRef();
        this.aboutMeRef = React.createRef();
        this.lastestOnBlogRef = React.createRef();
        this.contactMeRef = React.createRef();
        this.state = {
            landingRef: undefined,
            projectsRef: undefined,
            aboutMeRef: undefined,
            lastestOnBlogRef: undefined,
            contactMeRef: undefined,
            chosedRef: undefined,
            isLoading: true,
            isProjectActive: false,
            isCoverActive: false,
            isLinkClicked: false,
            projectsData: []
        }
    }

    projectScreens = [
        MagicWanderScreens,
        SaperLogicScreens,
        MagicWanderScreens,
        MagicWanderScreens,
        MagicWanderScreens,
        MagicWanderScreens
    ]

    componentDidMount() {
        fetch('api/projects')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    projectsData: data
            })
        })

        this.initializePositions();
        this.loading();
        AOS.init();
    }
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

        const links = this.state.projectsData.map(s => s.link);

        const projectsRoutes = this.state.projectsData.map(s => (
            <Route key={s.id} path={s.link}>
                <ProjectDetails switchProjectDetailsStatus={this.switchProjectDetailsStatus}
                    projectData={s}
                    switchCoverStatus={this.switchCoverStatus}
                    links={links}
                    screens={this.projectScreens[s.id - 1]}
                />
            //</Route>));
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
                                                projectsData={this.state.projectsData}
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
                                {projectsRoutes}
                            </Switch>
                        </AnimatePresence>
                        <Footer />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

