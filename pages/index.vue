<template>
	<div>
		<div class="filter-box">
			<div class="search-box">
				<CIcon :name="$store.state.icons.search"/>
				<input
						v-model="filter.query"
						inputmode="search"
						placeholder="Search for a country"
						class="search-box__input"
				>
				<CIcon
						v-show="filter.query"
						:name="$store.state.icons.close"
						color="var(--color-input)"
						class="cursor-pointer"
						@click.stop="filter.query = ''"
				/>
			</div>

			<div class="other-filters">
				<div class="region-select">
					<!-- TODO: A customized select component would be better -->
					<select v-model="filter.region" name="region" class="region-select__input cursor-pointer">
						<option :value="null">Filter by Region</option>
						<option v-for="region in allRegions" :key="region" :value="region">{{region}}</option>
					</select>
					<CIcon
							v-show="filter.region"
							:name="$store.state.icons.close"
							color="var(--color-input)"
							class="region-select__close cursor-pointer"
							@click.stop="filter.region = null"
					/>
					<CIcon
							:name="$store.state.icons.asc"
							color="var(--color-input)"
							class="region-select__icon cursor-pointer"
					/>
				</div>
				<button class="sort-btn normal" @click.stop="toggleSort">
					<span class="sort-btn__name">{{sort.field}}</span>
					<CIcon
							:name="$store.state.icons.asc"
							color="var(--color-input)"
							:class="{'reverse': sort.type !== 'ASC'}"
					/>
				</button>
			</div>
		</div>
		<pre>{{ shownCountries }}</pre>
	</div>
</template>

<script>
export default {
	name: 'IndexPage',
	async asyncData({ error, query, $countryService }){
		const {
			region,
			sort_field: sortField,
			sort_type: sortType,
			search
		} = query;

		//TODO: !! better to validate queries

		try{
			const allCountries = await $countryService.getAllCountries();
			return {
				allCountries,
				filter: {
					region: region || null,
					query: search || ''
				},
				sort: {
					field: sortField || 'name',
					type: sortType || 'ASC'
				}
			};
		}catch(err){
			if(process.env.NODE_ENV === 'development') console.error(err);
			error({
				status: err.response ? parseInt(err.response.status) : 500,
				msg: 'There was some error in fetching countries.'
			});
		}
	},
	computed:{
		allRegions(){
			return Array.from(
				new Set(
					this.allCountries.map(country => country.region)
				)
			)
		},
		shownCountries(){
			let result = this.allCountries;

			result = result.filter(country => {
				// filter by region
				if(this.filter.region && country.region !== this.filter.region) return false;
				// filter by search term
				const query = this.filter.query?.toLowerCase() || '';
				return !(
					query &&
					!country.name.common.toLowerCase().includes(query) &&
					!country.name.official.toLowerCase().includes(query) &&
					!country.name.nativeName.toLowerCase().includes(query)
				)
			});

			const coef = this.sort.type === 'ASC' ? 1 : -1;
			result.sort((a, b) => {
				let result = 0;
				if(this.sort.field === 'name'){
					result = a.name.common.localeCompare(b.name.common);
				}else if(this.sort.field === 'population'){
					if(a.population > b.population) result = 1;
					else if(a.population < b.population) result = -1;
				}
				return result * coef;
			})

			return result
		}
	},
	methods: {
		toggleSort(){
			if(this.sort.type === 'ASC'){
				this.sort.type = 'DEC';
				return;
			}
			if(this.sort.field === 'name') this.sort.field = 'population';
			else this.sort.field = 'name';
			this.sort.type = 'ASC';
		}
	}
}
</script>

<style scoped lang="scss">
$input-pad-h: 12px;
$input-h: 42px;

.filter-box{
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	padding: 16px;
}

.search-box{
	background-color: var(--color-element);
	display: flex;
	align-items: center;
	height: $input-h;
	width: 100%;
	margin-bottom: 16px;
	border-radius: 4px;
	overflow: hidden;
	padding-left: $input-pad-h;
	padding-right: $input-pad-h;
	color: var(--color-input);
}
.search-box__input{
	height: 100%;
	flex-grow: 1;
	padding-left: $input-pad-h;
	padding-right: $input-pad-h;
}

.other-filters{
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	width: 100%;
}

.region-select{
	width: 100%;
	height: $input-h;
	margin-bottom: 16px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: var(--color-element);
	border-radius: 4px;
	position: relative;
}
.region-select__input{
	height: 100%;
	width: 100%;
	padding-left: $input-pad-h;
	padding-right: $input-pad-h;
	z-index: 2;
	background-color: transparent;
}
.region-select__input option{
	background-color: var(--color-element);
	color: var(--color-input);
}
.region-select__icon{
	position: absolute;
	right: $input-pad-h;
	top: calc((#{$input-h} - 32px) / 2);
}
.region-select__close{
	position: absolute;
	right:calc(#{$input-pad-h} + 32px);
	top: calc((#{$input-h} - 32px) / 2);
	z-index: 3;
}

.sort-btn{
	justify-content: space-between;
	width: 100%;
	margin-bottom: 16px;
}
.sort-btn__name{
	margin-inline-end: 8px;
	color: var(--color-input);
}
</style>
