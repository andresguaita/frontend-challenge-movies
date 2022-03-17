import React from 'react'
import { Provider } from 'react-redux'
import { AppRouter } from './router/AppRouter'
import { store } from './store/store'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './MovieApp.css'
export const MovieApp = () => {
  return (
    <Provider store={store}>
    <AppRouter/>
    </Provider>
  )
}
