import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Opinion from '../Opinion/Opinion'
import { render } from '@testing-library/react'
import { testArr } from '../../__tests__/Exclusive.test'

it('render Opinion component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Opinion />, div)
})

it('testing Opinion with props', () => {
  const { getByTestId } = render(<Opinion testArr={testArr} />)
  expect(getByTestId('opinionId')).toBeTruthy()
})
it('maching snapshot', () => {
  const tree = renderer.create(<Opinion />)
  expect(tree).toMatchSnapshot()
})