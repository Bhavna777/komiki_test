import React from 'react'
import './../css/Footer.css'

function Footer(props) {
  return (
    <div className="Footer">
        <section className="Sixth">
          <div class="sixth">
            <h1>Komiki</h1>
            <div class="sociallinks">
              <img src="./Images/linkedin.svg" />
              <img src="./Images/facebook.svg" />
              <img src="./Images/twitter.svg" />
              <img src="./Images/instagram.svg" />
            </div>
            <ul>
                <li>About</li>
                <li>Help</li>
                <li>Forums</li>
                <li>Contact</li>
                <li>Jobs</li>
                <li>Publish</li>
                <li>Newsfeed</li>
                <li>Studio Komiki</li>
            </ul>
            <div class="TPP">
                <small>@ 2021 Komiki</small>
                <p>Terms Privacy Policy</p>
            </div>

            <footer>
                <p>Switch to classic view</p>
            </footer>
          </div>
        </section>
    </div>
  );
}

export default Footer;
