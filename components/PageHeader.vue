<template>
	<header class="top-bar">
		<nuxt-link to="/" :draggable="false">
			<h1 class="title-text">Where in the World?</h1>
		</nuxt-link>

		<div class="actions">
			<button v-wave type="button" class="normal" @click="$store.commit('toggleDarkMode')">
				<c-icon :name="$store.state.isDark ? $store.state.icons.lightMode : $store.state.icons.darkMode" />
			</button>
			<a
					class="github"
					href="https://github.com/Farshad-Hasanpour/nuxt-country-search"
					target="_blank"
					rel="noopener"
			>
				<button v-wave type="button" class="normal">
					<c-icon :name="$store.state.icons.github" />
				</button>
			</a>
		</div>
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

	.github{
		color: var(--color-text);
	}

	.actions{
		display: flex;
		align-items: center;
	}

	.title-text{
		font-size: 16px;
		font-weight: 600;
		margin: 0;
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
