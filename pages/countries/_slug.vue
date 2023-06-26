<template>
	<div class="container">
		<nav class="navigation">
			<nuxt-link to="/" class="back-link" :draggable="false">
				<button v-wave type="button" class="back-btn normal">
					<CIcon
							:name="$store.state.icons.back"
							color="var(--color-input)"
					/>
					<span class="back-btn__text">Back</span>
				</button>
			</nuxt-link>
		</nav>
		<div class="details">
			<div class="details__flag">
				<img class="flag" :src="country.flag.src" :alt="country.flag.alt" :draggable="false">
			</div>
			<div class="details__more-info info">
				<h3 class="info__name">{{country.name.common}}</h3>
				<div class="extra">
					{{ country }}
				</div>
				<div class="borders">
					<span class="borders__title">Border Countries:</span>
					<nuxt-link
							v-for="border in country.borders"
							:key="border.cca3"
							:to="`/countries/${border.cca3}`"
							:draggable="false"
					>
						<button type="button" class="border-btn normal">
							{{ border.name }}
						</button>
					</nuxt-link>
				</div>
			</div>
		</div>
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

<style lang="scss" scoped>
@use "~/assets/style/variables" as *;

.navigation{
	width: 100%;
	padding: 64px 32px 32px;
	display: flex;
}
.back-btn__text{
	color: var(--color-input);
	padding-left: 8px;
	padding-right: 8px;
}
.details{
	width: 100%;
	padding: 32px;
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	grid-gap: 64px;
}
.details__flag{
	grid-column: span 12;
	height: auto;
}
.flag{
	width: 100%;
	height: auto;
}
.details__more-info{
	grid-column: span 12;
}

.info__name{
	font-size: 26px;
	font-weight: 800;
}

.extra{
	overflow: hidden;
}

.borders{
	display: flex;
	flex-wrap: wrap;
	align-items: center;
}

.borders__title{
	width: 100%;
	margin-right: 8px;
	margin-bottom: 16px;
}

.border-btn{
	margin-right: 8px;
	margin-bottom: 16px;
	color: var(--color-input);
}

@media #{map-get($display-breakpoints, 'md-and-up')} {
	.details__flag{
		grid-column: span 6;
	}
	.details__more-info{
		grid-column: span 6;
	}

	.borders__title{
		width: auto;
	}
}
</style>
