import {Component} from 'react';
import '../css/ContactMe.css';
import post from '../svg/envelope.svg';

export default class ContactMe extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            text: "",
            email: "",

            isMessageDisplay: false,
            isSending: false,
            success: false,
            fail: false

        }

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        var data = new FormData();
    }

    handleNameChange(e) {
        this.setState({ name: e.target.value});
    }

    handleTextChange(e) {
        this.setState({ text: e.target.value});
    }

    handleEmailChange(e) {
        this.setState({ email: e.target.value});
    }

    handleSubmit(e) {
        this.setState({ isSending: true })
        e.preventDefault();

   
            let data = {
                name: this.state.name,
                email: this.state.email,
                text: this.state.text
            }

            fetch("sendmessage",
                {
                    body: JSON.stringify(data),
                    method: "POST",
                    headers: {
                        'Content-Type' : 'application/json'
                    }
                }).then(response => {
                    if (response.ok) {
                        this.setState({
                            success: true,
                            isMessageDisplay: true
                        });
                        setTimeout(() => { this.setState({isMessageDisplay: false}) }, 4000);
                        setTimeout(() => { this.setState({success: false}) }, 5000);
                    } else {
                        this.setState({
                            fail: true,
                            isMessageDisplay: true
                        });
                        setTimeout(() => { this.setState({ isMessageDisplay: false }) }, 4000);
                        setTimeout(() => { this.setState({ fail: false }) }, 5000);
                    }
                    this.setState({ isSending: false })
                });
        

        this.setState({
            name: "",
            email: "",
            text: ""
        });
    }

    render() {
        return (
            <div className="contact-me-container">
                <div className="col" data-aos="fade-up">
                    <div className="contact-title">
                        <div className="row">
                            <h2>LET'S WORK TOGETHER</h2>
                        </div>
                        <div className="row">
                            <div className="line-1"></div>
                            <div className="line-2"></div>
                            <div className="line-3"></div>
                        </div>
                    </div>
                </div>
                <div className="form-social-container" >
                    <div className="col">
                        <div className="col" data-aos="fade-up">
                            <h3>FEEL FREE TO CONTACT ME</h3>
                            <p>Proin laoreet turpis ut euismod fringilla. Quisque viverra ultricies pharetra. Maecenas semper luctus urna. Praesent dolor sem, consectetur id vulputate at, iaculis et nisi. </p>
                        </div>
                        <div className="row">
                            <form action="" className="contact-form" onSubmit={this.handleSubmit}>
                                <div className="col" data-aos="fade-up">
                                    <label >Your Name</label>
                                    <input type="text" id="name" name="name" placeholder="What's Your name?" value={this.state.name} onChange={this.handleNameChange} ></input>
                                </div>
                                <div className="col" data-aos="fade-up">
                                    <label >Your email address</label>
                                    <input type="text" id="email" name="email" placeholder="What's Your email address?" value={this.state.email} onChange={this.handleEmailChange}></input>
                                </div>
                                <div className="col" data-aos="fade-up">
                                    <label >Message</label>
                                    <textarea name="text" id="text" placeholder="What's Your message?" value={this.state.text} onChange={this.handleTextChange}></textarea>
                                    <button className="btn btn1">
                                        <div><span>SEND MESSAGE</span></div>
                                        <div className="button-background"></div>
                                    </button>
                                </div>
                                <div className="center-all col info-container">
                                    <div className={"spin-container" + (this.state.isSending ? " anim-in active" : " anim-out")}>
                                        <div className="loading-spinner"></div>
                                    </div>
                                    <div className={("message-info ") + (this.state.isMessageDisplay ? "anim-in" : "anim-out")}>{(this.state.success ? "Thank's for response! I will try to answer as soon as i can!" : "") + (this.state.fail ? "Oops, something went wrong..." : "")}</div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col social-media center-all" data-aos="fade-up">
                        <div className="square-social-background">
                            <div className="sq-s-1"></div>
                            <div className="sq-s-2"></div>
                            <div className="sq-s-3"></div>
                        </div>
                        <h3>CHECK MY PROFILES ON</h3>
                        <span>Facebook</span>
                        <span>Instagram</span>
                        <span>GraphicRiver</span>
                        <span>LinkeedIn</span>
                    </div>
                </div>
            </div>
        );
    }     
}
