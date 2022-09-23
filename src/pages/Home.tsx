import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

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
    setTasks(oldTask => [...oldTask, newTask])
  }
  // parei aqui dia 23/09 1:53
  // fazer o task mudar a aparencia conforme o clique
  function handleToggleTaskDone(id: number) {
    
    console.log(id)
    //TODO - toggle task done if exists
  }

  function handleRemoveTask(id: number) {
    const newFilteredTask = tasks.filter(taskId => taskId.id !== id)

    setTasks(newFilteredTask)
    //TODO - remove task from stat
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})