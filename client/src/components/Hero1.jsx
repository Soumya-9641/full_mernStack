import React from 'react'
import styles from "../style"
import Hero from './Hero'
const Hero1 = () => {
  return (
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Hero/>
            </div>
          </div>
  )
}

export default Hero1