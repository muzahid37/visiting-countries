import { View, Text } from 'react-native'
import React, {useState, useEffect} from 'react'
import { ScrollView } from 'react-native-web';
import Country from './Country';

export default function Countries() {
    const [countries, setCountries] = useState([]);
    const [searched, setSearched] = useState([]);


    useEffect( () =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => {
            setSearched(data);
            setCountries(data)
        });
    }, []);
    // const handleSearch = text =>{
    //     const filtered = countries.filter(country => country.name.common.includes(text));
    //     setSearched(filtered);
    // }

  return (
    <View>
            <Text >Countries: {countries.length}</Text>
            
            <ScrollView>
                {
                    countries.map(country => <Country 
                        
                        country={country}></Country>)
                }
            </ScrollView>
           
        </View>
  )
}