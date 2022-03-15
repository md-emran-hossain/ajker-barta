import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Global from '../Global'

it('render Global component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Global />, div)
})
it('maching snapshot', () => {
  const tree = renderer.create(<Global />)
  expect(tree).toMatchSnapshot()
})