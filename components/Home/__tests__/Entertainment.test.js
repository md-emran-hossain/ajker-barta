import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Entertainment from '../Entertainment/Entertainment'
import { render } from '@testing-library/react'
import { testArr } from '../../__tests__/Exclusive.test'

it('render Entertainment component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Entertainment />, div)
})

it('testing Entertainment with props', () => {
  const { getByTestId } = render(<Entertainment testArr={testArr} />)
  expect(getByTestId('entertainmentId')).toBeTruthy()
})
it('maching snapshot', () => {
  const tree = renderer.create(<Entertainment />)
  expect(tree).toMatchSnapshot()
})