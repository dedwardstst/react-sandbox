import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import ContainerQueries from './pages/container-queries/container-queries';

const routes = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <h1>Sandbox!</h1>
        <ul>
          <li>
            <a href="/container-queries">Container Queries</a>
          </li>
        </ul>
      </>
    ),
  },
  {
    path: 'container-queries',
    element: <ContainerQueries />,
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
