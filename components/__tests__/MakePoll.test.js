import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import MakePoll from '../MakePoll/MakePoll'

it('render MakePoll component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<MakePoll />, div)
})
it('maching snapshot', () => {
  const tree = renderer.create(<MakePoll />)
  expect(tree).toMatchSnapshot()
})