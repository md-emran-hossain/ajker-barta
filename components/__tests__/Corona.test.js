import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Corona from '../Coronavirus/Corona'

it('render SportAndVoting component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Corona />, div)
})
it('maching snapshot', () => {
  const tree = renderer.create(<Corona />)
  expect(tree).toMatchSnapshot()
})