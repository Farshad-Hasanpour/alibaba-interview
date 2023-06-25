<template>
	<i class="mdi" :class="name"></i>
</template>

<script>
export default {
	name: "CIcon",
	props: {
		name: { required: true, type: String }
	}
}
</script>

<style scoped>
	i.mdi{
		width: 32px;
		height: 32px;
		color: var(--color-subtext);
		line-height: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 24px;
	}
</style>
