import React from 'react'
import { View, TouchableOpacity, Text, TextInput, Image, FlatList } from 'react-native'

import pizzas from '../../utils/pizzas.json'
import PizzaCard from '../../components/pizzaCard/PizzaCard'

const Main = (props) => {

    const Navigation = props.navigation

    return (
        <View style={{
            flex: 1,
            backgroundColor: '#1b1c20',
            alignItems: 'center',
        }}>

            <Text style={{
                color: 'white',
                fontSize: 36
            }}>Menu</Text>

            <View style={{flex: 1, width: '100%'}}>
                <FlatList
                    keyExtractor={i => i.name}
                    data={pizzas}
                    renderItem={({ item }) => <PizzaCard pizza={item} Nav={Navigation} />}
                />
            </View>
        </View>
    )
}

export default Main