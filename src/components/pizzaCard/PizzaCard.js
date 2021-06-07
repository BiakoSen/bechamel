import React from 'react'
import { View, TouchableOpacity, Text, Image, FlatList } from 'react-native'

const PizzaCard = (props) => {

    const { pizza } = props
    const { Nav } = props

    const goOrder = () => {
        Nav.navigate('Order', { pizza })
    }

    return (
        <View style={{
            marginHorizontal: 10,
            marginVertical: 5,
            alignItems: 'center'
        }}>
            <View style={{
                backgroundColor: '#1b1b1b',
                height: 125,
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <View style={{ justifyContent: 'space-between' }}>
                    <Text style={{
                        color: 'white',
                        fontSize: 22,
                        fontStyle: 'italic',
                        fontWeight: 'bold'
                    }}>{pizza.name}</Text>

                    <View style={{ height: '60%' }}>
                        <Text style={{ color: 'white', fontSize: 18 }}>Ingredientes:</Text>
                        <FlatList
                            keyExtractor={i => i}
                            data={pizza.ingredients}
                            renderItem={({ item }) => <Text style={{
                                color: 'white',
                                fontSize: 13
                            }}>   - {item}</Text>}
                        />
                    </View>

                    <Text style={{ color: 'white' }}>Precio: C${pizza.price}</Text>
                </View>
                <Image style={{
                    width: 125,
                    height: 125,
                    borderRadius: 100,
                }}
                    source={{ uri: pizza.imageUri }} />
            </View>

            <View style={{
                height: 40,
                width: '90%',
                backgroundColor: '#424242',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <TouchableOpacity
                    onPress={goOrder}
                >
                    <Text style={{ color: '#da2960', fontSize: 18 }}>COMPRAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default PizzaCard