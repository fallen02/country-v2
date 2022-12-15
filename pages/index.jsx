import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Background from '../components/Background'
import Card from '../components/Card'
import HomeLoader from '../components/HomeLoader'
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
    setLoad(true)
  }, [])

  
  return(
    
      <div className="">
      <Head>
        <title>Countries</title>
      </Head>
      <Background/>
      <div className= {styles.container}>
          <div className= {styles.cards}>
            {data.map(country => (
              <Link href={`/${country.name.common}`} key={country.name.common}>
              <Card country = {country}/>
              </Link>
            ))}            
          </div>
       </div>
    </div>
  )
}
