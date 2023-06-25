<template>
	<div>

	</div>
</template>

<script>
export default {
	name: 'IndexPage',
	async asyncData({ error, $countryService }){
		try{
			const allCountries = await $countryService.getAllCountries();
			return {
				allCountries
			};
		}catch(err){
			error({
				status: err.response ? parseInt(err.response.status) : 500,
				msg: 'There was some error in fetching countries.'
			});
		}
	},
	data(){
		return {
			allCountries: []
		}
	}
}
</script>
