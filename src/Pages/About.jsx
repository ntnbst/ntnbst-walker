import React from 'react';
import NavigationBar from '../Components/NavigationBar/NavigationBar.jsx';

const About = () => {
    return (
        <div>
            <NavigationBar />

            <section className="page-description">
                <h1 className="text-center">About</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam deleniti quae mollitia veritatis minus aliquid, cum atque, voluptatum ducimus ullam porro est voluptatibus laudantium eveniet tempora obcaecati. Eaque error laudantium dignissimos aut! Velit illo perspiciatis amet laudantium natus nostrum quisquam tempora provident libero dolore architecto, doloribus nam rerum? Enim repellat vitae error, harum fugiat soluta! Sunt maxime odit eos placeat quod impedit. Ex, magnam! Cumque nihil repudiandae, quod accusantium ea dicta libero vero amet enim ex possimus? Culpa sit sint quam debitis suscipit fugit dolor, hic ab, commodi, harum amet cum necessitatibus magni dolorem voluptatem consequatur aspernatur quasi minus dolores deleniti nostrum ex nam nisi! Corporis excepturi laboriosam numquam, sit voluptatum tempora, iure, vero odio eius molestias praesentium magnam iusto officiis repudiandae nemo id deleniti perspiciatis voluptatem quia quibusdam nostrum? Dolore consectetur in quos optio beatae, itaque tempore saepe neque.</p>

                <div className="resume-outside">
                    <div className="resume-inside">
                        <p id="small-heading">/* --Resume-- */</p>
                        <br />
                        <p className="comment-head">/* SUMMARY OF QUALIFICATIONS */ </p>
                        <p>Received a Bachelors degree in the Computer Science and Engineering at DIT University, Dehradun, UK</p>
                        <p>Excellent organization, self-motivation, and problem-solving skills.</p>
                        <p>Creative, strong communication skills and consistently meets deadlines.</p>
                        <p>Passionate about web development and new technologies.</p>

                        {/*****Section Technical Skills*****/}
                        <p className="comment-head">/* TECHNICAL SKILLS */</p>
                        <p>
                            <p className="min-heads"> Programming Languages: </p>
                            JavaScript(ES 6), HTML/CSS, TypeScript, C and Java
                        </p>
                        <p>
                            <p className="min-heads"> Frameworks & Libraries: </p>ReactJS,
                            ExpressJS, jQuery, Bootstrap, Semantic UI, Material UI
                            </p>
                        <p>
                            <p className="min-heads">Database:</p> MongoDB
                            </p>
                        <p>
                        <p className="min-heads">Version Control: </p> Git
                        </p>
                        <p>
                        <p className="min-heads"> IDE & Photo Editing Tools: </p> VS Code, Photoshop</p>
                        {/***** Section Ends *****/}

                        <p className="comment-head">/* EXPERIENCE */</p>

                        <p className="comment-head">
                            //Front End Developer at <a target="_blank" style={{ color: '#8ac' }} href="https://sqrrl.in">Sqrrl</a>
                            <p style={{ fontSize: '0.7rem' }}>//APR 2018 - Present</p>{' '}
                        </p>
                        <p>Built a single page web app using Reactjs, which provides a platform to invest in mutual funds.</p>
                        <p></p>
                        <p>Worked with service worker, which makes this a PWA.</p>
                        <p></p>
                        <p>Worked with KIRBY - a configurable CMS which allows you to edit pages through a panel</p>
                        <p>Built a production ready SIP calculator.</p>

                        <p className="comment-head">
                            //Training With Udemy.com{' '}
                            <p style={{ fontSize: '0.7rem' }}>//JAN 2018 - MAR-2018</p>{' '}
                        </p>
                        <p>Learned about ReactJS Eco System.</p>
                        <p>Understood ES 6 and Next Generation JavaScript Features.</p>
                        <p>Utilized ReactJS to build components for various web applications</p>
                        <p>Worked with gatsbyJS A Blazing-fast static site generator for React, Powered by React and Webpack.</p>

                        <p className="comment-head">
                            //Training With FreeCodeCamp{' '}
                            <p style={{ fontSize: '0.7rem' }}>//MAY 2017 - NOV 2017</p>{' '}
                        </p>

                        <p>Started from basics with html5 and css3.</p>
                        <p>Designed and Developed many Landing Pages with CSS Frameworks like Bootstrap && semantic UI</p>
                        <p>Utilized latest HTML5 and CSS3 technologies to build semantically correct and visually interesting responsive designs.</p>
                        <p>Developed Todo App and Color game, Implemented Vanilla JS Event Listeners.</p>
                        <p>Created interactive elements with custom JavaScript and Jquery.</p>

                        <p>Learned about JavaScript Design Pattern and Modularity of Code.</p>

                        <p>Build a fully functional Blog Posting Site, BackEnd with
                        NodeJS, ExpressJS and MongoDB.</p>

                        {/***** Section Ends *****/}
                        <p className="comment-head">/* EDUCATION */ </p>
                        <p>
                            <p className="min-heads">DIT University, Dehradun - </p>
                            B.Tech. Computer Science and Engneering 2017
                        </p>

                        {/* Inside Resume Ends*/}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;