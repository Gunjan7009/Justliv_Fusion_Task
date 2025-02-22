import React, { useEffect, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DownArrowImage from '../assets/downArrow.png'
import TwistedArrowImage from '../assets/twistedArrow.png'
import SkyImage from "../assets/sky.png";
import styles from "./Work.module.css";

const Work = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 430);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 430);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className={styles.WorkSection}>
      <div>
        <img src={SkyImage} alt="Hero" className={styles.SkyImage} />
        <div className={styles.stepsoverlay}>
          <h2 className={styles.workheading}>How it works</h2>

          <div className={styles.step}>
            <div className={styles.econ}>
              <SearchOutlinedIcon className={styles.icon} />
            </div>
            <div className={styles.details}>
              <h3>Browse</h3>
              {isMobile && <p className={styles.mtext}>Discover activities from our partner <br /> booking providers.</p>}
              <p className={styles.ntext}>Discover activities from our partner booking providers.</p>
            </div>
          </div>
          <img src={DownArrowImage} className={styles.down} />
          <div className={styles.step}>
            <div className={styles.econ}>
              <CalendarTodayOutlinedIcon className={styles.icon} />
            </div>

            <div className={styles.details}>

              <h3>Build</h3>
              {isMobile && <p className={styles.mtext}>Share your child’s interests,<br /> schedule, and preferences. Watch <br />
                as JustLiv creates the perfect <br /> calendar filled with activities.</p>}
              <p className={styles.ntext}>Share your child’s interests, schedule, and preferences.</p>
            </div>
          </div>
          <img src={TwistedArrowImage} className={styles.twisted} />
          <div className={styles.stepp}>
            <div className={styles.econ}>
              {" "}
              <FavoriteBorderIcon className={styles.icon} />
            </div>
            <div className={styles.details}>
              {" "}

              <h3>Book</h3>
              {isMobile && <p className={styles.mtext}>Finalize your selections with one click <br /> and enjoy peace of mind.</p>}
              <p className={styles.ntext}>
                Finalize your selections with one click and enjoy peace of mind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
