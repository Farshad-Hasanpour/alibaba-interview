<template>
	<div class="container">
		<nav class="navigation">
			<nuxt-link to="/">
				<button v-wave type="button" class="back-btn normal">
					<CIcon
							:name="$store.state.icons.back"
							color="var(--color-input)"
					/>
					<span class="back-btn__text">Back</span>
				</button>
			</nuxt-link>
		</nav>
		{{ country }}
	</div>
</template>

<script>
export default {
	name: "Country",
	async asyncData({ error, route, $countryService }){
		try{
			const country = await $countryService.getCountryDetails({
				code: route.params.slug
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
	.navigation{
		width: 100%;
		padding: 64px 16px;
	}
	.back-btn__text{
		color: var(--color-input);
		padding-left: 8px;
		padding-right: 8px;
	}
</style>
