export default function($axios) {
	return {
		getAllCountries({
			fields = 'cca3,name,population,region,capital'
		} = {}){
			return $axios.get(`/api/all`, {
				params: {
					fields
				}
			}).then(res => {
				return res.data.map(country => ({
					...country,
					capital: country.capital && country.capital[0] ? country.capital[0] : 'N/A',
					population: !country.population ? 'N/A' : country.population.toLocaleString()
				}));
			})
		}
	}
}
