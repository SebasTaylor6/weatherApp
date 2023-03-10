import Constants from 'expo-constants'
import { useEffect, useState, StyleSheet } from 'react'
import tw from 'twrnc'
import { ActivityIndicator, Alert, RefreshControl, ScrollView, Text, View, Image } from 'react-native'
import * as Location from 'expo-location'

const key = '64f9829ce429c29cc84475476d3e110e'
let BASE_URL = `https://api.openweathermap.org/data/2.5/weather?&units=metric&exclude=minutely&appid=${key}`

const Actual = () => {

    const [weatherData, setWeatherData] = useState(null)
    const [loaded, setLoaded] = useState(false)

    const fetchWeatherData = async () => {
        setLoaded(true)

        const { status } = await Location.requestForegroundPermissionsAsync()
        if (status !== 'granted') {
            Alert.alert('Permission denied');
        }

        let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true })

        const response = await fetch(`${BASE_URL}&lat=${location.coords.latitude}&lon=${location.coords.longitude}`)
        const data = await response.json();

        if (!response.ok) {
            Alert.alert('Error', 'Something went wrong')
        } else {
            setWeatherData(data)
        }
        setLoaded(false)

    }



    useEffect(() => {
        fetchWeatherData()
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
        <ScrollView
            refreshControl={
                <RefreshControl refreshing={loaded} onRefresh={() => fetchWeatherData()} />
            } style={tw`bg-orange-100 h-full`}>
            <View style={tw`flex my-6 flex-row items-center justify-center gap-8`}>

                <Text style={tw`text-lg`}>
                    {weatherData.name}
                </Text>
            </View>
            <View style={tw`flex my-2 flex-row items-center justify-center gap-8`}>
                <Image
                    style={tw`h-40 w-40`}
                    source={{
                        uri: "http://openweathermap.org/img/wn/" + weatherData.weather[0].icon + "@4x.png",
                    }}
                />
                <Text style={tw`text-lg`}>
                    {Math.round(weatherData.main.temp)}°C
                </Text>
            </View>
            <View style={tw`flex my-2 flex-row items-center justify-center gap-8`}>

                <Text style={tw`text-lg`}>
                    {weatherData.weather[0].description}
                </Text>
            </View>


        </ScrollView>
    )
}

export default Actual