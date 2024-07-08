import { Route, Routes } from 'react-router-dom'
import Header from './components/header'
import SignupForm from './pages/register'
import Login from "./pages/login/Login"
import Home from './pages/home/Home'
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<SignupForm />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App