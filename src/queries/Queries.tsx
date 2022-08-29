import axios from 'axios';
import { useQuery } from 'react-query';
import { WeatherQueryInfo } from '../types/WeatherQuery';

const KEY = process.env.REACT_APP_WEATHER_API_KEY;
const CURRENTWEATHERURL = process.env.REACT_APP_CURRENT_URL;
const FORECASTWEATHER = process.env.REACT_APP_FORECAST_URL;

//------------------------CURRENT WEATHER QUERY------------------------------------

const getCurrentWeather = async ({ longitude, latitude }: WeatherQueryInfo) => {
	const currentWeather = await axios.get(
		`${CURRENTWEATHERURL}/?lat=${latitude}&lon=${longitude}&units=metric&appid=${KEY}`
	);
	return currentWeather;
};

export const useGetWeather = ({ longitude, latitude }: WeatherQueryInfo) => {
	return useQuery(
		['currentWeather'],
		() => getCurrentWeather({ longitude, latitude }),
		{
			retry: 0,
			refetchOnWindowFocus: false,
			enabled: !!latitude && !!longitude,
		}
	);
};

//------------------------FORECAST WEATHER QUERY------------------------------------

const getForecastWeather = async ({
	longitude,
	latitude,
}: WeatherQueryInfo) => {
	const forecastWeather = await axios.get(
		`${FORECASTWEATHER}?lat=${latitude}&lon=${longitude}&units=metric&exclude=current,hourly,minutely,alerts&appid=${KEY}`
	);
	return forecastWeather;
};

export const useGetForecastWeather = ({
	longitude,
	latitude,
}: WeatherQueryInfo) => {
	return useQuery(
		['forecastWeather'],
		() => getForecastWeather({ longitude, latitude }),
		{
			retry: 0,
			refetchOnWindowFocus: false,
			enabled: !!latitude && !!longitude,
		}
	);
};
