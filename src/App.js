import { Provider } from 'react-redux';
import './App.css';
import Body from './Components/Body';
import Header from './Components/Header';
import store from './utils/store';
// import SideBar from './Components/SideBar';
// import Side from './Components/Side';

import {  Route, Router, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import MainContainer from './Components/MainContainer';
import WatchPage from './Components/WatchPage';
import Demo from './Components/Demo';
import SearchResults from './Components/SearchResults';
import Login from './Components/Login';
import History from './Components/History';


function App() {

  const appRouter=createBrowserRouter([
    {
      path: "/",
      element:<Body/>,
      children:[
   
        {
        path:"/",
        element:<MainContainer/>
      },
      {
        path:"watch",
        element:<WatchPage/>
      },
      {
        path:"demo",
        element:<Demo/>
      },
      {
        path:"search",
        element:<SearchResults/>
      },

      {
        path:"creditional",
        element:<Login/>
      },

      {
        path:"history",
        element:<History/>
      },
     
    ]
    }
  ])
  return (

        //  1.Head
        //   2.Body
        //     *sidebar
        //       -menu items
        //     *main container
        //       -button List
        //       -video Container
        //        --video Card

        


        <Provider store={store}>

        <div className='bg-black text-gray-50 h-full font-roboto'>
        <RouterProvider router={appRouter}>



            {/* <div className='absolute  '>
            <SideBar />
            </div> */}

</RouterProvider>

        </div>

        </Provider>


        

  );
}

export default App;
