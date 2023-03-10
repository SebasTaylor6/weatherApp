import Constants from 'expo-constants'
import { useEffect, useState, StyleSheet } from 'react'
import tw from 'twrnc'
import { ActivityIndicator, Alert, RefreshControl, ScrollView, Text, View, Image, TextInput } from 'react-native'
import WeatherSearch from './WeatherSearch'

const WeatherInfo = ({ weatherData, fetchWeatherData }) => {


    return (
        <View style={tw`bg-orange-100 h-full`}>
            <WeatherSearch fetchWeatherData={fetchWeatherData} />
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


        </View>
    )
}
export default WeatherInfo