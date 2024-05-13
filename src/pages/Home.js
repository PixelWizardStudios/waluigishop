import React from 'react'
import ImageSlider from '../actions/ImageSlider.js';
import Waluigi from "../images/waluigi.webp";
import bmw from "../images/bmwCheck.jpg";
import battery from "../images/batterySwap.webp";
import brakes from "../images/brakeService.webp";
import oil from "../images/oilChange.jpeg";
import spark from "../images/sparkplugService.jpeg";
import "../styles/Home.css";
import { useTranslation} from 'react-i18next';

function Home() {

    const { t, i18n } = useTranslation();

    const lngs = {
        en: {nativeName: 'English'},
        es: {nativeName: 'Español'}
    }

    const items = [
        {image: bmw, text: "General Inspection"},
        {image: battery, text: "Battery Service"},
        {image: oil, text: "Oil Change"},
        {image: brakes, text: "Brake Service"},
        {image: spark, text: "Tune-Ups"}
    ]
    
  return (
    <>

        <div id="topPage">
            <div id="leftSideTitle">

                <img src={Waluigi} alt="waluigi logo" id="waluigi"/>

            </div>

            <div id="rightSideTitle">

                <h1 id="title"> El Paisa
                <br/> Waluigi</h1>

            </div>

        </div>

        <div id="midPage">
        <div className="top-right-button">
          {Object.keys(lngs).map((lng) => (
            <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal', backgroundColor: 'transparent', border: 'none', color: 'aliceblue'}} type="submit" onClick={() => i18n.changeLanguage(lng)}>
              {lngs[lng].nativeName}
            </button>
          ))}
        </div>

 
            <h1> {t('description.part1')} </h1>
            <ImageSlider items={items} interval={3000} />

        </div>
    

        <div id="bottomPage">
            <div id="topBottom">
                <h2> {t('description.part2')} </h2>

                <p> {t('description.part3')} </p>
            </div>

            <div id="bottomTop">

                <div id="contactUs">
                    <h3> {t('description.part4')} </h3>
                    <p>Phone: 303-123-1234</p>
                    <p>Address: 123 Mushroom Way, <br/>Denver, Colorado 80219</p>
                </div>

                <div id="location">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27187.602894875925!2d-104.99025177178682!3d39.73923582018092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b80aa234c6a21%3A0x5a0b44db8e3e8d3f!2sDenver%2C%20CO!5e0!3m2!1sen!2sus!4v1708479346008!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Google Maps"></iframe>

                </div>
            </div>

        </div>
    </>
  )
}

export default Home;