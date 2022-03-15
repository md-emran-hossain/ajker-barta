import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import International from '../International/International'
import { render } from '@testing-library/react'
import { testArr } from '../../__tests__/Exclusive.test'

it('render International component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<International />, div)
})

it('testing International with props', () => {
  const { getByTestId } = render(<International testArr={testArr} />)
  expect(getByTestId('internationalId')).toBeTruthy()
})
it('maching snapshot', () => {
  const tree = renderer.create(<International />)
  expect(tree).toMatchSnapshot()
})