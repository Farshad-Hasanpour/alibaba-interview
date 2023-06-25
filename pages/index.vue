<template>
	<div>
		<pre>
			{{allCountries}}
		</pre>
	</div>
</template>

<script>
export default {
	name: 'IndexPage',
	async asyncData({ error, $countryService }){
		try{
			const allCountries = await $countryService.getCountries();
			return {
				allCountries
			};
		}catch(err){
			if(process.env.NODE_ENV === 'development') console.error(err);
			error({
				status: err.response ? parseInt(err.response.status) : 500,
				message: 'There was some error in fetching countries.'
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
