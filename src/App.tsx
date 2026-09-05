import { Routes, Route } from 'react-router';
import './App.css';
import Home from './pages/Home';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			{/*<Route path={getAboutMeRoute()} element={} />*/}
		</Routes>
	);
}

export default App;
