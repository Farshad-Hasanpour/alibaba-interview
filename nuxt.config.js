export default {
	env: {
		'GTAG_MEASUREMENT_ID': process.env.NODE_ENV === 'production' ? 'G-RR55G5KZFE' : ''
	},
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'alibaba-interview',
		htmlAttrs: {
			lang: 'en'
		},
		meta: [
			{charset: 'utf-8'},
			{name: 'viewport', content: 'width=device-width, initial-scale=1'},
			{hid: 'description', name: 'description', content: ''},
			{name: 'format-detection', content: 'telephone=no'}
		],
		link: [
			{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
		],
		bodyAttrs: {
			'data-dark': ''
		}
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		'~/assets/style/main.scss',
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		'~/plugins/service.js',
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/eslint
		'@nuxtjs/eslint-module',
		'@nuxtjs/google-fonts'
	],

	googleFonts: {
		families: {
			'Nunito Sans': {
				wght: [300, 600, 800],
			}
		},
		display: 'swap'
	},

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios',
		'v-wave/nuxt'
	],

	loading: {
		color: '#00b38c',
		height: '4px'
	},

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {
		// Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
		proxy: true
	},
	proxy: {
		'/api/': {
			target: 'https://restcountries.com/v3.1/',
			pathRewrite: {'^/api': ''}
		}
	},
	server:{
		host: '0.0.0.0',
		port: 3000
	},
	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {}
}
