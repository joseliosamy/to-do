import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    const newTask = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false
    }
    const doubleTasksFind = tasks.find(task => task.title === newTaskTitle);

    if(doubleTasksFind) {
      Alert.alert('Task já cadastrada!', 'Você não pode cadastrar uma task com o mesmo nome')
    }

    setTasks(oldTask => [...oldTask, newTask])
  }
  function handleToggleTaskDone(id: number) {
    const updatedTasks = tasks.map(task => ({ ...task }));

    const findTask = updatedTasks.find(task => task.id === id);

    if(!findTask)
      return;

    findTask.done = !findTask.done;
      
    setTasks(updatedTasks)

    //TODO - toggle task done if exists
  }

  function handleRemoveTask(id: number) {

    Alert.alert('Tem certeza que você deseja remover esse item?', 'Ao remover o item, ele não poderá mais ser resgadato', [{
      text : 'Sim',
      onPress : () => {
        const newFilteredTask = tasks.filter(taskId => taskId.id !== id)
        setTasks(newFilteredTask)
      }
    },
    {
      text : 'Não'
    }
  ])
    
  }

  function handleEditTask(id: number, title: string){
    
    
  }
  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
        editTask={handleEditTask}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f0f'
  }
})