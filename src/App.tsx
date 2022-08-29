import './App.css';
import { VStack } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Error from './pages/Error';

function App() {
	return (
		<VStack bgColor='brand.primaryBlue' h='100vh' minW='100%'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='*' element={<Error />} />
			</Routes>
		</VStack>
	);
}

export default App;
