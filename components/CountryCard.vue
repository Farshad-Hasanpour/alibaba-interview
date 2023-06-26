<template>
	<nuxt-link v-wave :to="`/countries/${country.cca3}`" :draggable="false">
		<div class="country">
			<img
					ref="flagImage"
					class="country__flag"
					:src="require('@/assets/img/flag-placeholder.png')"
					:data-main-src="country.flag.src"
					:alt="country.flag.alt || ''"
					:draggable="false"
			>
			<div class="country-details">
				<h3 class="country-details__name">{{ country.name.common }}</h3>
				<div v-for="field in fields" :key="field" class="country-fields">
					<span class="country-fields__title">{{ field }}: </span>
					<span class="country-fields__value">
						{{
							!country[field]
								? 'N/A'
								: typeof country[field] !== 'number'
									? country[field]
									: country[field].toLocaleString()
						}}
					</span>
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
