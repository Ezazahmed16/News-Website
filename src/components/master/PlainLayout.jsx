import React from 'react'
import AppNavBar from './AppNavBar'
import AppFooter from './AppFooter'

const PlainLayout = (props) => {
  return (
    <div>
      <AppNavBar />
      {props.children}
      <AppFooter />
    </div>
  )
}

export default PlainLayout