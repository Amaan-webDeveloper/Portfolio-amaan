import React from 'react'
import { Button } from './components/ui/button'
import { Route, Routes } from 'react-router-dom'
import LayoutContainer from './container/LayoutContainer.jsx'
import { Home } from './components'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LayoutContainer><Home/></LayoutContainer>}/>
    </Routes>
  )
}

export default App