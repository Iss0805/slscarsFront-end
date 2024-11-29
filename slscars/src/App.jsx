import './App.css'
import Home from './components/pages/HomeSlscars'
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import NavBar from './components/Layout/NavBarslscars';
import Container from './components/Layout/Containerslscars';
import CreateUserColab from './components/pages/CreateUserColab';
import CreateCarssls from './components/pages/CreateCarssls';
import CardCars from './components/CardCars';
import ListCars from './components/pages/ListCars';
import DetailCarro from './components/pages/DetailCars.jsx';
import UpdateCars from './components/pages/UpdateCars.jsx';
import DeleteCars from './components/pages/DeleteCars.jsx';

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
              <Route path='/ListCars' element={<ListCars/>}/>
              <Route path='/CardCars' element={<CardCars/>}/> 
              <Route path='/detailCarros/:id' element={<DetailCarro />} />
              <Route path='/UpdateCars/:id' element={<UpdateCars />} />
              <Route path='/DeleteCars/:id' element={<DeleteCars />} />


        </Route>

        </Routes>

      </Container>

    </BrowserRouter>















    </>
  )
}

export default App
