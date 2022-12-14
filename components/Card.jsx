import Image from 'next/image';
import styles from '../styles/Card.module.css'
export default function Card({country}) {
    function click(){
        console.log(`Clicked on ${country.name.common}`)
    }
    function convertNumber (value) {

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
  return (
        <div className= {styles.card} onClick = {click}>
            <Image
            src={country.flags.svg}
            alt="Landscape picture"
            width={800}
            height={500}
            />
            <h1>{country.name.common}</h1>
            <p>Population: {convertNumber(country.population)}</p>
        </div>    
  )
}
