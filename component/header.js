import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default function header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Todo App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 70,
        paddingTop: 20,
        backgroundColor: '#34495e',
       
        
    },
    title: {
        fontSize: 20,
        alignItems: 'center',
        textAlign: 'center',
        color: '#ffffff'
    }
})
