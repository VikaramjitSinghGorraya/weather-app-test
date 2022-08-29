type WeatherInfo = {
	temperature: number;
	icon: string;
};
export type ForecastWeatherDisplay = WeatherInfo & {
	day: number;
};

export type CurrentWeatherDisplay = WeatherInfo & {
	description: string;
};
