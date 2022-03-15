import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import AboutUs from '../AboutUs/AboutUs'

it('render SportAndVoting component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<AboutUs />, div)
})
it('maching snapshot', () => {
  const tree = renderer.create(<AboutUs />)
  expect(tree).toMatchSnapshot()
})