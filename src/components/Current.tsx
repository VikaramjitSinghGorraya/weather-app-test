import { VStack, Text, Image, Stack } from '@chakra-ui/react';
import { CurrentWeatherDisplay } from '../types/WeatherDisplay';

const Current = ({ description, temperature, icon }: CurrentWeatherDisplay) => {
	return (
		<VStack
			bgColor='brand.primaryBlue'
			w='100%'
			h='100%'
			justifyContent='center'
			alignItems='center'
			borderRightRadius='5px'
			borderLeftRadius='5px'
		>
			<Text textStyle='currentDay'>Today</Text>
			<Stack
				direction={['column', 'row']}
				spacing={['-2', '2', '2']}
				alignItems='center'
			>
				<Image
					className='icon'
					objectFit='cover'
					src={`icons/${icon}.svg`}
					alt='weatherIcon'
					h='7rem'
					w='6rem'
				/>
				<VStack
					w='100%'
					h='100%'
					alignItems={['center', 'flex-start']}
					spacing={-3}
				>
					<Text textStyle='currentTemperature'>{Math.round(temperature)}°</Text>
					<Text textStyle='currentDay'>{description}</Text>
				</VStack>
			</Stack>
		</VStack>
	);
};

export default Current;
