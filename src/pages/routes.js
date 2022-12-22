import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './home'
import { Pokemon } from './pokemon-details'

const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route exact path='/pokemon/:name' element={<Pokemon />}/>
        </Routes>
    </BrowserRouter>
)

export { AppRoutes }