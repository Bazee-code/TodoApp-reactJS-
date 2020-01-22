import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
// import uuid from 'uuid';
import axios from 'axios';

import Todos from './components/Todos.js';
import './App.css';
import Header from './components/layout/header.js';
import AddTodo from './components/AddTodo.js';
import About from './components/pages/about.js';

class App extends React.Component{

  state = {
    todos :[
      // {
      //   id : uuid.v4(), //generate random id
      //   title : "Nut in Tamara",
      //   completed : false
      // },
      // {
      //   id : uuid.v4(),
      //   title : "Nut in Ceecee",
      //   completed :true
      // },
      // {
      //   id : uuid.v4(),
      //   title : "Nut in Monica",
      //   completed : false
      // }

      // WE NOW WANT TO GENERATE OUR TODOS FROM JSONPLACEHOLDER API
    ]
  }

  componentDidMount(){
    // lifecycle method that runs after our component has been mounted
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
    // returns promise which we chain onto
    .then((res)=>{
      // console.log(res.data);
      this.setState({todos: res.data});
    })
  }

// note: we call our events in the parent comp cause this is where
// we can access & change the state of our component using setState()
// also where our todos are defined
  markComplete = (id)=>{
    // console.log(id);
    this.setState({todos:this.state.todos.map(todo=>{
      if(todo.id === id){
        todo.completed = !todo.completed //toggle output
      }
      return todo;
      })});
  }
// delete our todos
  delTodo = (id) =>{
    
    axios.delete("https://jsonplaceholder.typicode.com/todos/{id")
    .then((res)=>{
      this.setState({ todos : [...this.state.todos.filter(todo => todo.id
      !== id)] });
    });
  }
// add new todos to array
  addTodo = (title) =>{
    // console.log(title);
    // const newTodo = {
    //   id : uuid.v4(),
    //   title ,
    //   completed : false
    // }

    axios.post("https://jsonplaceholder.typicode.com/todos",
    {
      title,
      completed : false
    }).then((res)=>{
      this.setState({ todos : [...this.state.todos,res.data]});
    });

    // this.setState({ todos : [...this.state.todos,newTodo]});
    // ... is the spread operator..it extracts all individual props one by one
    // and transfers them to a new obj
  }

  render (){
      // access our state
      // console.log(this.state.todos);
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props =>(
              <React.Fragment>
                <Todos todos={this.state.todos}
                   markComplete={this.markComplete}
                   delTodo = {this.delTodo}
                />
                <AddTodo addTodo = {this.addTodo}/>
              </React.Fragment>
            )} />
            
            <Route path = "/about" component={About}/>
           </div>
        </div>
      </Router>
    );
  }
}
export default App;
