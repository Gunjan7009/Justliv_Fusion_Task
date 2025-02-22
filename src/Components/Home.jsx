import React, { useState, useEffect } from 'react';
import HeroImage from '../assets/hero.png';
import LogoImage from '../assets/logo1.png';
import HeroMobile from '../assets/heroMobile.png';
import FmailyImage from '../assets/family.png';
import GirlsImage from '../assets/girls.png';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import styles from './Home.module.css';
import Cards from './Cards';
import Work from './Work';
import Footer from './Footer';

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 430);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 430);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div className={styles.hero}>
        <div>
          {isMobile && <img src={LogoImage} alt="Logo" className={styles.logoImage} />}
          <img src={isMobile ? HeroMobile : HeroImage} alt="Hero" className={styles.heroImage} />
          <div className={styles.foverlay}>
            {isMobile && <h2 className={styles.mtitle}>
              Your Child's Perfect  <br /> Schedule in Just a Few Clicks
            </h2>}
            <h2 className={styles.title}>
              Your Child's Perfect Schedule <br /> in Just a Few Clicks
            </h2>
            <p className={styles.subtitle}>Less Planning, More Living.</p>
            <button className={styles.waitlistButton} onClick={() => document.getElementById('waitingSection').scrollIntoView({ behavior: 'smooth' })}><AutoAwesomeOutlinedIcon /> Join the waiting list</button>
          </div>
        </div>
      </div>
      <Cards />
      <Work />
      <div className={styles.missionSection}>
        <h2 className={styles.headingone}>Our Mission <span className={styles.hearts}>💕</span></h2>
         {isMobile && <div>
        <p className={styles.mitext}>
          Parents need a simple way to find, book, and <br />track their kids' activities.
          Businesses need a better way to be found and to keep families coming back.
        </p>
        <span className={styles.mipurpose}>Our purpose is to</span>
        <p className={styles.mihighlight}>
          make parents' lives <strong><span style={{color:"#ff6699"}}>easier</span>,<br /><span style={{color:"#ff6699"}}> happier</span>, and <span style={{color:"#ff6699"}}>less stressful</span>.</strong>
        </p>
        <p className={styles.misubtext}>As parents and business owners, we get it.</p>
        </div>
        }
        <p className={styles.text}>
          Parents need a simple way to find, book, and track their kids' activities. <br />
          Businesses need a better way to be found and to keep families coming back.
        </p>
        <span className={styles.purpose}>Our purpose is to</span>
        <p className={styles.highlight}>
          make parents' lives <strong><span style={{color:"#ff6699"}}>easier</span>, <span style={{color:"#ff6699"}}>happier</span>, and <span style={{color:"#ff6699"}}>less stressful</span>.</strong>  make parents' lives <strong><span style={{color:"#ff6699"}}>easier</span>, <span style={{color:"#ff6699"}}>happier</span>, and <span style={{color:"#ff6699"}}>less stressful</span>.</strong>
        </p>
        <p className={styles.subtext}>As parents and business owners, we get it.</p>
        <img src={FmailyImage} alt="Family Camping" className={styles.missionImage} />
      </div>
      <div id="waitingSection" className={styles.waitingSection}>
        <img src={GirlsImage} alt="Background" className={styles.backgroundImage} />
        <div className={styles.overlay}>
          <h2 className={styles.headingtwo}>Ready to Simplify Your Life?</h2>
          {isMobile && <p className={styles.mtext}>
            Be the first to know when we launch! Join our <br />
            waiting list and
            get exclusive updates and early <br />access to our journey.
          </p>}
          <p className={styles.gtext}>
            Be the first to know when we launch! Join our waiting list and <br />
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
