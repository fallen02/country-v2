import { useEffect, useState } from 'react'
import Link from 'next/link'
import HomeLoader from './HomeLoader'
import style from '../styles/Singlecountry.module.css'
import Head from 'next/head'
export default function SingleCountry({...country}) {
    const [load, setLoad] = useState(false)
    const [cur , setCur] = useState()
    const [name, setName] = useState()
    const [official, setOfficial] = useState()
    const [capital, setCapital] = useState()
    const [numcode, setNumcode] = useState()
    const [region, setRegion] = useState()
    const [subregion, setsubRegion] = useState()
    const [population, setPopulation] = useState()
    const [languages, setLang] = useState([])
    const [continent, setContinent] = useState()
    const [area, setArea] = useState()
    const [glink, setGlink] = useState()

    function getLang(languages){
        const groupLang = []
        let lang = ''
        for(const lang in languages){
            groupLang.push(languages[lang])
        }
        for(const i in groupLang){
            lang += groupLang[i]
            if(i != groupLang.length - 1) lang += ', '
        }
        return lang
        
    }
    function printLang(languages){
        let lang = ''
        for(const i in languages){
            lang += languages[i]
            if(i != languages.length - 1) lang += ', '
        }
        return lang
    }

    function convertPopulation (value) {

        // Nine Zeroes for Billions
        return Math.abs(Number(value)) >= 1.0e+9
    
        ? (Math.abs(Number(value)) / 1.0e+9).toFixed(2) + "B"
        // Six Zeroes for Millions 
        : Math.abs(Number(value)) >= 1.0e+6
    
        ? (Math.abs(Number(value)) / 1.0e+6).toFixed(2) + "M"
        // Three Zeroes for Thousands
        : Math.abs(Number(value)) >= 1.0e+3
    
        ? (Math.abs(Number(value)) / 1.0e+3).toFixed(2) + "K"
    
        : Math.abs(Number(value));
    
    }

    useEffect(() => {
        setCur(Object.keys(country.data[0].currencies).toString())
        setName(country.data[0].name.common)
        setOfficial(country.data[0].name.official)
        setCapital(country.data[0].capital)
        setNumcode(country.data[0].idd.root + country.data[0].idd.suffixes[0])
        setRegion(country.data[0].region)
        setsubRegion(country.data[0].subregion)
        setLang(getLang(country.data[0].languages))
        setContinent(country.data[0].continents)
        setArea(country.data[0].area)
        setGlink(country.data[0].maps.googleMaps)
        setPopulation(convertPopulation(country.data[0].population))
        setLoad(true)
    }, [country, country.data])

    if(!load)
  return (
    <HomeLoader/>
  )

  return (
    <>
    <Head>
        <title>{name}</title>
    </Head>
    <div className = {style.container}>
    <p className = {style.heading}>{name} Details</p>
    <p className = {style.title} >Common Details:- </p>
    <p className = {style.lable} >Name:  <span className={style.item}>{name}</span></p>
    <p className = {style.lable} >Official Name:  <span className = {style.item}>{official}</span></p>
    <p className = {style.lable} >Capital Name:  <span className = {style.item}>{capital}</span></p>
    <p className = {style.lable} >Currencies:  <span className = {style.item}>{cur}</span></p>
    <p className = {style.lable} >Number Code :  <span className = {style.item}>{numcode}</span></p>
    <p className = {style.lable} >Region:  <span className = {style.item}>{region}</span></p>
    <p className = {style.lable} >Subregion:  <span className = {style.item}>{subregion}</span></p>
    <p className = {style.lable} >population:  <span className = {style.item}>{population}</span></p>
    <p className = {style.lable} >Language:  <span className = {style.item}>{languages}</span></p>
    <p className = {style.lable} >Continent:  <span className = {style.item}>{continent}</span></p>
    <p className = {style.lable} >area:  <span className = {style.item}>{`${area} square kilometres`}</span></p>
    <p className = {style.lable} >Goole map link:  <span className = {style.item}><Link href={`${glink}`} target = '_blank'>view</Link></span></p>
</div>
    </>
  )
}
