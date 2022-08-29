const tabTheme = {
	variants: {
		unstyled: {
			tab: {
				fontSize: ['1.1rem', '1.5rem'],
				maxWidth: '33%',
				minWidth: '30%',
				_selected: {
					color: '#76E4F7',
					fontWeight: 'bold',
				},
			},
		},
	},

	defaultProps: {
		variants: 'unstyled',
	},
};
export default tabTheme;
