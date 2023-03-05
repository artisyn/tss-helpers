import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './pages/Home/Home';
import Opt from './pages/Opt/Opt';
import NamesComparison from './pages/NamesComparison/NamesComparison';

function App() {
	return (
		<div className="App">
			<Nav />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/names-comparison" element={<NamesComparison />} />
				<Route path="/opt" element={<Opt />} />
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</div>
	);
}

export default App;
