import {shallowMount, RouterLinkStub} from '@vue/test-utils'
import CountryCard from '@/components/CountryCard.vue'

const country = {
	"name":{"common":"Iran","official":"Islamic Republic of Iran","nativeName":"ایران"},
	"cca3":"IRN",
	"capital":"Tehran",
	"region":"Asia",
	"population":83992953,
	"flag":{
		"alt":"The flag of Iran is composed of three equal horizontal bands of green, white and red. A red emblem of Iran is centered in the white band and Arabic inscriptions in white span the bottom edge of the green band and the top edge of the red band.",
		"src":"https://flagcdn.com/ir.svg"
	}
}

describe('CountryCard', () => {
	test('loads a placeholder as the flag at first', () => {
		const wrapper = shallowMount(CountryCard, {
			propsData: {
				country
			},
			stubs: {
				NuxtLink: RouterLinkStub
			},
			directives: {
				wave: jest.fn()
			},
		});

		const flagSrc = wrapper.find('.country__flag').attributes('src');

		expect(flagSrc).not.toBe(country.flag.src);
	})
})
