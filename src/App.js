import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import {Helmet} from "react-helmet";


function App() {
  return (
    <div className='todo-app'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mi Lista</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Icon and title" />
      </Helmet>
      <TodoList />
      
    </div>
  );
}

export default App;
