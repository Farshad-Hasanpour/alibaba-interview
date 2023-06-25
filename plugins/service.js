import countryService from '~/services/country';

export default ({ $axios }, inject) => {
	const services = {
		countryService: countryService($axios),
	};
	const serviceNames = Object.keys(services);
	serviceNames.forEach((serviceName) => {
		inject(serviceName, services[serviceName]);
	});
}
