<template>
	<div>
		<Nuxt />
	</div>
</template>

<script>
import colorScheme from "@/mixins/color-scheme";

export default {
	name: 'Empty',
	mixins: [colorScheme]
}
</script>

<style>
@import '@mdi/font/css/materialdesignicons.min.css';
</style>
