import React from 'react'
import styles from './SideNavbar.module.css'

function SideNavbar() {
  return (
    <div>
        <div className={styles.main}>
<img className={styles.img} src='data:image/png;base64,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'/>
        <div className={styles.headings}>
        <a href='#Home'>Home</a>
        <a href='#About'>About</a>
        <a href='#Menu'>Menu</a>
        <a href='#SignUp'>SignUp</a>
        </div>
        </div>
       
    </div>
  )
}

export default SideNavbar