import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DownArrowImage from '../assets/downArrow.png'
import TwistedArrowImage from '../assets/twistedArrow.png'
import SkyImage from "../assets/sky.png";
import styles from "./Work.module.css";

const Work = () => {
  return (
    <div className={styles.WorkSection}>
      <img src={SkyImage} alt="Hero" className={styles.SkyImage} />
      <div className={styles.stepsoverlay}>
        <h2>How it works</h2>
        <div className={styles.step}>
          <div className={styles.econ}>
            <SearchOutlinedIcon className={styles.icon} />
          </div>
          <div className={styles.details}>
            <h3>Browse</h3>
            <p>Discover activities from our partner booking providers.</p>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles.econ}>
            <CalendarTodayOutlinedIcon className={styles.icon} />
          </div>

          <div className={styles.details}>
            <img src={DownArrowImage} className={styles.down} />
            <h3>Build</h3>
            <p>Share your child’s interests, schedule, and preferences.</p>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles.econ}>
            {" "}
            <FavoriteBorderIcon className={styles.icon} />
          </div>
          <div className={styles.details}>
            {" "}
                      <img src={TwistedArrowImage}  className={styles.twisted} />
            <h3>Book</h3>
            <p>
              Finalize your selections with one click and enjoy peace of mind.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
