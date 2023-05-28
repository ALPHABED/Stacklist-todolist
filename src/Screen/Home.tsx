import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Keyboard,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';

import logo from '../assets/Img/icon-stacklist-1.png';
import globals from '../Styles/globals';
import Task from '../Components/Task';
import ButtonComponent from '../Components/Button';
import InputComponent from '../Components/Inputs';
import Stats from '../Components/StatusBar';

type Task = {
  id: number;
  title: string;
};

const Home = () => {
  const [newTask, setNewTask] = useState('');
  const [taskItems, setTaskItems] = useState<Task[]>([]);
  const [showTextInput, setShowTextInput] = useState<boolean>(false);

  const handleAddTask = () => {
    if (newTask.trim() === '') {
      return;
    }

    const newTaskItem: Task = {
      id: Date.now(),
      title: newTask,
    };

    setTaskItems([...taskItems, newTaskItem]);
    setNewTask('');
    setShowTextInput(false);
    Keyboard.dismiss();
  };

  const completeTask = (id: number) => {
    const updatedTasks = taskItems.filter(task => task.id !== id);
    setTaskItems(updatedTasks);
  };

  return (
    <View style={styles.container}>
      <Stats />
      <View style={styles.containerHeading}>
        <Image source={logo} resizeMode="contain" />
      </View>

      <FlatList
        data={taskItems}
        contentContainerStyle={{marginTop: 20}}
        renderItem={({item}: {item: Task}) => (
          <TouchableOpacity
            onPress={() => completeTask(item.id)}
            style={styles.containerItems}>
            <Task title={item.title} />
          </TouchableOpacity>
        )}
        keyExtractor={(item: any) => item.id}
      />

      {/* when click button add > hide button > show TextInput > add task > hide Text input */}

      {!showTextInput ? (
        <ButtonComponent onPress={() => setShowTextInput(true)} text="Add" />
      ) : (
        <InputComponent
          onChange={(text: string) => setNewTask(text)}
          task={newTask}
          onPress={() => handleAddTask()}
          onSubmitEditing={() => handleAddTask()}
        />
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globals.cta,
  },

  containerHeading: {
    marginTop: 40,
    marginHorizontal: globals.m20,
    marginBottom: globals.m20,
  },

  containerItems: {
    alignItems: 'center',
    marginBottom: globals.m20,
    elevation: 4,
  },
});
