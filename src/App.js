import React from 'react';
import logo from './logo.svg';
import './App.css';
import DNDContainer from './DND/DNDContainer'
	import { DndProvider } from 'react-dnd'
	import { HTML5Backend } from 'react-dnd-html5-backend'
function App() {
  return (
    <div className="App">
    <DndProvider backend={HTML5Backend}>
      <DNDContainer />
    </DndProvider>
  </div>
 );
}

export default App;
