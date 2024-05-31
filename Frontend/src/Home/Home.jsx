import React from 'react'
import styles from './Home.module.css'
function Home() {
  return (
	<div id='Home'>
    <div className={styles.main}>
       <div className={styles.slider}>
					  <figure>
						    <img src="slider1.png"/>
						    <img src="slider2.png"/>
						    <img src="Slider3png.png"/>
					  </figure>
				</div>
    </div>
	</div>
  )
}

export default Home