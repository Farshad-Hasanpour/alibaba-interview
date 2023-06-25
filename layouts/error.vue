<template>
	<div>
		<span>{{errorCode}} | {{errorMessage}}</span>
	</div>
</template>

<script>
export default {
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

<style>
@import '@mdi/font/css/materialdesignicons.min.css';
</style>

<style lang="scss" scoped>
//@media #{map-get($display-breakpoints, 'md-and-up')} {
//	#status{
//		--font-size: 130px;
//		text-align: start;
//	}
//	#message{
//		--font-size: 28px;
//		text-align-last: start;
//	}
//}
//
//@media #{map-get($display-breakpoints, 'lg-and-up')} {
//	#error-image{ max-width: 360px; }
//	#status{ --font-size: 170px; }
//	#message{ --font-size: 40px; }
//}
//
//@media #{map-get($display-breakpoints, 'xl-only')} {
//	#error-image{ max-width: 450px; }
//	#status{ --font-size: 228px; }
//	#message{ --font-size: 56px; }
//}
</style>
