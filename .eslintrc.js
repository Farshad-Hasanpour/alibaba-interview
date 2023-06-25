module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	parserOptions: {
		parser: '@babel/eslint-parser',
		requireConfigFile: false
	},
	extends: [
		'@nuxtjs',
		'plugin:nuxt/recommended'
	],
	plugins: [],
	// add your custom rules here
	rules: {
		"no-tabs": ["error", {"allowIndentationTabs": true}],
		"space-before-function-paren": "off",
		"indent": "off",
		"space-before-blocks": "off",
		"semi": "off",
		"key-spacing": "off",
		"keyword-spacing": "off",
		"comma-dangle": "off",
		"no-tabs": "off",
		"curly": "off",
		"spaced-comment": "off",
		"curly": "off",
		"quotes": "off",
		"arrow-parens": "off",
		"vue/html-indent": "off",
		"vue/singleline-html-element-content-newline": "off",
		"object-shorthand": "off"
	}
}
