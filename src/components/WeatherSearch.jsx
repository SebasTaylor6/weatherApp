import Constants from 'expo-constants'
import { useEffect, useState, StyleSheet } from 'react'
import tw from 'twrnc'
import { ActivityIndicator, Alert, RefreshControl, ScrollView, Text, View, Image, TextInput, Button, TouchableOpacity } from 'react-native'
const WeatherSearch = ({ fetchWeatherData }) => {
    const [cityName, setCityName] = useState('')

    return (
        <View style={tw`flex items-center my-4 mx-4`}>
            <View style={tw`relative w-full items-center`}>
                <TextInput
                    placeholder="Search city"
                    style={tw`bg-gray-50 w-1/2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                    value={cityName}
                    onChangeText={(text) => setCityName(text)}
                />

                <TouchableOpacity
                    style={tw`items-center mt-2 w-1/3 p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}

                    onPress={() => fetchWeatherData(cityName)}
                >
                    <Text style={tw`text-white `}>Search</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default WeatherSearch