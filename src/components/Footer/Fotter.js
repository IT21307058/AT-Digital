import React from 'react'
import './Fotter.css';
import logo from '../../assets/image/Logo.png'

const Fotter = () => {
    return (
        <div className='fotter'>
            <div className='sb__fotter section__padding'>
                <div className='sb__fotter-links'>
                    <div>
                        <div className='sb__fotter-links-div'>
                            <img src={logo} alt="Description of the image" className='logo' />
                            <p>Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.</p>
                        </div>
                    </div>
                    <div className='sb__fotter-links-alt'>
                        <div className='sb__fotter-links_div padding-t1'>
                            <h4>Our Technologies</h4>
                            <a href="/resource">
                                <p className='text-link'>ReactJS</p>
                            </a>
                            <a href="/resource">
                                <p className='text-link'>Gatsby</p>
                            </a>
                            <a href="/resource">
                                <p className='text-link'>NextJS</p>
                            </a>
                            <a href="/resource">
                                <p className='text-link'>NodeJS</p>
                            </a>
                        </div>
                        <div className='sb__fotter-links_div padding-t'>
                            <h4>Our Services</h4>
                            <a href="/resource">
                                <p className='text-link'>Sociel Media Marketing</p>
                            </a>
                            <a href="/resource">
                                <p className='text-link'>Web & Mobile App Development</p>
                            </a>
                            <a href="/resource">
                                <p className='text-link'>Data & Analytics</p>
                            </a>
                        </div>
                    </div>
                </div>

                <hr />
                <div className='sb_fotter-below'>
                    <a href="/terms"><div><p className='text-link'>Terms & Conditions</p></div></a>
                    <a href="/terms"><div><p className='text-link'>Privacy Policy</p></div></a>
                </div>
            </div>
        </div>
    )
}

export default Fotter