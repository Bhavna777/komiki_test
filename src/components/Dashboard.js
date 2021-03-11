import React from 'react'
import './../css/Dashboard.css';
import Header from './Header';
import Footer from './Footer';
import {Link} from 'react-router-dom';
import Sidebar from './Sidebar';

function Dashboard() {
  return (
      <>
        <Header />
        <div className="dashboard_blank_sec">

        </div>
        <div className="dashboard_body">
            <Sidebar />
            <div className="index_body">
                <div className="index_body_left">
                    <h1>Series</h1>
                    <h2>Create your first series</h2>
                    <Link to="/dashboard/upload/comic"><button className="comic_btn">Comic</button></Link>
                    <button className="novel_btn">Novel</button>
                </div>
                <div className="index_body_right">
                    <div className="komiki_insider">
                        <div className="heading">
                            <p>New [Komiki Insider]</p>
                        </div>
                        <div className="content">
                            <p>Come join the Tapas Staff for our<br/> NEW [Tapas Insider] Your Tapas<br/> Valentine 💖 Enter for a chance to<br/> be one of TEN lucky winners of<br/> 5,000 bonus ink 💖 Find your<br/> Valentine today!</p>
                            <a href=""><span>Read more here!</span></a>
                        </div>
                    </div>
                    <div className="milestones">
                        <div className="heading">
                            <p>Milestones</p>
                        </div>
                        <div className="content">
                            <p>Get Started</p>
                            <ul>
                                <li>Create a series</li>
                                <li>Add your first episode</li>
                                <li>Add or schedule your next episode</li>
                                <li>Get 25 subscribers</li>
                            </ul>
                        </div>
                    </div>
                    <div className="help">
                        <div className="heading">
                            <p>Help</p>
                        </div>
                        <div className="content">
                            <p>Other questions? <span>See all help topics</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
      </>
  );
}

export default Dashboard;
