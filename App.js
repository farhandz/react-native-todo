import React, {useState} from 'react'
import { StyleSheet, Text, View, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native'
import Header from './component/header'
import TodoItem from './component/TodoItem'
import Addtodo from './component/addtodo'


export default function App() {
  const [todos , setTOdos] = useState([
    {text: 'buy Coffee', key: '1'},
    {text: 'create an aapp', key: '2'},
    {text: 'dinner with crush', key: '3'},
    {text: 'ply on the switch', key: '4'},
  ])

  const PresHandler = (key) => {
      setTOdos((prevTodo) => {
        Keyboard.dismiss
        return prevTodo.filter(todo => todo.key !== key)
      })
  }
  
  const submithandler = (text) => {
      setTOdos((prevTodo) => {
        return [
          {text: text, key: Math.random()},
          ...prevTodo
        ]
      })
  }

  return (
    <TouchableWithoutFeedback onPress={()=> {
      Keyboard.dismiss()
    }} >
      <View style={styles.container}>
            <Header />
          <View style={styles.content}>
              <Addtodo submithandler={submithandler}  />
              <View style={styles.list}>
                  <FlatList 
                    data={todos}
                    renderItem={({item}) => (
                        <TodoItem item={item} PresHandler={PresHandler} />
                    )}

                  />
              </View>
          </View>
      </View>
    </TouchableWithoutFeedback>
  
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
    content: {
      padding: 40,

    }
})
