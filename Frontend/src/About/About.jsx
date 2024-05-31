import React from 'react'
import styles from './About.module.css'
import Roundsymbol from '../RoundSymbol/Roundsymbol'
function About() {
  return (
    <div id='About'>
       <div className={styles.main}>
       <Roundsymbol/>
       <h4 className={styles.h4}>Our Histroy</h4>
       <h1 className={styles.h1}>Welcome to{<br/>} Foholic {<br/>}Restaurant</h1>
<p className={styles.p}>Food is any substance consumed by an organism for {<br/>}nutritional support. Food is usually of plant, animal, {<br/>}or fungal origin and contains essential nutrients such{<br/>} as carbohydrates, fats, proteins, vitamins, or minerals.{<br/>}{<br/>} The substance is ingested by an organism and assimilated by the organism's cells to provide energy, maintain life, or stimulate growth. Different species of{<br/>} animals have different feeding behaviours that satisfy{<br/>} the needs of their metabolisms and have evolved to fill{<br/>} a specific ecological niche within specific geographical {<br/>}contexts.</p>
<img  className={styles.img} src='Stand.png'/>
            </div>  

    </div>
  )
}

export default About