import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import ImageGallery from '../imageGallery/ImageGallery'
import { render } from '@testing-library/react'
import { testArr } from '../../__tests__/Exclusive.test'

it('render imageGallery component without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ImageGallery />, div)
})

it('testing imageGallery with props', () => {
  const { getByTestId } = render(<ImageGallery testArr={testArr} />)
  expect(getByTestId('imageGalleryId')).toBeTruthy()
})
it('maching snapshot', () => {
  const tree = renderer.create(<ImageGallery />)
  expect(tree).toMatchSnapshot()
})