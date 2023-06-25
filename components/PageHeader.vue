<template>
	<div class="top-bar">
		<h1 class="top-bar__title">Where in the world?</h1>
		<button v-wave class="top-bar__theme" @click="$store.commit('toggleDarkMode')">
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
	.top-bar{
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 64px;
	}
</style>
