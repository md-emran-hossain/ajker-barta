import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import CovidHeader from '../CovidHeader'

it('render CovidHeader component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<CovidHeader />, div)
})
it('maching snapshot', () => {
  const tree = renderer.create(<CovidHeader />)
  expect(tree).toMatchSnapshot()
})