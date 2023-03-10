import Constants from 'expo-constants'
import { useEffect, useState, StyleSheet } from 'react'
import tw from 'twrnc'
import { ActivityIndicator, Alert, RefreshControl, ScrollView, Text, View, Image, TextInput } from 'react-native'
import WeatherInfo from './WeatherInfo'

const key = '64f9829ce429c29cc84475476d3e110e'

const Search = () => {
    const [weatherData, setWeatherData] = useState(null)
    const [loaded, setLoaded] = useState(false)

    const fetchWeatherData = async (cityName) => {
        setLoaded(true)
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&exclude=minutely&appid=${key}`)
            if (response.ok) {
                const data = await response.json();
                setWeatherData(data)

            }

        } catch (error) {
            Alert.alert('Error', error.message)
        }



        setLoaded(false)

    }

    useEffect(() => {
        fetchWeatherData('Lisbon')
    }, [])

    if (!weatherData) {
        return (
            <View style={tw` bg-orange-100 h-full`}>
                <View style={tw` items-center flex mt-6`}>
                    <ActivityIndicator size="large" color="red" />
                </View>
            </View>
        )
    }



    return (
        <WeatherInfo weatherData={weatherData} fetchWeatherData={fetchWeatherData} />

    )
}

export default Search