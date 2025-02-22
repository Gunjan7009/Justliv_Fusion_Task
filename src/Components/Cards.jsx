import React from 'react'
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import LaptopImag from '../assets/laptop.png'
import ChidImage from '../assets/child.png'
import MotherImage from '../assets/mother1.png'
import styles from './Cards.module.css'

const Cards = () => {
    const features = [
        {
            title: "Custom Calendar",
            description:
                "Our Custom Activities Calendar instantly creates a personalized activity schedule based on your preferences, budget, and location. No more endless searching or juggling calendars.",
            image:LaptopImag, 
        },
        {
            title: "Tailored to Your Interests",
            description:
                "Filters let you choose activities by age, category, price, and more. Social features help you sync schedules with friends and see what they’re attending.",
            image: ChidImage, 
        },
        {
            title: "Stress-Free Bulk Booking",
            description:
                "Book all your child’s activities in just a few clicks. Our platform handles the details so you don’t have to.",
            image:MotherImage
        },
    ];

    return (
        <div className={styles.CardSection}>
            <h2 className={styles.heading}>Why JustLiv?</h2>
            <div className={styles.cardContainer}>
                {features.map((feature, index) => (
                    <div key={index} className={styles.card}>
                        <span className={styles.icon}><AutoAwesomeOutlinedIcon /></span>
                        <h3 className={styles.cardTitle}>{feature.title}</h3>
                        <p className={styles.cardDescription}>{feature.description}</p>
                        <img src={feature.image} alt={feature.title} className={styles.cardImage} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cards
