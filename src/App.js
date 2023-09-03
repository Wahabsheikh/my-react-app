import AppContext from "./utils/Context";
import route from './route'
import { RouterProvider } from 'react-router-dom';



function App() {
  return (<>
 
  <AppContext>
     <RouterProvider router={route} />
  </AppContext>
     
  </>);
}

export default App;
