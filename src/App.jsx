import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { BeerListScreen } from './screens/BeerListScreen'
import { BeerDetailsScreen } from './screens/BeerDetailsScreen'

const router = createBrowserRouter([
  { path: '/', element: <BeerListScreen /> },
  { path: '/beer/:id', element: <BeerDetailsScreen /> },
])

const App = () => (
  <main>
    <RouterProvider router={router} />
  </main>
)

export default App
