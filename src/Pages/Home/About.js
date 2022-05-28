import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='container'>
            <h1 className='my-3 text-uppercase'>About Developer</h1>
            <div class="card border-0 mb-3 mx-auto p-3" style={{ maxWidth: "540px",boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px" }}>
                <div class="row g-0">
                    <div class="col-12">
                        <div class="card-body">

                            <h5 class="card-title" style={{fontFamily:'lato'}}>Md. Sazidul Islam</h5>
                            <h6 style={{fontFamily:'Poppins',textTransform:'uppercase'}}>Junior Web Developer</h6>
                            <p class="card-text">Student Of Daffodil International University</p>
                            <p class="card-text"><small class="text-muted">Department Of CSE</small></p>
                            <a href="https://github.com/msazid">GitHub</a>
                            <p class="card-text">
                                <p>Some Projects</p>
                                <a style={{textDecoration:'none',padding:"0px 5px"}} href="https://ms-grocery-68bcb.web.app/">Project 2</a>
                                <a style={{textDecoration:'none',padding:"0px 5px"}} href="https://mr-bond-810ee.web.app/">Project 1</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;