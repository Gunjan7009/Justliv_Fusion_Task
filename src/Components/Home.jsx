import React from 'react'
import HeroImage from '../assets/hero.png'
// import LogoImage from '../assets/logo1.png'
import FmailyImage from '../assets/family.png'
import GirlsImage from '../assets/girls.png'
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import styles from './Home.module.css'
import Cards from './Cards'
import Work from './Work'
import Footer from './Footer';

const Home = () => {
  return (
    <>
    <div className={styles.hero}>
      <img src={HeroImage} alt="Hero" className={styles.heroImage} />
      <div className={styles.foverlay}>
        {/* <img src={LogoImage} alt="JustLiv Logo" className={styles.logo} /> */}
        <h2 className={styles.title}>
          Your Child's Perfect Schedule <br /> in Just a Few Clicks
        </h2>
        <p className={styles.subtitle}>Less Planning, More Living.</p>
          <button className={styles.waitlistButton}><AutoAwesomeOutlinedIcon /> Join the waiting list</button>
      </div>
    </div>
    <Cards />
    <Work />
      <div className={styles.missionSection}>
        <h2 className={styles.heading}>Our Mission <span className={styles.hearts}>💕</span></h2>
        <p className={styles.text}>
          Parents need a simple way to find, book, and track their kids' activities. <br />
          Businesses need a better way to be found and to keep families coming back.
        </p>
        <p className={styles.purpose}>Our purpose is to</p>
        <p className={styles.highlight}>
          make parents' lives <strong>easier, happier, and <span className={styles.stress}>less stressful</span>.</strong>
        </p>
        <p className={styles.subtext}>As parents and business owners, we get it.</p>
        <img src={FmailyImage} alt="Family Camping" className={styles.missionImage} />
      </div>
      <div className={styles.waitingSection}>
        <img src={GirlsImage} alt="Background" className={styles.backgroundImage} />
        <div className={styles.overlay}>
          <h2 className={styles.heading}>Ready to Simplify Your Life?</h2>
          <p className={styles.text}>
            Be the first to know when we launch! Join our waiting list and
            get exclusive updates and early access to our journey.
          </p>
          <button className={styles.waitingButton}>
            <AutoAwesomeOutlinedIcon className={styles.icon} /> Join the waiting list
          </button>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
