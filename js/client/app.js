import React from 'react'
import { render } from 'react-dom'
import Layout from '../components/layout/layout'
import configureStore from '../stores/store'
import { Provider } from 'react-redux'

let initialState = {
  header:{
    headerList:['Movies','Pop Songs','Punjabi'],
    appName:"Bolly Musics"
  }
}

console.log("lol")
let store = configureStore(initialState)

render(
  <Provider store={store}>
    <Layout />
  </Provider>,
  document.getElementById('app') 
)
