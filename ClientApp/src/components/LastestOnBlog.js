import React from 'react';
import '../css/LastestOnBlog.css';
import img_1 from '../svg/blog_1.svg'
import img_2 from '../svg/blog_2.svg'
import img_3 from '../svg/blog_3.svg'



const LastestOnBlog = () => {
        return (
            <div className="lob-container">
                <div className="section-title" data-aos="fade-up">
                    <h2>LASTEST ON BLOG</h2>
                </div>
                <div className="blog-article" data-aos="fade-up">
                    <div className="dec-wrap">
                        <div className="decorative-square sq-1"></div>
                    </div>
                    <div className="col lob-img-container">
                        <img src={img_1}></img>
                    </div>
                    <div className="col lob-text center-vert">
                        <p>20 OCTOBER 2020</p>
                        <h3>Blog Article - Test Data</h3>
                        <p>CHECK LIVE</p>
                    </div>
                    <div className="lob-mob-text">
                        <p>20 OCTOBER 2020</p>
                        <p>CHECK LIVE</p>
                    </div>
                </div>
                <div className="blog-article" data-aos="fade-up">
                    <div className="dec-wrap">
                        <div className="decorative-square sq-2"></div>
                    </div>
                    <div className="col lob-img-container">
                        <img src={img_2}></img>
                    </div>
                    <div className="col lob-text center-vert">
                        <p>20 OCTOBER 2020</p>
                        <h3>Blog Article - Test Data</h3>
                        <p>CHECK LIVE</p>
                    </div>
                    <div className="lob-mob-text">
                        <p>20 OCTOBER 2020</p>
                        <p>CHECK LIVE</p>
                    </div>
                </div>
                <div className="blog-article" data-aos="fade-up">
                    <div className="dec-wrap">
                        <div className="decorative-square sq-3"></div>
                    </div>
                    <div className="col lob-img-container">
                        <img src={img_3}></img>
                    </div>
                    <div className="col lob-text center-vert">
                        <p>20 OCTOBER 2020</p>
                        <h3>Blog Article - Test Data</h3>
                        <p>CHECK LIVE</p>
                    </div>
                    <div className="lob-mob-text">
                        <p>20 OCTOBER 2020</p>
                        <p>CHECK LIVE</p>
                    </div>
                </div>
            </div>
        );
}

export default LastestOnBlog