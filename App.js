import React, {Component, createRef} from 'react';
import {
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  Pressable,
  View,
  ScrollView,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import EPText from './src/components/EPText';
import styles from './commonStyle';
import EPButton from './src/components/EPButton';

// mounting
// -> constructor
// ->
// updating
// unmount
// error

class App extends Component {
  constructor(props) {
    super(props);
    console.log('constructor');
    this.inputRef = createRef();
    this.state = {
      todoList: [],
      filterType: 'all',
    };
    this.todoText = '';
  }

  onAddTodo = () => {
    const {todoList} = this.state;
    const newTodo = {
      id: new Date().valueOf(),
      task: this.todoText,
      isDone: false,
    };
    this.setState(
      {
        todoList: [newTodo, ...todoList],
      },
      () => {
        this.inputRef.current.clear();
        this.inputRef.current.blur();
      },
    );
  };

  deleteTodo = (task) => {
    const {todoList} = this.state;
    // const index = todoList.findIndex((todo) => todo.id === task.id);
    // const updatedTodoList = [
    //   ...todoList.slice(0, index),
    //   ...todoList.slice(index + 1),
    // ];
    this.setState({
      todoList: todoList.filter((x) => x.id !== task.id),
    });
  };

  onCompleteTask = (task) => {
    const {todoList} = this.state;
    // const index = todoList.findIndex((todo) => todo.id === task.id);
    // const updatedTodoList = [
    //   ...todoList.slice(0, index),
    //   {...task, isDone: !task.isDone},
    //   ...todoList.slice(index + 1),
    // ];
    this.setState({
      todoList: todoList.map((x) =>
        x.id === task.id ? {...x, isDone: !x.isDone} : x,
      ),
    });
  };

  render() {
    console.log('render');
    const behavior = Platform.OS === 'ios' ? {behavior: 'padding'} : {};
    const {todoList, filterType} = this.state;
    return (
      <SafeAreaView style={[styles.flex, styles.bgRed]}>
        <KeyboardAvoidingView {...behavior} style={[styles.flex]}>
          <EPText variant="h1" style={[styles.textCenter]}>
            Todo App
          </EPText>

          <View style={[styles.row, styles.margin12]}>
            <TextInput
              ref={this.inputRef}
              onChangeText={(text) => {
                this.todoText = text;
              }}
              onSubmitEditing={this.onAddTodo}
              style={[styles.flex, styles.txtInput, styles.borderRadius4]}
            />
            <EPButton onPress={this.onAddTodo}>Add Todo</EPButton>
          </View>
          <ScrollView style={[styles.flex, styles.paddingH12]}>
            {todoList
              .filter((task) => {
                if (filterType === 'pending') {
                  return task.isDone === false;
                } else if (filterType === 'completed') {
                  return task.isDone === true;
                } else {
                  return true;
                }
              })
              ?.map((task) => {
                return (
                  <View
                    key={task.id}
                    style={[styles.row, styles.alignCenter, styles.paddingV12]}>
                    <Pressable
                      style={[styles.row, styles.flex]}
                      onPress={() => {
                        this.onCompleteTask(task);
                      }}>
                      <Icon
                        name={
                          task.isDone ? 'checkbox-outline' : 'square-outline'
                        }
                        size={24}
                      />
                      <EPText
                        numberOfLines={2}
                        variant="body2"
                        allowFontScaling={false}
                        style={[styles.marginH12]}>
                        {task.task}
                      </EPText>
                    </Pressable>

                    <Pressable
                      onPress={() => {
                        this.deleteTodo(task);
                      }}>
                      <Icon name="trash-outline" size={24} />
                    </Pressable>
                  </View>
                );
              })}
          </ScrollView>
          <View style={[styles.row]}>
            <EPButton
              btnStyle={[styles.flex]}
              onPress={() => {
                this.setState({filterType: 'all'});
              }}>
              All tasks
            </EPButton>
            <EPButton
              btnStyle={[styles.flex]}
              onPress={() => {
                this.setState({filterType: 'pending'});
              }}>
              Pending tasks
            </EPButton>
            <EPButton
              btnStyle={[styles.flex]}
              textProps={{
                numberOfLines: 1,
              }}
              onPress={() => {
                this.setState({filterType: 'completed'});
              }}>
              Completed tasks
            </EPButton>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

// const App = () => {
//   const behavior = Platform.OS === 'ios' ? {behavior: 'padding'} : {};
//   return (
//     <SafeAreaView style={[styles.flex, styles.bgRed]}>
//       <KeyboardAvoidingView {...behavior} style={[styles.flex]}>
//         <Text allowFontScaling={false} style={[styles.h1, styles.textCenter]}>
//           Todo App
//         </Text>
//         <View style={[styles.row, styles.margin12]}>
//           <TextInput
//             style={[styles.flex, styles.txtInput, styles.borderRadius4]}
//           />
//           <TouchableOpacity
//             onPress={() => {
//               alert('clicked');
//             }}>
//             <View style={[styles.btn, styles.borderRadius4, styles.center]}>
//               <Text allowFontScaling={false} style={[styles.btnTxt]}>
//                 Add Todo
//               </Text>
//             </View>
//           </TouchableOpacity>
//         </View>
//         <ScrollView style={[styles.flex, styles.paddingH12]}>
//           {tasks?.map((task) => {
//             return (
//               <View
//                 key={task.id}
//                 style={[styles.row, styles.alignCenter, styles.paddingV12]}>
//                 <Pressable
//                   onPress={() => {
//                     alert('checkbox clicked');
//                   }}>
//                   <Icon name="checkbox-outline" size={24} />
//                 </Pressable>
//                 <Text
//                   numberOfLines={2}
//                   allowFontScaling={false}
//                   style={[styles.flex, styles.marginH12]}>
//                   {task.task}
//                 </Text>
//                 <Pressable
//                   onPress={() => {
//                     alert('delete clicked');
//                   }}>
//                   <Icon name="trash-outline" size={24} />
//                 </Pressable>
//               </View>
//             );
//           })}
//         </ScrollView>
//         <View style={[styles.row]}>
//           <Pressable style={[styles.flex, styles.btn, styles.center]}>
//             <Text allowFontScaling={false} style={[styles.btnTxt]}>
//               All tasks
//             </Text>
//           </Pressable>
//           <Pressable style={[styles.flex, styles.btn, styles.center]}>
//             <Text allowFontScaling={false} style={[styles.btnTxt]}>
//               Pending tasks
//             </Text>
//           </Pressable>
//           <Pressable style={[styles.flex, styles.btn, styles.center]}>
//             <Text
//               allowFontScaling={false}
//               numberOfLines={1}
//               style={[styles.btnTxt, styles.textCenter]}>
//               Completed Tasks
//             </Text>
//           </Pressable>
//         </View>
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// };

export default App;
