import { VStack, HStack, Center, Spinner } from '@chakra-ui/react';
import Current from './Current';
import Forecast from './Forecast';
import { useGetWeather, useGetForecastWeather } from '../queries/Queries';
import { WeatherQueryInfo } from '../types/WeatherQuery';

const WeatherCard = ({ latitude, longitude }: WeatherQueryInfo) => {
	const { isLoading: weatherDataLoading, data: weatherData } = useGetWeather({
		latitude,
		longitude,
	});

	const { isLoading: forecastWeatherDataLoading, data: forecastWeatherData } =
		useGetForecastWeather({ latitude, longitude });

	return forecastWeatherDataLoading || weatherDataLoading ? (
		<Center h='100%'>
			<Spinner />
		</Center>
	) : (
		<VStack
			bg='white'
			spacing='4px'
			h='100%'
			w={['100%', '100%', '100%', '50%']}
			m='auto'
			p='4px'
			boxShadow='2xl'
			borderRadius='5px'
		>
			<Current
				temperature={weatherData?.data.main.temp}
				description={weatherData?.data.weather[0].main}
				icon={weatherData?.data.weather[0].icon}
			/>
			<HStack
				w='100%'
				h='75%'
				spacing='4px'
				overflow='auto'
				className='forecastContainerScrollBar'
				pb={['1px', '0px']}
			>
				{forecastWeatherData?.data.daily
					.slice(1, 5)
					.map((item: any, index: number) => (
						<Forecast
							key={index}
							day={item.dt}
							temperature={item.temp.day}
							icon={item.weather[0].icon}
						/>
					))}
			</HStack>
		</VStack>
	);
};

export default WeatherCard;
