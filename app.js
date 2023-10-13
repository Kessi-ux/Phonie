const phoneInput = document.getElementById('phone');
const networkIcon = document.querySelector('.network-icon');
const airtelNetwork = document.querySelector('.network-icon_two');
const gloNetwork = document.querySelector('.network-icon_three');
const nineMobileNetwork = document.querySelector('.network-icon_four');

// Map of phone number prefixes to network provider names
const networkProviders = {
	'0803': 'MTN',
	'0806': 'MTN',
	'0813': 'MTN',
	'0810': 'MTN',
	'0814': 'MTN',
	'0816': 'MTN',
	'0703': 'MTN',
	'0706': 'MTN',
	'0903': 'MTN',
	'0906': 'MTN',
	'0805': 'Glo',
	'0905': 'Glo',
	'0811': 'Glo',
	'0815': 'Glo',
	'0705': 'Glo',
	'0807': 'Glo',
	'0915': 'Glo',
	'0701': 'Airtel',
	'0802': 'Airtel',
	'0808': 'Airtel',
	'0708': 'Airtel',
	'0702': 'Airtel',
	'0902': 'Airtel',
	'0907': 'Airtel',
	'0901': 'Airtel',
	'0809': '9mobile',
	'0817': '9mobile',
	'0818': '9mobile',
	'0908': '9mobile',
	'0909': '9mobile',
	'0809': '9mobile'
	// Add more prefixes as needed
	// Added the prefix
};

phoneInput.addEventListener('input', updateNetworkIcon);

function updateNetworkIcon() {
	const phoneNumber = phoneInput.value;
	const prefix = phoneNumber.substring(0, 4);

	if (networkProviders[prefix] === 'MTN') {
		networkIcon.style.display = 'block';
	} else if (networkProviders[prefix] === 'Airtel') {
		airtelNetwork.style.display = 'block';
	} else if (networkProviders[prefix] === 'Glo') {
		gloNetwork.style.display = 'block';
	} else if (networkProviders[prefix] === '9mobile') {
		nineMobileNetwork.style.display = 'block';
	} else {
		networkIcon.style.display = 'none';
		airtelNetwork.style.display = 'none';
		gloNetwork.style.display = 'none';
		nineMobileNetwork.style.display = 'none';
	}
}
