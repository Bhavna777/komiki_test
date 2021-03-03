import React from 'react'
import './../css/Home.css'
import Header from './Header'
import Footer from './Footer'
import Card from './HomeCard'
import ContentCards from './ContentCards'

function Home() {
    return (
      <div className="Home">
        <Header />
        <section className="First">
            <div className="content">
                <h1>Bite-Sized stories on the go</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. <br /> Eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button>Start reading now!</button>
            </div>
            <div className="penguins1">
                <img src="./Images/penguins1.png" alt="Image Not Found" />
            </div>
        </section>
        <section className="Second">
          <div className="content">
            <h1>Bite-Sized stories on the go</h1>
            <p>See All</p>
          </div>
          <div className="row"> 
            <div className="column">
              <Card src="./Images/Img-1.png" />
            </div>
            <div className="column">
              <Card src="./Images/Img-2.png" />
            </div>
            <div className="column">
              <Card src="./Images/Img-3.png" />
            </div>
            <div className="column">
              <Card src="./Images/Img-4.png" />
            </div>
          </div>
        </section>
        <ContentCards />
        <section className="Third">
          <div className="content">
              <h1>Publish with Komiki</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br /> sed do. Eiusmod tempor incididunt ut labore et dolore<br /> magna aliqua.</p>
              <button>Learn how we help creators</button>
          </div>
          <div className="penguins2">
              <img src="./Images/penguins2.png" alt="Image Not Found" />
          </div>
        </section>
        <section className="Forth">
          <h1>Press Highlights</h1>
          <main class="grid">
            <article>
              <img src="./Images/G1.png" alt="Sample photo" />
              <div class="text">
                <img src="./Images/GP.svg" />
                <p>THE BEGINNING AFTER THE END RETURNS TO KOMIKI IN JANUARY 2021</p>
                <p>THE BEGINNING AFTER THE END </p>
              </div>
            </article>
            <article>
              <img src="./Images/G2.png" alt="Sample photo" />
              <div class="text">
                <img src="./Images/GP.svg" />
                <p>THE BEGINNING AFTER THE END RETURNS TO KOMIKI IN JANUARY 2021</p>
                <p>THE BEGINNING AFTER THE END </p>
              </div>
            </article>
            <article>
              <img src="./Images/G3.png" alt="Sample photo" />
              <div class="text">
                <img src="./Images/GP.svg" />
                <p>THE BEGINNING AFTER THE END RETURNS TO KOMIKI IN JANUARY 2021</p>
                <p>THE BEGINNING AFTER THE END </p>
              </div>
            </article>
          </main>
          <div className="content">
            <h1>Press Highlights</h1>
            <p>See All</p>
          </div>
          <div className="PressH">
            <div className="Highlights">
              <p>Tapamon and Friends Winter Wonderland Art Challenge Submissions ❄️</p>
              <p>Dec 21, 2020</p>
            </div>
            <div className="Highlights">
              <p>Tapamon and Friends Winter Wonderland Art Challenge Submissions ❄️</p>
              <p>Dec 21, 2020</p>
            </div>
            <div className="Highlights">
              <p>Tapamon and Friends Winter Wonderland Art Challenge Submissions ❄️</p>
              <p>Dec 21, 2020</p>
            </div>
          </div>
        </section>
        <section class="Fifth">
          <div class="content">
              <h1>Download to read stories wherever you go</h1>
          </div>
          <div class="Phone">
              <img src="./Images/Phone.png" />
          </div>
        </section>
        <Footer />
      </div>
    );
  }
  
export default Home;