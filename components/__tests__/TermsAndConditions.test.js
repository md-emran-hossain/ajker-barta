import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import TermsAndConditions from '../Policy/TermsAndConditions'

it('render TermsAndConditions component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<TermsAndConditions />, div)
})
it('maching snapshot', () => {
  const tree = renderer.create(<TermsAndConditions />)
  expect(tree).toMatchSnapshot()
})