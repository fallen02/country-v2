import React from 'react'
import styles from '../styles/Card.module.css'
export default function Card({country}) {
  return (
        <div className= {styles.card}>
            {console.log(typeof(country))}
            <img src={country.flags.svg} alt="Flag"/>
            <h1>{country.name.common}</h1>
        </div>    
  )
}
