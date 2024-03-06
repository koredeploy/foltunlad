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
import AllProduct from "./pages/external/allproduct/AllProduct";
import { ProductProvider } from "./context/ProductContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      
      <Route element={<RootLayout/>}>
        <Route index path="/" element={<HomePage/>} />
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/products" element={<AllProduct/>}/>
      </Route>
      
      {/* <Route path="*" element={<ErrorPage />} />  */}
    </>
  )
);

function App() {
  return <RouterProvider router={router} />; 
}

export default App;
