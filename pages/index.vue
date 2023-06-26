<template>
	<div>
		<pre>{{ shownCountries }}</pre>
	</div>
</template>

<script>
export default {
	name: 'IndexPage',
	async asyncData({ error, query, $countryService }){
		const {
			region,
			sort_field: sortField,
			sort_type: sortType,
			search
		} = query;

		//TODO: !! better to validate queries

		try{
			const allCountries = await $countryService.getAllCountries();
			return {
				allCountries,
				filter: {
					region: region || null,
					query: search || ''
				},
				sort: {
					field: sortField || 'name',
					type: sortType || 'ASC'
				}
			};
		}catch(err){
			if(process.env.NODE_ENV === 'development') console.error(err);
			error({
				status: err.response ? parseInt(err.response.status) : 500,
				msg: 'There was some error in fetching countries.'
			});
		}
	},
	computed:{
		allRegions(){
			return Array.from(
				new Set(
					this.allCountries.map(country => country.region)
				)
			)
		},
		shownCountries(){
			let result = this.allCountries;

			result = result.filter(country => {
				// filter by region
				if(this.filter.region && country.region !== this.filter.region) return false;
				// filter by search term
				const query = this.filter.query?.toLowerCase() || '';
				return !(
					query &&
					!country.name.common.toLowerCase().includes(query) &&
					!country.name.official.toLowerCase().includes(query) &&
					!country.name.nativeName.toLowerCase().includes(query)
				)
			});

			const coef = this.sort.type === 'ASC' ? 1 : -1;
			result.sort((a, b) => {
				let result = 0;
				if(this.sort.field === 'name'){
					result = a.name.common.localeCompare(b.name.common);
				}else if(this.sort.field === 'population'){
					if(a.population > b.population) result = 1;
					else if(a.population < b.population) result = -1;
				}
				return result * coef;
			})

			return result
		}
	}
}
</script>
