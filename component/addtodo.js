import React,{useState} from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
// import console = require('console');


export default function addtodo({submithandler}) {
    const [input, setinput] = useState('')
    const handleinput = (val) => {
        setinput(val)
    }
    return (
        <View>
           <TextInput 
                style={styles.add}
                placeholder= 'add todolist'
                onChangeText={handleinput}
           />
            <View style={styles.button} >
                <Button color='purple' title='add todo list'  onPress={()=> submithandler(input)} />
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    add: {
        paddingLeft: 20,
        borderWidth: 1,
        borderRadius: 10
    },
    button: {
        marginTop: 10,
    }
})
