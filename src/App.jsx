import { 
  Route, 
  RouterProvider, 
  createBrowserRouter,
  createRoutesFromElements  
} from "react-router-dom";

import RootLayout from "./layout/rootlayout/RootLayout";
import HomePage from "./pages/external/home/HomePage";
import ContactPage from "./pages/external/contact/ContactPage";
import AboutPage from "./pages/external/about/AboutPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<RootLayout/>}>
        <Route index path="/" element={<HomePage/>} />
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>

       
      </Route>
      
      {/* <Route path="*" element={<ErrorPage />} />  */}
    </>
  )
);

function App() {
  return <RouterProvider router={router} />; 
}

export default App;
