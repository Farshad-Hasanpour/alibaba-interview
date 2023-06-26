<template>
	<i class="mdi" :class="name" @click="$emit('click', $event)"/>
</template>

<script>
export default {
	name: "CIcon",
	props: {
		name: { required: true, type: String },
		color: { required: false, default: null, type: String }
	}
}
</script>

<style scoped>
	i.mdi{
		width: 32px;
		height: 32px;
		line-height: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 24px;
		transition: transform .3s;
		color: v-bind(color);
	}
</style>
