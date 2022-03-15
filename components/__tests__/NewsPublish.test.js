import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import NewsPublish from '../NewsPublish/NewsPublish'

it('render NewsPublish component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<NewsPublish />, div)
})
it('maching snapshot', () => {
  const tree = renderer.create(<NewsPublish />)
  expect(tree).toMatchSnapshot()
})