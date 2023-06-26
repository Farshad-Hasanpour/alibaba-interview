export default {
	beforeMount(){
		if(window.matchMedia && !window.matchMedia('(prefers-color-scheme: dark)').matches){
			this.$store.commit('toggleDarkMode')
		}
	}
}
