import React from 'react'
import SortingAnimations from './Components/SortingAnimations'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import './App.css'

export default function App() {
  return (
    <div>
        <SortingAnimations/>
        <ToastContainer/>
    </div>
     
  )
}
