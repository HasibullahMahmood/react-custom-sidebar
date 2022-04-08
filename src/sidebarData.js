import { BiHome, BiMessage } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';

const data = [
	{
		id: 1,
		label: 'Home Page',
		link: '/',
		icon: BiHome,
	},
	{
		id: 2,
		label: 'Setup',
		icon: FiSettings,
		link: null,
		items: [
			{
				label: 'Company Settings',
				link: '/setup-company-settings',
			},
			{
				label: 'User',
				link: '/setup-user',
			},
			{
				label: 'Marketing Place',
				link: '/company-marketing-place',
			},
			{
				label: 'Currency',
				link: '/company-currencies',
			},
		],
	},
	{
		id: 3,
		label: 'Messages',
		icon: BiMessage,
		link: null,
		items: [
			{
				label: 'Messages',
				link: '/messages',
			},
		],
	},
];

export default data;
