import { useEffect, useState } from "react"
import HomeLoader from "../components/HomeLoader"
import SingleBackground from "../components/SingleBackground"
import SingleCountry from "../components/SingleCountry"
import {useRouter} from "next/router"

export async function getServerSideProps({params}){
  const res = await fetch(`https://restcountries.com/v3.1/name/${params.country}?fullText=true`)
  return{
    props: {
      countryDetails: await res.json(),
    }
  }
}

export default function  Country({countryDetails}) {
  if(countryDetails.status != 404)
      return (
        <div className="">
          <SingleBackground />
          <SingleCountry data = {countryDetails}/>
        </div>
      )
  return (
    <div className="">Not found</div>
  )
}

