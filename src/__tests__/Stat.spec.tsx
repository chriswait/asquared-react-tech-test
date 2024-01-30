import { screen, render } from '@testing-library/react'

import { Stat } from '../components/Stat'

test('Stats missing their label or value renders nothing', () => {
  const { container } = render(<Stat />)
  expect(container.firstChild).toBeNull()
})

test('Stats renders their label (plus semicolon) and value', () => {
  render(<Stat label="test label" value="test value" />)
  expect(screen.getByText('test label:')).toBeTruthy()
  expect(screen.getByText('test value')).toBeTruthy()
})
