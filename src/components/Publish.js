import React from 'react'
import './../css/Publish.css';
import Header from './Header';
import Footer from './Footer';
import {Link} from 'react-router-dom';

function Publish() {
  return (
      <>
        <Header />
        <div className="publish_banner">
            <h1 className="banner_title">How we help creators</h1>
            <p className="banner_desc">At Komiki, creators are limited only by what they dare to dream.<br/> Komiki can help creators bring their stories to print, television, feature film, merchandising, and more.</p>
            <Link to="/dashboard"><button className="get_started">Get Started</button></Link>
            <p className="getstarted_desc">Are you a Publisher or Agent? Learn more</p>
        </div>
        <div class="publish-shortcut-nav">
            <nav class="shortcut-nav">
                <ul class="shortcut-wrap">
                    <li class="shortcut-item"><a href="#free-publishing" class="item-title publish">Free publishing</a></li>
                    <li class="shortcut-item"><a href="#earn" class="item-title earn">Monetization</a></li>
                    <li class="shortcut-item"><a href="#community-&amp;-connecting" class="item-title community">Community &amp; Connecting</a></li>
                    <li class="shortcut-item"><a href="#studio-tapas" class="item-title studio">Studio Tapas</a></li>
                    <li class="shortcut-item"><a href="#submit-your-works" class="item-title work">Submit your works</a></li>
                </ul>
            </nav>
        </div>
        <div className="publish_sec">
            <div className="publish_sec_desc">
                <h1>Free Publishing</h1>
                <p>Publishing is super simple, and always free.<br/> Our goal is to provide easy and accessible<br/> publishing tools to free up more of yourtime<br/> for creating.</p>
                <img src="./Images/publisher_btn.png" />
            </div>
            <div className="publish_sec_img">
                <img src="./Images/publisher.png"/>
            </div>
        </div>
        <div className="community_sec">
            <div className="community_sec_desc">
                <h1>Community & Connecting</h1>
                <p>Our incredibly supportive community, called<br/> Komikstry, is home to over 61,000 creators<br/> and millions of readers. Our love of<br/> storytelling makes us a perfect home for<br/> your stories to find fans.</p>
            </div>
            <div className="community_sec_img">
                <img src="./Images/community_img.png" />
            </div>
        </div>
        <div className="studio_komiki">
            <div className="studio_komiki_img">
                <img src="./Images/studio_komiki.png" />
            </div>
            <div className="studio_komiki_desc">
                <h1>Studio Komiki</h1>
                <p>Studio Komiki celebrates diverse stories and<br/> storytellers to bring you comics that you<br/> can't find anywhere else.<br/> Every creator has a unique voice, and we<br/> want to help them share their stories with<br/> the world.</p>
            </div>
        </div>
        <div className="submit_sec">
            <div className="submit_sec_desc">
                <h1>Submit your works</h1>
                <p>Ready to take your stories to the next level?<br/> Find out more what Tapas can offer you!</p>
                <button>Sign up as publisher</button>
            </div>
            <div className="submit_sec_img">
                <img src="./Images/submit_work.png" />
            </div>
        </div>
        <div className="publish_banner">
            <h1 className="banner_title">Publish for free</h1>
            <p className="banner_desc">Join 61,568 creators who publish with Tapas.</p>
            <button className="get_started">Get Started</button>
            <p className="getstarted_desc">Are you a Publisher or Agent? Learn more</p>
        </div>
        <Footer />
      </>
  );
}

export default Publish;
