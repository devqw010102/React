import {Component} from 'react'
import ArrowComponent from './ArrowComponent'
import ClassComponent from './ClassComponent'

export default function App() {
  return (
    <ul>
      <ClassComponent href="http://www.google.com" text="go to Google" />
      <ArrowComponent href="http://www.twitter.com" text="go to Twitter" />
    </ul>
  )
}
