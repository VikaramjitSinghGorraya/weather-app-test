import { extendTheme } from '@chakra-ui/react';
import colorTheme from './Color';
import tabTheme from './components/Tab';
import textTheme from './components/Text';
const overrides = {
	colors: { ...colorTheme },

	textStyles: {
		...textTheme,
	},

	components: {
		Tabs: {
			...tabTheme,
		},
		Text: {
			...textTheme,
		},
	},
};

export default extendTheme(overrides);
