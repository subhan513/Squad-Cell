import Layout from './components/Layout'
import {BrowserRouter,Link,Route,Routes} from "react-router-dom"
import Home from './pages/Home/home'
import './App.css'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Support from './pages/Support'
// import BreadCrumbs from './components/BreadCrumbs'
function App() {
 

  return (
    <>
    <BrowserRouter>
    {/* <BreadCrumbs/> */}
    <Routes>
      <Route path='/'  element={<Layout/>}>
      <Route index element={<Home />} />
      <Route  path='/privacy' element={<Privacy/>}/>
      <Route  path='/terms' element={<Terms/>}/>
      <Route  path='/support' element={<Support/>}/>
      </Route>
    </Routes>
    </BrowserRouter>

     
    </>
  )
}

export default App
