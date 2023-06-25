export default function($axios) {
	return {
		getCountries({
			name = null
	  	} = {}){
			return $axios.get(`/api/${!name ? 'all' : 'name/' + name}`).then(res => {
				return res.data;
			})
		}
	}
}
