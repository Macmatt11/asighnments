import React from 'react'

export default function Footer(){
    return(
        
        <footer>
        
            <div className='iconDiv'>
                <hr className='footHr'></hr>
                <ul className='iconUl'>
                <li className='liIcon'><span><a href='www.twitter.com'><i id='tweet' class="fa-brands fa-twitter fa-xl"></i></a></span></li>
                <li className='liIcon'><span><a href='www.facebook.com'><i id="faceBK" class="fa-brands fa-facebook-f fa-xl"></i></a></span></li>
                <li className='liIcon'><span><a href='www.github.com'><i id="gitHub" class="fa-brands fa-github fa-xl"></i></a></span></li>
            </ul>
            <div className='copyrightDiv'>Copyright © Your Website 2022</div>
            </div>
        </footer>
    )
}