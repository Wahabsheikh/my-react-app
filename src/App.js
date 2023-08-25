import AppContext from "./utils/Context";
import route from './route'
import { RouterProvider } from 'react-router-dom';



function App() {
  return (<>
 
  <AppContext>
     <RouterProvider basename="/React-app" router={route} />
  </AppContext>
     
  </>);
}

export default App;
