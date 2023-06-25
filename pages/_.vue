<script>
	export default {
		name: "Other",
		middleware({ error }){
			error({ status: 404, msg: 'Page not found.' })
		}
	}
</script>
