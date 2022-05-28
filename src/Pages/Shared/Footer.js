import React from 'react';
import "./Footer.css"
const Footer = () => {
    return (

            <div class="sticky-bottom">
                <footer class="text-white text-center text-lg-start" style={{ backgroundColor: '#23242a' }}>

                    <div class="container p-4">

                        <div class="row mt-4">

                            <div class="col-lg-4 col-md-12 mb-4 mb-md-0">
                                <h5 class="text-uppercase mb-4">About company</h5>

                                <p>
                                A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring.The are variations of passages of abe, but majority have suffered incididunt dolore magna aliqua.
                                </p>

                                <p>
                                    Ms 
                                </p>

                            </div>
                            <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                                <h5 class="text-uppercase text-center mb-3 pb-1">Get in touch</h5>

                                <div class="form-outline form-white mb-4">
                                    <input type="text" id="formControlLg" class="form-control form-control-lg" />
                                    <label class="form-label" for="formControlLg" style={{ marginLeft: "0px;" }}> <span className='btn btn-light mt-2'>Subscribe</span> </label>
                                    <div class="form-notch"><div class="form-notch-leading" style={{ width: "9px;" }}></div>
                                    <div class="form-notch-middle" style={{ width: "48.8px" }}></div>
                                    <div class="form-notch-trailing"></div></div>
                                    </div>

                                <ul class="fa-ul" style={{ marginLeft: "1.65em" }}>
                                    <li class="mb-3">
                                        <span class="fa-li"><i class="fas fa-home"></i></span><span class="ms-2">New York, NY 10012, US</span>
                                    </li>
                                    <li class="mb-3">
                                        <span class="fa-li"><i class="fas fa-envelope"></i></span><span class="ms-2">info@example.com</span>
                                    </li>
                                    <li class="mb-3">
                                        <span class="fa-li"><i class="fas fa-phone"></i></span><span class="ms-2">+ 01 234 567 88</span>
                                    </li>
                                    <li class="mb-3">
                                        <span class="fa-li"><i class="fas fa-print"></i></span><span class="ms-2">+ 01 234 567 89</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                                <h5 class="text-uppercase mb-4 text-center">Opening hours</h5>

                                <table class="table text-center text-white">
                                    <tbody class="font-weight-normal">
                                        <tr>
                                            <td>Mon - Thu:</td>
                                            <td>8am - 9pm</td>
                                        </tr>
                                        <tr>
                                            <td>Fri - Sat:</td>
                                            <td>8am - 1am</td>
                                        </tr>
                                        <tr>
                                            <td>Sunday:</td>
                                            <td>9am - 10pm</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div class="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                        © 2022 Copyright:
                        <a class="text-white" href="https://mdbootstrap.com/"> ms.com</a>
                    </div>
                </footer>

            </div>


    );
};

export default Footer;