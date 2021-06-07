import React from 'react'
import { Image, Text, View, FlatList, TextInput, TouchableOpacity } from 'react-native'

const Order = (props) => {

    const { pizza } = props.route.params

    return (
        <View style={{
            flex: 1,
            justifyContent: 'space-between',
            backgroundColor: 'black',
        }}>

            <Image style={{
                width: '100%',
                height: 250,
                opacity: 0.75
            }}
                source={{ uri: pizza.imageUri }} />

            <Text style={{
                fontSize: 26,
                color: 'white'
            }}>{pizza.name}</Text>

            <Text style={{
                fontSize: 22,
                color: 'white'
            }}>Ingredientes:</Text>

            <View style={{ height: '15%' }}>
                <FlatList
                    keyExtractor={i => i}
                    data={pizza.ingredients}
                    renderItem={({ item }) => <Text style={{
                        color: 'white',
                        fontSize: 18
                    }}>   - {item}</Text>}
                />
            </View>

            <View style={{ height: 200}}>
                <Text style={{ color: 'white', fontSize: 24 }}>Dirección de envío:</Text>
                <TextInput style={{
                    borderWidth: 1,
                    borderColor: 'white',
                    color: 'white',
                    height: 150,
                    justifyContent: 'flex-start'
                }}
                numberOfLines={6}
                placeholder='Dirección'
                placeholderTextColor='gray'
                />
            </View>

            <TouchableOpacity style={{
                alignSelf: 'center',
                backgroundColor: '#da2960',
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderRadius: 20,
                marginVertical: 10
            }}>
                <Text style={{}}>COMPRAR</Text>
            </TouchableOpacity>

        </View>
    )
}

export default Order