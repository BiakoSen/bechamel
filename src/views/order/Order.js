import React from 'react'
import { Text, View } from 'react-native'

const Order = (props) => {

    const { pizza } = props.route.params

    return (
        <View style={{
            flex: 1,
            backgroundColor: '#1b1c20',
        }}>

            <Text style={{ color: 'white' }}>{pizza.name}</Text>

        </View>
    )
}

export default Order