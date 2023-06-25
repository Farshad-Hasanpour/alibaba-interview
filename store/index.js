const icons = {
	darkMode: 'mdi-moon-waning-crescent',
	lightMode: 'mdi-weather-sunny',
};

export const strict = true;
export const state = () => ({
	icons,
	isDark: false
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
