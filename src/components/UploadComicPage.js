import React from 'react'
import './../css/UploadComicPage.css';
import Header from './Header';
import Footer from './Footer';
import {Link} from 'react-router-dom';
import Sidebar from './Sidebar';




function UploadComicPage() {
  return (
      <>
        <Header />
        <div className="dashboard_blank_sec">

        </div>
        <div className="uploadcomicpage_body">
            <Sidebar />
            <div className="upload_body">
                <div className="comic_form">
                    <div className="title">
                        <div className="label">
                            <label className="label">Title</label>
                        </div>
                        <div className="control">
                            <input
                                className="input"
                                type="text"
                            />
                        </div>
                    </div>
                    <div className="url">
                        <div className="label">
                            <label className="label">Title</label>
                        </div>
                        <div className="control">
                            <input
                                className="input"
                                type="text"
                            />
                        </div>
                    </div>
                    <div className="thumb_desc">
                        <div className="thumbnail">
                            <div className="label">
                                <label>Thumbnail</label>
                            </div>
                            <div className="thumb_img">
                                
                            </div>
                        </div>
                        <div className="desc">
                        <div className="label">
                                <label>Description</label>
                            </div>
                            <div className="desc_img">
                                
                            </div>
                        </div>
                    </div>
                    <div className="book_cover">
                        <div className="label">
                            <label>Book Cover</label>
                        </div>
                        <div className="book_cover_upload">
                            <div className="book_cover_img">
                                
                            </div>
                            <div className="info">
                                <h5><img src="./Images/info.svg" />Check on book cover</h5>
                                <p><span>Series title</span> must be included on your book cover. <br/><span>Learn more</span></p>
                                <div className="cover_demo">
                                    <div className="cover_demo_first">

                                    </div>
                                    <div className="cover_demo_sec">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>    
                    <div className="series_banner">
                        <div className="label">
                            <label>Series Banner <span>(Optional)</span></label>
                        </div>
                        <div className="series_banner_img">

                        </div>
                    </div>
                    <div className="series_banner_link">
                        <div className="label">
                            <label>Series Banner link <span>(Optional)</span></label>
                        </div>
                        <p>If you have a series banner, this url will be linked to your series banner.</p>
                        <input className="input" />
                    </div>
                    <div className="custom_ad_banner">
                        <div className="label">
                            <label>Custom ad banner <span>(Optional)</span></label>
                        </div>
                        <p>This ad will appear below each of your episodes.</p>
                        <div className="custom_ad_img">

                        </div>
                    </div>
                    <div className="customad_banner_link">
                        <div className="label">
                            <label>Series Banner link <span>(Optional)</span></label>
                        </div>
                        <p>If you have a series banner, this url will be linked to your series banner.</p>
                        <input className="input" />
                    </div>
                    <div className="genre">
                        <div className="label">
                            <label>Genre</label>
                        </div>
                        <p>Select up to 3 genres</p>
                        <ul>
                            <li>Romance</li>
                            <li>Fantasy</li>
                            <li>Action</li>
                            <li>Drama</li>
                            <li>BL</li>
                            <li>GL</li>
                            <li>LGBTQ+</li>
                            <li>Comedy</li>
                        </ul>
                        <ul>
                            <li>Slice of Life</li>
                            <li>Mystery</li>
                            <li>Science Fiction</li>
                            <li>Gaming</li>
                            <li>Horror</li>
                        </ul>
                    </div>
                    <div className="main_genre">
                        <div className="label">
                            <label>Mian Genre</label><br/>
                            <select className="genre_select">
                                <option>None</option>
                            </select>
                        </div>
                    </div>
                    <div className="tags">
                        <div className="label">
                            <label>Tags <span>(Optional)</span></label>
                        </div>
                        <p>If you have a series banner, this url will be linked to your series banner.</p>
                        <input className="input" />
                    </div>
                    <div className="website">
                        <div className="label">
                            <label>Website <span>(Optional)</span></label>
                        </div>
                        <p>If you have a series banner, this url will be linked to your series banner.</p>
                        <input className="input" />
                    </div>
                    <div className="descending">
                        <div className="label">
                            <label>Descending order</label>
                        </div>
                        <h4>New readers will start from your most recent episode.</h4>
                        <p>Turning on descending order is especially beneficial for short gag comics that have no continuing story.<br/> For long form comics that have an ongoing storyline we recommend not using this feature.</p>
                    </div>
                </div>
                <div className="index_body_right">

                </div>
            </div>
        </div>
        <Footer />
      </>
  );
}

export default UploadComicPage;
