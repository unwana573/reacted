// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook } from '@fortawesome/free-solid-svg-icons';
// import { faLinkedin } from '@fortawesome/free-solid-svg-icons';
// import { faXTwitter } from '@fortawesome/free-solid-svg-icons';
import './footer.css';

function Footer() {
    return (
        <>
            <div className="footer transparent-bg text-black text-left text-md-start">
                <div className="sec-1">
                    <img src="http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.…c93d5dbd4baef082751dd0_1000000000000000000028.png" alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetur
                        <br /> adipiscing elit. Aenean auctor, tortor
                        <br /> accumsan suscipit dapibus,
                        </p>
                    <ul>
                        {/* <li><FontAwesomeIcon icon={faFacebook} /></li>
                        <li><FontAwesomeIcon icon={faLinkedin} /></li>
                        <li><FontAwesomeIcon icon={faXTwitter} /></li> */}
                    </ul>    
                </div>
                <div className="sec-2">
                    <ul>
                        <li><span>Home Page</span></li>
                        <li>Home</li>
                        <li>About</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className="sec-3">
                    <ul>
                        <li><span>Contact Us</span></li>
                        <li><span>Phone:</span> (123) 456-7890</li>
                        <li><span>Email:</span> support@example.com</li>
                        <li><span>Address:</span> 123 Main St, City, Country</li>
                    </ul>
                </div>
                <div className="sec-4 container-fluid">
                    <h4>Gallery</h4>
                    <ul className='row'>
                        <li><img src="https://www.foodiesfeed.com/wp-content/uploads/2023/08/crispy-spicy-chicken-wings.jpg.webp" alt="" className="footer-img img-fluid"/></li>
                        <li><img src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg.webp" alt="" className="footer-img img-fluid" /></li>
                        <li><img src="https://www.foodiesfeed.com/wp-content/uploads/2023/05/juicy-cheeseburger.jpg.webp" alt="" className="footer-img img-fluid" /></li>
                        <li><img src="https://www.foodiesfeed.com/wp-content/uploads/2023/10/bowl-of-ice-cream-with-chocolate.jpg.webp" alt="" className="footer-img img-fluid" /></li>
                        <li><img src="https://www.foodiesfeed.com/wp-content/uploads/ff-images/2025/06/crispy-fried-chicken-drumstick-in-hot-oil.webp" alt="" className="footer-img img-fluid" /></li>
                        <li><img src="https://www.foodiesfeed.com/wp-content/uploads/ff-images/2025/05/colorful-fruit-salad-platter-with-fresh-mint.webp" alt="" className="footer-img img-fluid" /></li>
                    </ul>
                </div>
            </div>
            <p className='text-center'>Copyright © 2021 all rights reserved Codestar</p>
        </>
    )
}

export default Footer;