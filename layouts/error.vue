<template>
	<div class="container header-back">
		<p class="status">{{ errorCode }}</p>
		<p>{{ errorMessage }}</p>
		<nuxt-link to="/" :draggable="false">Home Page</nuxt-link>
	</div>
</template>

<script>
export default {
	name: 'Error',
	props: {
		error: {
			type: Object,
			default: null
		}
	},
	computed:{
		errorMessage(){
			return this.error?.msg || 'Something went wrong.';
		},
		errorCode(){
			return this.error?.status || 500;
		}
	},
}
</script>

<style scoped>
.container{
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	font-size: 18px;
	margin-top: 100px;
	font-weight: 600;
}
.status{
	color: var(--color-error);
	font-weight: 800;
}
</style>
