import React from 'react'
import styles from "./Menu.module.css"
import FoodData from '../Data/FoodData';
function Menu() {
  return (
    <div id='Menu'>
    <div className={styles.main}>
        <h1 className={styles.h1}>Menu</h1>
        <div className={styles.hello}>
             {
            FoodData.map((item, i) => (
                <div key={i}>
                    <div className={styles.container}>
                        <img style={{ height: '200px', width: '300px' }} src={item.img} alt="Delicious Pizza" className={styles.img} />
                        <h2 className={styles.h2}>{item.name}</h2>
                       
                        <button className={styles.buttons}>Add</button>
                    </div>
                </div>

))
        }</div>
  </div>  </div>

  )
}

export default Menu