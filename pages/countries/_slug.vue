<template>
	<div>
		{{ country }}
	</div>
</template>

<script>
export default {
	name: "Country",
	async asyncData({ error, $countryService }){
		try{
			const country = await $countryService.getCountryDetails({
				code: 'IRQ'
			});
			return {
				country
			};
		}catch(err){
			if(process.env.NODE_ENV === 'development') console.error(err);
			error({
				status: err.response ? parseInt(err.response.status) : 500,
				msg: 'There was some error in fetching country details.'
			});
		}
	},
	data(){
		return {
			country: {}
		}
	}
}
</script>

<style scoped>

</style>
