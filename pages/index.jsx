import Head from 'next/head'
import Link from 'next/link'
import Background from '../components/Background'
import Card from '../components/Card'
import { Input, sharedVisuallyHidden } from '@nextui-org/react';
import styles from '../styles/Card.module.css'
import { useMemo, useState } from 'react';

export async function getServerSideProps() {
  const res = await fetch(`https://restcountries.com/v3.1/all`)
  const data = await res.json()
  return { props: { data} }
}

export default function Home({data}) {
  const [filter, setFilter] = useState('')
  const filterdCountry = useMemo(
    () => 
    data.filter((p) => 
      p.name.common.toLowerCase().includes(filter.toLowerCase())
    ),
    [filter, data]
  )

  return(
      <div className="">
      <Head>
        <title>Countries</title>
      </Head>
      <Background/>
     
      <div className= {styles.container}>
      <div className={styles.title}>All Countries</div>
      <div className={styles.containsearch}>
      <div className={styles.search}>
        <Input
            clearable 
            placeholder="Search country"
            // eslint-disable-next-line jsx-a11y/aria-proptypes
            aria-label
            onChange={e => setFilter(e.target.value)}
            />
      </div>
      </div>
          <div className= {styles.cards}>
            {filterdCountry.map(country => (
              <Link href={`/${country.name.common}`} key={country.name.common}>
              <Card country = {country}/>
              </Link>
            ))}            
          </div>
       </div>
    </div>
  )
}
