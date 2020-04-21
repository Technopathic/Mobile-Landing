/** @jsx jsx */

import { jsx } from '@emotion/core'
import Styles from '../styles/index.js'

const Home = () => (
  <div>
    <section css={Styles.banner}>
      <header css={Styles.header}>
        <nav css={Styles.nav}>
          <div css={Styles.navItem}>Home</div>
          <div css={Styles.navItem}>About</div>
          <div css={Styles.navItem}>Privacy</div>
          <div css={Styles.navItem}>Terms</div>
        </nav>
      </header>
      <div css={Styles.bannerContainer}>
        <h1 css={Styles.bannerTitle}>Indra</h1>
        <h2 css={Styles.bannerSubtitle}>An Arcadian Web Browser</h2>
        <div css={Styles.bannerOptions}>
          <div css={Styles.bannerButton}>
            <div css={Styles.buttonIcon}></div>
            <div css={Styles.buttonContent}>
              <div css={Styles.buttonSubTitle}>Download on the</div>
              <div css={Styles.buttonTitle}>App Store</div>
            </div>
            <div css={Styles.buttonQR}></div>
          </div>
          <div css={Styles.bannerButton}>
            <div css={Styles.buttonIcon}></div>
            <div css={Styles.buttonContent}>
              <div css={Styles.buttonSubTitle}>Download on</div>
              <div css={Styles.buttonTitle}>Google Play</div>
            </div>
            <div css={Styles.buttonQR}></div>
          </div>
        </div>
        <div css={Styles.shareOptions}>

        </div>
      </div>
      <div></div>
    </section>

    <section css={Styles.darkMode}>
      <div css={Styles.darkModeContent}></div>
      <div css={Styles.darkModeImage}></div>
      <div></div>
    </section>

    <section css={Styles.experiences}>
      <div css={Styles.expTitle}>Enjoy the Experience Redefined</div>
      <div css={Styles.expItems}>
        <div css={Styles.expItem}>
          <div css={Styles.expImage}></div>
          <div css={Style.expItemTitle}>Distraction Free</div>
          <div css={Styles.expItemContent}></div>
        </div>
        <div css={Styles.expItem}>
          <div css={Styles.expImage}></div>
          <div css={Style.expItemTitle}>Create Topics</div>
          <div css={Styles.expItemContent}></div>
        </div>
        <div css={Styles.expItem}>
          <div css={Styles.expImage}></div>
          <div css={Style.expItemTitle}>Receive Feedback</div>
          <div css={Styles.expItemContent}></div>
        </div>
      </div>
      <div css={Styles.securityBlock}>
        <h2 css={Styles.securityTitle}></h2>
        <div css={Styles.securitySubtitle}></div>
        <div css={Styles.securityImage}></div>
      </div>
    </section>

    <section css={Styles.overlayFeature}>
      <div css={Styles.overlayContent}>Categorical Overlay Topic System</div>
      <div css={Styles.overlayImage}></div>
    </section>
    <section css={Styles.addOns}>
      <div css={Styles.addOnContent}>
        <h1 css={Styles.sectionTitle}>Synchronise your Browsing</h1>
        <h2 css={Styles.sectionSubTitle}>Share your history and topics across different devices</h2>
      </div>
      <div css={Styles.addOnImage}></div>
    </section>
    <section css={Styles.developAndDesign}>
      <div css={Styles.devAndDesignImage}></div>
      <div css={Styles.devAndDesignContent}></div>
    </section>
    <section css={Styles.tabletFeature}>
      <div css={Styles.sectionTitle}>Access the Dashboard</div>
      <div css={Styles.sectionSubTitle}>Explore your Browsing Habits and the habits of everyone around the world.</div>
      <div css={Styles.tabletFeatureImage}></div>
    </section>
    <footer css={Styles.footer}></footer>
  </div>
)

export default Home
