import { Provider } from 'react-redux';
import './App.css';
import Body from './Components/Body';
import Header from './Components/Header';
import store from './utils/store';
// import SideBar from './Components/SideBar';
// import Side from './Components/Side';

import {  RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './Components/MainContainer';
import WatchPage from './Components/WatchPage';
import Demo from './Components/Demo';


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
        <div className='bg-black text-gray-50 h-full '>

          
            <Header/>
            {/* <div className='absolute  '>
            <SideBar />
            </div> */}
            <RouterProvider router={appRouter}/>
       
        </div>
        </Provider>


  );
}

export default App;
