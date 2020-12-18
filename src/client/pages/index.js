/** @jsx jsx */

import { jsx } from '@emotion/core'
import Styles from '../styles/index.js'

import { FiTwitter, FiInstagram } from "react-icons/fi";
import {  FaApple, FaAndroid } from "react-icons/fa";

const Home = () => (
  <div css={Styles.container}>
    <section css={Styles.banner}>
      <header css={Styles.bannerHeader}>
        <div css={Styles.bannerHeaderImgWrapper}>
          <img css={Styles.bannerHeaderImg} src="../../static/iphoneMockT.png" />
        </div>
        <nav css={Styles.nav}>
          {/*<div css={Styles.navItem}>Home</div>
          <div css={Styles.navItem}>About</div>
          <div css={Styles.navItem}>Privacy</div>
          <div css={Styles.navItem}>Terms</div>*/}
        </nav>
      </header>
      <div css={Styles.bannerContainer}>
        <h1 css={Styles.bannerTitle}>App Name</h1>
        <div css={Styles.bannerSubTitle}>App Slogan</div>
        <div css={Styles.bannerOptions}>
          <div css={Styles.bannerButton}>
            <div css={Styles.buttonIcon}>
              <FaApple size={32}/>
            </div>
            <div css={Styles.buttonContent}>
              <div css={Styles.buttonSubTitle}>Download from</div>
              <div css={Styles.buttonTitle}>App Store</div>
            </div>
            <div css={Styles.buttonQR}></div>
          </div>
          <div css={Styles.bannerButton}>
            <div css={Styles.buttonIcon}>
              <FaAndroid size={32}/>
            </div>
            <div css={Styles.buttonContent}>
              <div css={Styles.buttonSubTitle}>Download from</div>
              <div css={Styles.buttonTitle}>Google Play</div>
            </div>
            <div css={Styles.buttonQR}></div>
          </div>
        </div>
        <div css={Styles.shareOptions}>

        </div>
      </div>
      <div css={Styles.bannerFooter}>
        <img css={Styles.bannerFooterImg} src="../../static/iphoneMockT.png" />
      </div>
    </section>

    <section css={Styles.darkMode}>
      <div css={Styles.darkModeWrapper}>
        <div css={Styles.darkModeContent}>
          <h3 css={Styles.sectionTitleDark}>Section Title</h3>
          <div css={Styles.sectionSubTitleDark}>Information regarding this section and its features</div>
        </div>
        <div css={Styles.darkModeImage}>
          <img src="../../static/iphoneMockT.png" />
        </div>
        <div css={Styles.darkModeContent}></div>
      </div>
    </section>

    <section css={Styles.experiences}>
      <div css={Styles.sectionTitle}>Enjoy the Experience Redefined</div>
      <div css={Styles.expItems}>
        <div css={Styles.expItem}>
          <div css={Styles.expImage}>
            <img src="../../static/phone-reader.png" />
          </div>
          <div css={Styles.expItemTitle}>Distraction Free</div>
          <div css={Styles.expItemContent}></div>
        </div>
        <div css={Styles.expItem}>
          <div css={Styles.expImage}>
            <img src="../../static/phone-reader.png" />
          </div>
          <div css={Styles.expItemTitle}>Create Topics</div>
          <div css={Styles.expItemContent}></div>
        </div>
        <div css={Styles.expItem}>
          <div css={Styles.expImage}>
            <img src="../../static/phone-reader.png" />
          </div>
          <div css={Styles.expItemTitle}>Receive Feedback</div>
          <div css={Styles.expItemContent}></div>
        </div>
      </div>
      <div css={Styles.securityBlock}>
        <h2 css={Styles.securityTitle}></h2>
        <div css={Styles.securitySubTitle}></div>
        <div css={Styles.securityImage}></div>
      </div>
    </section>
    <section css={Styles.addOns}>
      <div css={Styles.addOnWrapper}>
        <div css={Styles.addOnContent}>
          <h1 css={Styles.sectionTitle}>Create Topical Categories</h1>
          <h2 css={Styles.sectionSubTitle}></h2>
        </div>
        <div css={Styles.addOnBlocksContainer}>
          <div css={Styles.addOnBlock}></div>
          <div css={Styles.addOnBlock}></div>
          <div css={Styles.addOnBlock}></div>
          <div css={Styles.addOnBlock}></div>
          <div css={Styles.addOnBlock}></div>
          <div css={Styles.addOnBlock}></div>
        </div>
        <div css={Styles.addOnImage}>
          <img src="../../static/iphoneMockT.png" />
        </div>
      </div>
    </section>
    <section css={Styles.devAndDesign}>
      <div css={Styles.devAndDesignWrapper}>
        <div css={Styles.devAndDesignImage}>
          <img src="../../static/menu.png" />
        </div>
        <div css={Styles.devAndDesignContent}>
          <h3 css={Styles.sectionTitle}>Synchronise your Browsing</h3>
          <div css={Styles.sectionSubTitle}>Share your history and topics across different devices</div>
        </div>
      </div>
    </section>
    <section css={Styles.tabletFeature}>
      <div css={Styles.tabletContent}>
        <h3 css={Styles.sectionTitle}>Access the Dashboard</h3>
        <div css={Styles.sectionSubTitle}>Explore your Browsing Habits and the habits of everyone around the world.</div>
      </div>
      <div css={Styles.tabletFeatureImage}>
         <img src="../../static/padMockupT.png" />
      </div>
    </section>
    <footer css={Styles.footer}>
      <div css={Styles.footerWrapper}>
        <div css={Styles.footerAbout}>
          <div css={Styles.footerLogo}></div>
          <div css={Styles.footerName}>App Name</div>
        </div>
        <div css={Styles.footerContent}>
          <div css={Styles.footerSocial}>
            <a href="/"><FiTwitter size={32} color="#AAAAAA" /></a>
            <a href="/"><FiInstagram size={32} color="#AAAAAA" /></a>
          </div>
          <span>contact@appsite.com</span>
          <span>App Site | All Rights Reserved 2020</span>
        </div>
      </div>
    </footer>
  </div>
)

export default Home
