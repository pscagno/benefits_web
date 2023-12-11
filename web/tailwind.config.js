const defaultConfig = require('tailwindcss/defaultConfig')
const formsPlugin = require('@tailwindcss/forms')
/** @type {import('tailwindcss/types').Config} */
const config = {
	content: ['index.html', 'src/**/*.tsx'],
	theme: {
		fontFamily: {
			sans: ['Inter', ...defaultConfig.theme.fontFamily.sans],
			TitilliumWeb: ['Titillium Web', ...defaultConfig.theme.fontFamily.sans]
		},
		extend: {
			fontFamily: {
				sans: ['Inter', ...defaultConfig.theme.fontFamily.sans]
			},
			boxShadow: {
				filterShadow: '4px 4px 10px 0px rgba(0, 0, 0, 0.15)'
			},
			colors: {
				benefits: {
					DEFAULT: '#003057',
					Gastronomia: '#FF4351',
					ProductosBancarios: '#C9B787',
					Salud: '#FF8CC5',
					Celebraciones: '#00A6E8',
					Campañas: '#00AC69',
					Balance: '#FFC629'
				},
				primary: {
					DEFAULT: '#003057',
					description: '#131A45'
				}
			},
			screens: {
				sm: { min: '0px', max: '767px' },
				md: { min: '768px', max: '1023px' },
				lg: { min: '1024px', max: '1280px' },
				lp: { min: '1280px', max: '1500px' },
				xl: { min: '1500px' }
			},
			minWidth: {
				button: '250px'
			}
		}
	},
	experimental: { optimizeUniversalDefaults: true },
	plugins: [formsPlugin]
}
module.exports = config
