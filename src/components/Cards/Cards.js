import styles from './Cards.module.css'
import Image from 'next/image'

export function Cards() {
    return(
        <div className={styles.parent}>
            <div className={styles.card}>
                <img src='/images/projects/soundbooth/sb.JPEG' className={styles.imageStyle} alt={'test'}/>
                <div className={styles.cardContent}>
                        <h1>Soundbooth</h1>
                        <p>A multi-platform music software that lets you collaborate with others in real-time </p>
                </div>
            </div>
            <div className={styles.card}>
                <img src='/images/projects/soundbooth/sb.JPEG' className={styles.imageStyle} alt={'test'}/>
            </div>
            <div className={styles.card}>
                <img src='/images/projects/soundbooth/sb.JPEG' className={styles.imageStyle} alt={'test'}/>
            </div>
            <div className={styles.card}>
                <img src='/images/projects/soundbooth/sb.JPEG' className={styles.imageStyle} alt={'test'}/>
            </div>
            <div className={styles.card}>
                <img src='/images/projects/soundbooth/sb.JPEG' className={styles.imageStyle} alt={'test'}/>
            </div>
            <div className={styles.card}>
                <img src='/images/projects/soundbooth/sb.JPEG' className={styles.imageStyle} alt={'test'}/>
            </div>
            <div className={styles.card}>
                <img src='/images/projects/soundbooth/sb.JPEG' className={styles.imageStyle} alt={'test'}/>
            </div>
        </div>
    )
}