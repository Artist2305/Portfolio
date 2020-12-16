import {Component} from 'react';
import '../css/LastestOnBlog.css';
import img_1 from '../svg/blog_1.svg'
import img_2 from '../svg/blog_2.svg'
import img_3 from '../svg/blog_3.svg'
import BlogArticle from './BlogArticle';

export default class LastestOnBlog extends Component {
    constructor(props) {
        super(props)

        this.state = {
            blogArticlesData: []
        }
    }
    componentDidMount() {
        fetch('api/blogArticle')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    blogArticlesData: data
                })
            })
    }
    render() {

        const blogImages = [
            img_1,
            img_2,
            img_3
        ]
        const blogArticles = this.state.blogArticlesData.map(s => <BlogArticle key={s.id} data={s} image={blogImages[s.id - 1]}></BlogArticle>);
        return (
            <div className="lob-container">
                <div className="section-title" data-aos="fade-up">
                    <h2>LASTEST ON BLOG</h2>
                </div>
                {blogArticles}
            </div>
        );
    }
}
