import { Link } from "react-router-dom";
import styles from '../styles/Home.module.css';
import { Carousel } from "../components/Carousel/Carousel";
import { getLogoSVGs, getProfiles } from "../data/ImageData";
import Image from "next/image";
import { Cards } from "../components/Cards/Cards";

export function Home(){
    return (
    <div className="App">
      <header className="App-header"> 

        <div className={styles.nameDesc}>
            <h1>
            FERNANDO <br/> FERNANDEZ
            </h1>
            <p className={styles.nameDescItem}> Software Engineer with a degree in Computer Science (MEng). I use my programming skills as an outlet for my creativity.
                I design and build platforms, and believe in bridging art and technology (NO GENERATIVE AI) for accessibility and scalibility from front to end.
            </p>
        </div>

                {/* <div>
          <Image overrideSrc={getProfiles()[1].path} style={{width: '100%', borderRadius: '20px'}}/>
        </div> */}
       
        {/* <Link to='/aboutme'>About Me</Link> */}
      </header>
      <div style={{overflow: 'hidden'}}>
        <Carousel images={getLogoSVGs()}/>
      </div>
      <Cards/>
    </div>
  );
}