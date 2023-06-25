export default function($axios) {
	return {
		getAllCountries({
			fields = 'cca3,name,population,region,capital,flags'
		} = {}){
			return $axios.get(`/api/all`, {
				params: {
					fields
				}
			}).then(res => {
				return res.data.map(country => ({
					...country,
					capital: country.capital && country.capital[0] ? country.capital[0] : null,
					population: !country.population ? null : country.population.toLocaleString()
				}));
			})
		},
		getCountryDetails({
			fields = 'cca3,name,population,region,subregion,capital,flags,tld,borders',
			code = ''
		} = {}){
			if(!code) throw new Error('code is required');
			return $axios.get(`/api/alpha/${code}`, {
				params: {
					fields,
				}
			}).then(async res => {
				const country = res.data;
				return {
					...country,
					capital: country.capital && country.capital[0] ? country.capital[0] : null,
					population: !country.population ? null : country.population.toLocaleString(),
					borders: !country.borders
						? null
						: await this.getCountryNames({ codes: country.borders.join(',') })
				};
			})
		},
		getCountryNames({
			fields = 'cca3,name',
			codes = ''
		} = {}){
			if(!codes) throw new Error('codes are required');
			return $axios.get(`/api/alpha`, {
				params: {
					fields,
					codes
				}
			}).then(res => {
				return res.data.map(country => ({
					...country,
					name: country.name.common
				}));
			})
		}
	}
}
