import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import "@fontsource/jetbrains-mono"; // Defaults to weight 400
import "@fontsource/jetbrains-mono/400.css"; // Specify weight
import "@fontsource/jetbrains-mono/400-italic.css"; // Specify weight and style
import HomeScreen from './pages/HomeScreen'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HomeScreen />
  </React.StrictMode>,
)
