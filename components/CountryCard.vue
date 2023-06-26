<template>
	<nuxt-link :to="`/countries/${country.cca3}`" :draggable="false">
		<div class="country">
			<img class="country__flag" :src="country.flag.src" :alt="country.flag.alt">
			<div class="country-details">
				<h3 class="country-details__name">{{country.name.common}}</h3>
				<div class="country-fields" v-for="field in fields" :key="field">
					<span class="country-fields__title">{{field}}: </span>
					<span class="country-fields__value">{{country[field]}}</span>
				</div>
			</div>
		</div>
	</nuxt-link>
</template>

<script>
export default {
	name: "CountryCard",
	props: {
		country: { required: true, type: Object }
	},
	computed: {
		fields(){
			return ['population', 'region', 'capital']
		}
	}
}
</script>

<style lang="scss" scoped>
	.country{
		display: flex;
		flex-direction: column;
		border-radius: 4px;
		overflow: hidden;
		background-color: var(--color-element);
		color: var(--color-text);
	}

	.country__flag{
		width: 100%;
		height: auto;
		object-fit: cover;
		aspect-ratio: 5 / 3;
		border-bottom: 1px solid var(--color-line);
	}
	.country-details{
		padding: 26px 12px;

	}

	.country-details__name{
		margin-top: 0;
		margin-bottom: 19px;
		font-size: 19px;
		font-weight: 800;
	}

	.country-fields__title{
		font-weight: 800;
	}
</style>
