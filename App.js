import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from 'react-native'

import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  const [isAddMode, setIsAddMode] = useState(false)

  const addGoalHander = (goalTitle) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ])
    setIsAddMode(false)
  }

  const removeGoalHander =(goalId) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId)
    })
  }

  const cancelGoalAdditionHandler = () =>{
    setIsAddMode(false)
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)}/>
      <GoalInput visible={isAddMode} onAddGoal={addGoalHander} onCancel={cancelGoalAdditionHandler}/>
      
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
        //<Text>{itemData.item.value}</Text>
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHander}
            title={itemData.item.value}
          />
        )
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
})
