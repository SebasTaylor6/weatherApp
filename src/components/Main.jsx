import Constants from 'expo-constants'
import { Button, Text, View, Image, TouchableNativeFeedback, TouchableOpacity } from 'react-native'
import { Link, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Search from './Search'
import Actual from './Actual'
import tw from 'twrnc'
import { TouchableWithoutFeedback } from 'react-native-web';

const Home = ({ navigation }) => {
    return (
        <View style={tw`items-center flex  h-full  bg-indigo-100`}>




            <View style={tw`max-w-sm max-h-sm mt-6 w-full  rounded `}>
                <TouchableOpacity onPress={() => navigation.navigate('Actual')}>
                    <View >
                        <Image style={tw`h-40 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden`} source={{ uri: `https://img.freepik.com/free-photo/sun-sunlight-bright-outdoor-sky_1127-2391.jpg?w=1060&t=st=1678129069~exp=1678129669~hmac=2c257479743019d5ac58946482264fa6673d2da3f8c62566b01b2d74c09072c8` }} />
                    </View>
                    <View style={tw`border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal`}>
                        <Text style={tw`text-sm text-gray-600 flex items-center`}>

                            Climas del Mundo
                        </Text>
                        <Text style={tw`text-gray-900 font-bold text-xl mb-2`}>Clima en tu ubicacion</Text>
                        <Text style={tw`text-gray-700 text-base`}>Encuentra el clima actual de la ciudad en la que estes y sus especificaciones.</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={tw`max-w-sm mb-3 mt-4 w-full max-h-sm rounded  `}>
                <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                    <View >
                        <Image style={tw`h-40 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden`} source={{ uri: `https://www.travelandleisure.com/thmb/WALDNVsWYweaOFmRcixt0LqY2-c=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/red-pink-orange-purple-sunset-WHYCOLORS1220-7684b47c858b4e1e9d73018e213c7ff3.jpg` }} />
                    </View>
                    <View style={tw`border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal`}>
                        <Text style={tw`text-sm text-gray-600 flex items-center`}>

                            Climas del Mundo
                        </Text>
                        <Text style={tw`text-gray-900 font-bold text-xl mb-2`}>Buscar clima por ciudad</Text>
                        <Text style={tw`text-gray-700 text-base`}>Encuentra el clima actual de la ciudad la cual deseas y sus especificaciones.</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>

    )
}

const Stack = createNativeStackNavigator();

const Main = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    options={{
                        title: 'Weather',
                        headerStyle: {
                            backgroundColor: '#a5b4fc'
                        },
                        headerTintColor: '#fff',
                        headerTitleAlign: 'center'
                    }}
                    component={Home} />
                <Stack.Screen
                    name="Search"
                    options={{
                        title: 'Search Weather',
                        headerStyle: {
                            backgroundColor: '#a5b4fc'
                        },
                        headerTintColor: '#fff',
                        headerTitleAlign: 'center'
                    }}
                    component={Search} />
                <Stack.Screen
                    name="Actual"
                    options={{
                        title: 'Actual Weather',
                        headerStyle: {
                            backgroundColor: '#a5b4fc'
                        },
                        headerTintColor: '#fff',
                        headerTitleAlign: 'center'
                    }}
                    component={Actual} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Main