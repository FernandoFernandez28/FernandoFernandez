import styles from './Cards.module.css'
import Image from 'next/image'

export function Cards() {
    return(
        <div className={styles.parent}>
            <div className={styles.card}>
                <img src='/images/projects/soundbooth/sbTV.jpg' className={styles.imageStyle} alt={'test'}/>
                <div className={styles.cardContent}>
                        <h1>Soundbooth</h1>
                        <p>A multi-platform music software that lets you collaborate with others in real-time </p>
                </div>
            </div>
            <div className={styles.card}>
                <img src='/images/projects/tvgaming/partypokerTV.jpg' className={styles.imageStyle} alt={'test'}/>
                <div className={styles.cardContent}>
                        <h1>TV Gaming</h1>
                        <p>The evolution of TV Gaming Proof of Concept </p>
                </div>
            </div>
            <div className={styles.card}>
                <img src='/images/projects/digiscope/cover.png' className={styles.imageStyle} alt={'test'}/>
                <div className={styles.cardContent}>
                    <h1>DigiScope</h1>
                    <p>A doctor-facing webapp tool for chest sound detection and diagnosis</p>
                </div>
            </div>
            <div className={styles.card}>
                <img src='/images/projects/cave-escape/cover.png' className={styles.imageStyle} alt={'test'}/>
                <div className={styles.cardContent}>
                    <h1>Cave Escape!</h1>
                    <p>Pixel-art 2D Platformer built with Unity</p>
                </div>
            </div>
            <div className={styles.card}>
                <img src='/images/projects/journey-through-serenthia/cover.png' className={styles.imageStyle} alt={'test'}/>
                <div className={styles.cardContent}>
                    <h1>Journey Through Serenthia</h1>
                    <p>Pixel-art 2D story built with Unity</p>
                </div>
            </div>
            <div className={styles.card}>
                <img src='/images/projects/tetrecs/cover.png' className={styles.imageStyle} alt={'test'}/>
                <div className={styles.cardContent}>
                    <h1>TetrECS</h1>
                    <p>A Tetris-inspired game with a timer on the clock!</p>
                </div>
            </div>
            <div className={styles.card}>
                <img src='/images/projects/hydroponics-system/cover.png' className={styles.imageStyle} alt={'test'}/>
                <div className={styles.cardContent}>
                    <h1>Automated Hydroponics System</h1>
                    <p>Optimising water-based agriculture with automated control systems</p>
                </div>
            </div>
            <div className={styles.card}>
                <img src='/images/projects/ampi/cover.png' className={styles.imageStyle} alt={'test'}/>
                <div className={styles.cardContent}>
                        <h1>Ampi</h1>
                        <p>A bandmate match-making app</p>
                </div>
            </div>

            <div className={styles.card}>
                <img src='/images/projects/biometrics/cover.png' className={styles.imageStyle} alt={'test'}/>
                <div className={styles.cardContent}>
                        <h1>Biometrics</h1>
                        <p>Building a machine learning model that detects subjects based on their silhouette</p>
                </div>
            </div>
            
            
        </div>
    )
}