import React, {useEffect, useRef, useState} from 'react';
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

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [filterType, setFilterType] = useState('all');
  const inputRef = useRef();
  const inputTextRef = useRef();

  console.log('render');

  // with empty array behave like component did mount
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const res = await fetch('http://localhost:3000/todoList');
    const json = await res.json();
    setTodoList(json);
  };

  const onAddTodo = async () => {
    const newTodo = {
      task: inputTextRef.current,
      isDone: false,
    };
    const res = await fetch('http://localhost:3000/todoList', {
      method: 'POST',
      body: JSON.stringify(newTodo),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    const json = await res.json();
    setTodoList([json, ...todoList]);
    inputRef.current.clear();
    inputRef.current.blur();
    setFilterType('all');
  };

  const deleteTodo = async (task) => {
    await fetch(`http://localhost:3000/todoList/${task.id}`, {
      method: 'DELETE',
    });
    // const index = todoList.findIndex((todo) => todo.id === task.id);
    // const updatedTodoList = [
    //   ...todoList.slice(0, index),
    //   ...todoList.slice(index + 1),
    // ];
    setTodoList(todoList.filter((x) => x.id !== task.id));
  };

  const onCompleteTask = async (task) => {
    const index = todoList.findIndex((todo) => todo.id === task.id);
    // const updatedTodoList = [
    //   ...todoList.slice(0, index),
    //   {...task, isDone: !task.isDone},
    //   ...todoList.slice(index + 1),
    // ];
    const res = await fetch(`http://localhost:3000/todoList/${task.id}`, {
      method: 'PUT',
      body: JSON.stringify({...task, isDone: !task.isDone}),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    const json = await res.json();
    const updatedTodoList = [
      ...todoList.slice(0, index),
      json,
      ...todoList.slice(index + 1),
    ];
    setTodoList(updatedTodoList);
  };

  const behavior = Platform.OS === 'ios' ? {behavior: 'padding'} : {};
  return (
    <SafeAreaView style={[styles.flex, styles.bgRed]}>
      <KeyboardAvoidingView {...behavior} style={[styles.flex]}>
        <EPText variant="h1" style={[styles.textCenter]}>
          Todo App
        </EPText>

        <View style={[styles.row, styles.margin12]}>
          <TextInput
            ref={inputRef}
            onChangeText={(text) => {
              inputTextRef.current = text;
            }}
            onSubmitEditing={onAddTodo}
            style={[styles.flex, styles.txtInput, styles.borderRadius4]}
          />
          <EPButton onPress={onAddTodo}>Add Todo</EPButton>
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
                      onCompleteTask(task);
                    }}>
                    <Icon
                      name={task.isDone ? 'checkbox-outline' : 'square-outline'}
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
                      deleteTodo(task);
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
            highlighted={filterType === 'all'}
            onPress={() => {
              setFilterType('all');
            }}>
            All tasks
          </EPButton>
          <EPButton
            btnStyle={[styles.flex]}
            highlighted={filterType === 'pending'}
            onPress={() => {
              setFilterType('pending');
            }}>
            Pending tasks
          </EPButton>
          <EPButton
            btnStyle={[styles.flex]}
            textProps={{
              numberOfLines: 1,
            }}
            highlighted={filterType === 'completed'}
            onPress={() => {
              setFilterType('completed');
            }}>
            Completed tasks
          </EPButton>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default App;

// mounting
// -> constructor
// ->
// updating
// unmount
// error

// class App extends Component {
//   constructor(props) {
//     super(props);
//     console.log('constructor');
//     this.inputRef = createRef();
//     this.state = {
//       todoList: [],
//       filterType: 'all',
//     };
//     this.todoText = '';
//   }

//   componentDidMount() {
//     this.loadData();
//   }

//   loadData = async () => {
//     const res = await fetch('http://localhost:3000/todoList');
//     const json = await res.json();
//     this.setState({
//       todoList: json,
//     });
//   };

//   onAddTodo = async () => {
//     const {todoList} = this.state;
//     const newTodo = {
//       task: this.todoText,
//       isDone: false,
//     };
//     const res = await fetch('http://localhost:3000/todoList', {
//       method: 'POST',
//       body: JSON.stringify(newTodo),
//       headers: {
//         'Content-Type': 'application/json',
//         Accept: 'application/json',
//       },
//     });
//     const json = await res.json();
//     this.setState(
//       {
//         todoList: [json, ...todoList],
//       },
//       () => {
//         this.inputRef.current.clear();
//         this.inputRef.current.blur();
//       },
//     );
//   };

//   deleteTodo = async (task) => {
//     const {todoList} = this.state;
//     await fetch(`http://localhost:3000/todoList/${task.id}`, {
//       method: 'DELETE',
//     });
//     // const index = todoList.findIndex((todo) => todo.id === task.id);
//     // const updatedTodoList = [
//     //   ...todoList.slice(0, index),
//     //   ...todoList.slice(index + 1),
//     // ];
//     this.setState({
//       todoList: todoList.filter((x) => x.id !== task.id),
//     });
//   };

//   onCompleteTask = async (task) => {
//     const {todoList} = this.state;
//     const index = todoList.findIndex((todo) => todo.id === task.id);
//     // const updatedTodoList = [
//     //   ...todoList.slice(0, index),
//     //   {...task, isDone: !task.isDone},
//     //   ...todoList.slice(index + 1),
//     // ];
//     const res = await fetch(`http://localhost:3000/todoList/${task.id}`, {
//       method: 'PUT',
//       body: JSON.stringify({...task, isDone: !task.isDone}),
//       headers: {
//         'Content-Type': 'application/json',
//         Accept: 'application/json',
//       },
//     });
//     const json = await res.json();
//     const updatedTodoList = [
//       ...todoList.slice(0, index),
//       json,
//       ...todoList.slice(index + 1),
//     ];

//     this.setState({
//       todoList: updatedTodoList,
//     });
//   };

//   render() {
//     console.log('render');
//     const behavior = Platform.OS === 'ios' ? {behavior: 'padding'} : {};
//     const {todoList, filterType} = this.state;
//     return (
//       <SafeAreaView style={[styles.flex, styles.bgRed]}>
//         <KeyboardAvoidingView {...behavior} style={[styles.flex]}>
//           <EPText variant="h1" style={[styles.textCenter]}>
//             Todo App
//           </EPText>

//           <View style={[styles.row, styles.margin12]}>
//             <TextInput
//               ref={this.inputRef}
//               onChangeText={(text) => {
//                 this.todoText = text;
//               }}
//               onSubmitEditing={this.onAddTodo}
//               style={[styles.flex, styles.txtInput, styles.borderRadius4]}
//             />
//             <EPButton onPress={this.onAddTodo}>Add Todo</EPButton>
//           </View>
//           <ScrollView style={[styles.flex, styles.paddingH12]}>
//             {todoList
//               .filter((task) => {
//                 if (filterType === 'pending') {
//                   return task.isDone === false;
//                 } else if (filterType === 'completed') {
//                   return task.isDone === true;
//                 } else {
//                   return true;
//                 }
//               })
//               ?.map((task) => {
//                 return (
//                   <View
//                     key={task.id}
//                     style={[styles.row, styles.alignCenter, styles.paddingV12]}>
//                     <Pressable
//                       style={[styles.row, styles.flex]}
//                       onPress={() => {
//                         this.onCompleteTask(task);
//                       }}>
//                       <Icon
//                         name={
//                           task.isDone ? 'checkbox-outline' : 'square-outline'
//                         }
//                         size={24}
//                       />
//                       <EPText
//                         numberOfLines={2}
//                         variant="body2"
//                         allowFontScaling={false}
//                         style={[styles.marginH12]}>
//                         {task.task}
//                       </EPText>
//                     </Pressable>

//                     <Pressable
//                       onPress={() => {
//                         this.deleteTodo(task);
//                       }}>
//                       <Icon name="trash-outline" size={24} />
//                     </Pressable>
//                   </View>
//                 );
//               })}
//           </ScrollView>
//           <View style={[styles.row]}>
//             <EPButton
//               btnStyle={[styles.flex]}
//               onPress={() => {
//                 this.setState({filterType: 'all'});
//               }}>
//               All tasks
//             </EPButton>
//             <EPButton
//               btnStyle={[styles.flex]}
//               onPress={() => {
//                 this.setState({filterType: 'pending'});
//               }}>
//               Pending tasks
//             </EPButton>
//             <EPButton
//               btnStyle={[styles.flex]}
//               textProps={{
//                 numberOfLines: 1,
//               }}
//               onPress={() => {
//                 this.setState({filterType: 'completed'});
//               }}>
//               Completed tasks
//             </EPButton>
//           </View>
//         </KeyboardAvoidingView>
//       </SafeAreaView>
//     );
//   }
// }
