import { render, screen } from '@testing-library/react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { UseEffectComponent } from './UseEffectComponent'

const server = setupServer(
  rest.get('/api', (req, res, ctx) => {
    return res(ctx.json({ name: 'Gabe' }))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test("gets the data", async () => {
  render(<UseEffectComponent />)

  const output = await screen.findByRole("contentinfo")
  expect(output).toHaveTextContent('Gabe')
})