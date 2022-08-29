import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import theme from './theme';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient();
root.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<ChakraProvider theme={theme}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</ChakraProvider>
		</QueryClientProvider>
	</React.StrictMode>
);
