<template>
	<header class="top-bar">
		<nuxt-link to="/" :draggable="false">
			<h1 class="title-text">where in the world?</h1>
		</nuxt-link>

		<button v-wave type="button" class="normal" @click="$store.commit('toggleDarkMode')">
			<CIcon :name="$store.state.isDark ? $store.state.icons.lightMode : $store.state.icons.darkMode" />
			<span>{{ $store.state.isDark ? 'Light Mode' : 'Dark Mode' }}</span>
		</button>
	</header>
</template>

<script>
export default {
	name: "PageHeader"
}
</script>

<style lang="scss" scoped>
	@use "~/assets/style/variables" as *;

	.top-bar{
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 64px;
		padding-left: 4px;
		padding-right: 4px;
		background-color: var(--color-element);
	}

	.title-text{
		font-size: 16px;
		font-weight: 600;
		margin: 0;
		text-transform: capitalize;
		color: var(--color-text)
	}

	@media #{map-get($display-breakpoints, 'sm-and-up')} {
		.top-bar{
			padding-left: 32px;
			padding-right: 32px;
		}

		.title-text{
			font-size: 28px;
		}
	}
</style>
