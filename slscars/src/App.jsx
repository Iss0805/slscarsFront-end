import './App.css'
import Home from './components/pages/HomeSlscars'
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import NavBar from './components/Layout/NavBarslscars';
import Container from './components/Layout/Containerslscars';
import CreateUserColab from './components/CreateUserColab';
import CreateCarssls from './components/pages/CreateCarssls';
import ListarCarros from './components/pages/ListaCars';


function App() {

  return (
    <>
    

    <BrowserRouter>
      
      <Container>
        <Routes>

           <Route path='/' element={<NavBar/>}>
              <Route path='/' element={<Home/>}/>
              <Route path='/Createcarssls' element={<CreateCarssls/>}/>
              <Route path='/CreateUserColab' element={<CreateUserColab/>}/> 
              <Route path='/ListaCars' element={<ListarCarros/>}/> 


        </Route>

        </Routes>

      </Container>

    </BrowserRouter>















    </>
  )
}

export default App
