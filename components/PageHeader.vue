<template>
	<div class="top-bar">
		<h1 class="top-bar__title">Where in the world?</h1>
		<button v-wave class="top-bar__theme normal" @click="$store.commit('toggleDarkMode')">
			<CIcon :name="$store.state.isDark ? $store.state.icons.lightMode : $store.state.icons.darkMode"/>
			<span>{{ $store.state.isDark ? 'Light Mode' : 'Dark Mode' }}</span>
		</button>
	</div>
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

	.top-bar__title{
		font-size: 16px;
		font-weight: 600;
	}
	.top-bar__theme{
		font-size: 14px;
		padding: 4px 12px;
		border-radius: 4px;
	}

	@media #{map-get($display-breakpoints, 'sm-and-up')} {
		.top-bar{
			padding-left: 32px;
			padding-right: 32px;
		}

		.top-bar__title{
			font-size: 28px;
		}
	}
</style>
