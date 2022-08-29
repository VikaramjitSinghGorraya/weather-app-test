import { Tab, Tabs, TabList, TabPanels, TabPanel } from '@chakra-ui/react';
import WeatherCard from '../components/WeatherCard';

const Home = () => {
	return (
		<Tabs isLazy w='100%' h='100%' align='center' variant='unstyled'>
			<TabList w='fit-content'>
				<Tab tabIndex={1}>OTTAWA</Tab>
				<Tab>MOSCOW</Tab>
				<Tab>TOKYO</Tab>
			</TabList>

			<TabPanels h='80%'>
				<TabPanel h='100%'>
					<WeatherCard latitude={45.421532} longitude={-75.697189} />
				</TabPanel>
				<TabPanel h='100%'>
					<WeatherCard latitude={55.755825} longitude={37.617298} />
				</TabPanel>
				<TabPanel h='100%'>
					<WeatherCard latitude={35.689487} longitude={139.691711} />
				</TabPanel>
			</TabPanels>
		</Tabs>
	);
};

export default Home;
