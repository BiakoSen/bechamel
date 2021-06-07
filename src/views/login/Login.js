import React from 'react'
import { View, TouchableOpacity, Text, TextInput, Image } from 'react-native'

import LogoPizza from '../../static/images/logo/pizzaNeon.jpeg'

const Login = (props) => {

    const Navigation = props.navigation

    const goMain = () => {
        Navigation.navigate('Main')
    }

    return (
        <View style={{
            flex: 1,
            backgroundColor: '#1b1c20',
            justifyContent: 'center',
            alignItems: 'center',
        }}>

            <View style={{
                marginHorizontal: 10,
                alignItems: 'center'
            }}>
                <Image style={{
                    height: 220,
                    width: 220,

                }} source={LogoPizza} />

                <View style={{
                    flexDirection: 'column',
                    width: 220,
                    marginVertical: 10
                }}>
                    <Text style={{
                        color: 'white',
                        marginLeft: 10,
                        marginBottom: 5
                    }}>Ingrese su usuario</Text>
                    <TextInput
                        style={{
                            borderColor: '#f3eb70',
                            borderWidth: 2,
                            borderRadius: 25,
                            paddingLeft: 10,
                            height: 40
                        }}
                        placeholderTextColor='gray'
                        placeholder='Ingrese su usuario' />
                </View>

                <View style={{
                    flexDirection: 'column',
                    width: 220,
                    marginVertical: 10
                }}>
                    <Text style={{
                        color: 'white',
                        marginLeft: 10,
                        marginBottom: 5
                    }}>Ingrese su contraseña</Text>
                    <TextInput
                        style={{
                            borderColor: '#f3eb70',
                            borderWidth: 2,
                            borderRadius: 25,
                            paddingLeft: 10,
                            height: 40
                        }}
                        placeholderTextColor='gray'
                        placeholder='Ingrese su contraseña' />
                </View>

                <TouchableOpacity style={{
                    backgroundColor: '#da2960',
                    marginTop: 10,
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    borderRadius: 20
                }}
                    onPress={goMain}
                >
                    <Text style={{
                        color: 'white'
                    }}>Ingresar</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}

export default Login