import './styles/main.css'
import './styles/reset.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { NavBar } from './components/navBar/NavBar'
import Footer from './components/footer/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contacts from './pages/Contacts'
import Project from './pages/Project'

import ScrollToTop from './utils/ScrolltoTop'


function App() {
return (
	<div className='App'>

		<Router>

			<ScrollToTop/>

			<NavBar />

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/projects' element={<Projects />} />
				<Route path='/contacts' element={<Contacts />} />
				<Route path='/project/:id' element={<Project />} />
			</Routes>

			<Footer />

		</Router>

	</div>
)
}

export default App
