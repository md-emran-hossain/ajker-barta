import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import AllCountry from '../AllCountry'

it('render AllCountry component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<AllCountry />, div)
})
it('maching snapshot', () => {
  const tree = renderer.create(<AllCountry />)
  expect(tree).toMatchSnapshot()
})