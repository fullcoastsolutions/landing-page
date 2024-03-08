/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	mode: 'jit',
	theme: {
		extend: {
			colors: {
				primary: '#FF9F1C',
				secondary: '#FFBF69',
				tertiary: '#2EC4B6',
				quaternary: '#CBF3F0',
				'black-100': '#21070f',
				'black-200': '#000000',
				'white-100': '#f3f3f3',
			},
			boxShadow: {
				card: '0px 35px 120px -15px #211e35',
			},
			screens: {
				xs: '450px',
			},
			backgroundImage: {
				'hero-pattern': "url('/src/assets/Stuck at Home Home Office.png')",
				'contact-pattern': "url('/src/assets/contact-background.png')",
				'about-thumbnail':
					"url('/src/assets/pexels-mikael-blomkvist-6476260.jpg')",
			},
		},
	},
	plugins: [],
};
