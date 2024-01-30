import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { BeerListScreen } from './screens/BeerListScreen'
import { BeerDetailsScreen } from './screens/BeerDetailsScreen'

const router = createBrowserRouter([
  {
    path: '/',
    element: <BeerListScreen />,
  },
  {
    path: '/beer/:id',
    element: <BeerDetailsScreen />,
  },
])

const App = () => {
  return (
    <>
      <h1>Beers!</h1>
      <RouterProvider router={router} />
    </>
  )
}

export default App
