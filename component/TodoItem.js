import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default function TodoItem({ item, PresHandler}) {
    return (
        <TouchableOpacity onPress={()=> PresHandler(item.key)} >
            <Text style={styles.wrap}>{item.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    wrap: {
        margin: 16,
        padding: 16,
        borderWidth: 1,
        borderColor: '#bbb',
        borderStyle: 'dashed',
        borderRadius: 10
    }
})
