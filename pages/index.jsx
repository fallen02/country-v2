import Head from 'next/head'
import { useEffect, useState } from 'react'
import Background from '../components/Background'
import Card from '../components/Card'
import styles from '../styles/Card.module.css'



export default function Home() {

  const [data, setData] = useState([])
  const [load, setLoad] = useState(false)

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => {
      setData(data)
    })
  }, [])

  return (
    <div className="">
      
      <Background/>
      <div className= {styles.container}>
          <div className= {styles.cards}>
            {data.map(country => (
              <Card key={country.name.common}  country = {country}/>
            ))}            
          </div>
       </div>
    </div>
  )
}
