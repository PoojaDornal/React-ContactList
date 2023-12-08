
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

//  Componets
import NavBar from './Component/Navbar/navbar';
import Home from './Component/Home/home';

//  pages
import AddToContact from './Pages/AddtoContact/AddToContact';
import Edit from './Pages/EditContact/EditContact';

//  stateManagement Library
import CustomeContext from './context';

// Toastify to disply the notification in the react-app
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

// Importing css file
import './App.css';

function App() {

  //routes
  const router = createBrowserRouter([
    {path: '/', element: <NavBar /> , children: [
        {path: '/', element: <Home />},
        {path: 'add-contact', element: <AddToContact />},
        {path: 'edit-contact/:id', element: <Edit />}
    ] }
  ]);

  return (
    <CustomeContext>
       <ToastContainer />
    <div className="App">
        {/* Assigning Routes */}
        <RouterProvider router={router} />     
    </div>
    </CustomeContext> 
  );
}

export default App;
