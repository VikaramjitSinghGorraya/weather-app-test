import { VStack, Text, Image } from '@chakra-ui/react';
import { ForecastWeatherDisplay } from '../types/WeatherDisplay';

const Forecast = ({ day, temperature, icon }: ForecastWeatherDisplay) => {
	return (
		<VStack
			justifyContent='center'
			minH='100%'
			minW={['50%', '33%', '24.5%']}
			bgColor='brand.primaryBlue'
		>
			<Text textStyle='forecastDay' fontWeight='0.4'>
				{new Date(day * 1000).toLocaleDateString('en', { weekday: 'long' })}
			</Text>
			<Image
				className='icon'
				objectFit='cover'
				h='3rem'
				w='3rem'
				src={`icons/${icon}.svg`}
				alt='weatherIcon'
			/>
			<Text textStyle='forecastTemperature'>{Math.round(temperature)}°</Text>
		</VStack>
	);
};

export default Forecast;
