const icons = {
	darkMode: 'mdi-weather-night',
	lightMode: 'mdi-weather-sunny',
	search: 'mdi-magnify',
	asc: 'mdi-chevron-down',
	close: 'mdi-close',
	back: 'mdi-arrow-left',
	github: 'mdi-github'
};

export const strict = true;
export const state = () => ({
	icons,
	isDark: true
});
export const mutations = {
	toggleDarkMode(state){
		if(!document) return;

		state.isDark = !state.isDark;

		if(state.isDark) document.body.setAttribute('data-dark', '')
		else document.body.removeAttribute('data-dark')
	},
};

export const actions = {
	async nuxtServerInit(){

	},
	toggleDarkMode({ commit }){
		commit('toggleDarkMode');
	}
};
