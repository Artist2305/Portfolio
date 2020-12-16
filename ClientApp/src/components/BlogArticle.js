import { Component}from 'react';
import '../css/LastestOnBlog.css';

export default class BlogArticle extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
                <div className="blog-article" data-aos="fade-up">
                    <div className="dec-wrap">
                    <div className={"decorative-square sq-" + (this.props.data.id)}></div>
                    </div>
                    <div className="col lob-img-container">
                        <img src={this.props.image}></img>
                    </div>
                    <div className="col lob-text center-vert">
                    <p>{this.props.data.date}</p>
                    <h3>{this.props.data.name}</h3>
                        <p>CHECK LIVE</p>
                    </div>
                    <div className="lob-mob-text">
                    <p>{this.props.data.date}</p>
                        <p>CHECK LIVE</p>
                    </div>
                </div>
        );
    }
}