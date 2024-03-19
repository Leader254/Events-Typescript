import React from 'react'
import './App.css'
import { Person } from './components/Person'
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';

const App: React.FC = () => {
  return (
      <div>
        <Person name="Samuel" age={20} email="samuel219@gmail.com" />
      </div>
  )
}

export default App
