import { useState } from "react"
import HomeLoader from "../components/HomeLoader"
import SingleBackground from "../components/SingleBackground"
import SingleCountry from "../components/SingleCountry"



export const getStaticPaths = async () => {
  const res  = await fetch('https://restcountries.com/v3.1/all')
  const data = await res.json()

  const paths = data.map(country => {
    return{
      params: {country: country.name.common}
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  
  const name = context.params.country
  const res = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
  const data = await res.json()
  return {
    props: {country: data}
  }
}

export default function  Country({country}) {
  return (
    <div className="">
      <SingleBackground />
      <SingleCountry data = {country}/>
    </div>
  )
}

