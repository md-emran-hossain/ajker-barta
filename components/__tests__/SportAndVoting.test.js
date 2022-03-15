import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import SportAndVoting from '../SportAndVoting'

it('render SportAndVoting component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<SportAndVoting />, div)
})
it('maching snapshot', () => {
  const tree = renderer.create(<SportAndVoting />)
  expect(tree).toMatchSnapshot()
})