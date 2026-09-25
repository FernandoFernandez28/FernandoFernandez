import styles from './Carousel.module.css';
import Image from 'next/image';
import useMeasure from 'react-use-measure'
import { motion, animate, useMotionValue } from 'framer-motion'
import { useEffect } from 'react';

const imageStyle ={
    objectFit: 'cover',
    width: '100%',
    height: '100%',
}

export function Carousel({images}) {
    let [ref, { width }] = useMeasure();

    const xTranslation = useMotionValue(0);
    console.warn(images.length)

    useEffect(() =>{
        let controls;
        let finalPosition = -width/2 - images.length ;

        controls = animate(xTranslation, [0, finalPosition], {
            ease: 'linear',
            duration: 12,
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 0,
        });

        return controls.stop;
    }, [xTranslation, width, images]);

    return (
        <div className={styles.container}>
            <motion.div className={styles.group} ref={ref} style={{x: xTranslation}}>
            {[...images, ...images].map((image, id) => {
                return (
                    <div className={styles.card} key={id}>
                        <Image overrideSrc={image.path} key={image.id} alt={image.title} fill />
                    </div>
                )
            })}
            </motion.div>
        </div>
    )
}