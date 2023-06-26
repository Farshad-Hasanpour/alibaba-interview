<template>
	<nuxt-link :to="`/countries/${country.cca3}`">
		{{country.name.common}}
	</nuxt-link>
</template>

<script>
export default {
	name: "CountryCard",
	props: {
		country: { required: true, type: Object }
	}
}
</script>

<style scoped>

</style>
