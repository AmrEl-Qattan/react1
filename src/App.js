import logo from './logo.svg';
import './App.css';
import LayOut from './LayOut/LayOut';
import {createBrowserRouter , RouterProvider}from 'react-router-dom'
import Home from './Home/Home';
import About from './About/About';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';
let routers = createBrowserRouter([{
  path:"",element:<LayOut/>,children:[
    {index:true,element:<Home/>},
    {path:"home",element:<Home/>},
    {path:"about",element:<About/>},
    {path:"portfolio",element:<Portfolio/>},
    {path:"contact",element:<Contact/>}
  ]
}])

function App() {
  return (
    <>
 
  <RouterProvider router={routers}></RouterProvider>
  


    </>

  );
}

export default App;
