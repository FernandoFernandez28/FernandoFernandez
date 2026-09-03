import { Link } from "react-router-dom";
import styles from '../styles/Home.module.css';

export function Home(){
    return (
    <div className="App">
      <header className="App-header">
        <div>
            <h1 className={styles.h1}>
            FERNANDO FERNANDEZ
            </h1>
            <p style={{textAlign: 'left'}}> Software Engineer with a degree in Computer Science (MEng). I use my programming skills as an outlet for my creativity.
                I design and build platforms, and believe in bridging art and technology (NO AI) for accessibility and scalibility from front to end.
            </p>
        </div>
        <Link to='/aboutme'>About Me</Link>
      </header>
    
    </div>
  );
}