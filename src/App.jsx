import React from 'react'
import Body from './Components/Body'
import appStore from './utils/appStore'
import {Provider} from "react-redux"

const App = () => {
  return (
    <div>
      <Provider store={appStore}>
      <Body/>
      </Provider>
   
    </div>
  )
}

export default App
