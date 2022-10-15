import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';
import Register from './components/Register/Register';
import Main from './layout/Main';
import Private from './routes/Private';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element:<Private> <Home></Home></Private>
        },
        {
          path: '/orders',
          element: <Private> <Orders></Orders> </Private>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element:<Register></Register>
        },
       
      ]
    }
  ])
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
