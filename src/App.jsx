import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Contextapi from './components/contextapi/contextapi'
import Routingcomp from './components/routing/routingcomp'

const App = () => {
  return (
    <BrowserRouter>
      <Contextapi Children={Routingcomp} />
    </BrowserRouter>
  )
}

export default App