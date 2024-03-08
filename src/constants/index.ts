import {
	typescript,
	reactjs,
	mongodb,
	git,
	figma,
	docker,
	threejs,
	ipUrlShortener,
	laravel,
	mysql,
	sass,
	jest,
	firebase,
	htmlighting,
	bydesign,
	thm,
	gale,
	portfolio,
	aws,
	python,
	fullstackCmsScreenshot,
	amigosChatting,
	croodsChart,
	croodsFriends,
	groupTwo,
	group,
	avatarNetwork,
} from '../assets';
import { NavLinksProps } from '../types';

export const navLinks: NavLinksProps = [
	{
		id: 'about',
		title: 'About',
	},
	{
		id: 'services',
		title: 'Services',
	},
	{
		id: 'contact',
		title: 'Contact',
	},
];

const technologies = [
	{
		name: 'React JS',
		icon: reactjs,
	},
	{
		name: 'Laravel',
		icon: laravel,
	},
	{
		name: 'TypeScript',
		icon: typescript,
	},
	{
		name: 'MongoDB',
		icon: mongodb,
	},
	{
		name: 'MySQL',
		icon: mysql,
	},
	{
		name: 'Python',
		icon: python,
	},
	{
		name: 'Sass',
		icon: sass,
	},
	{
		name: 'Three JS',
		icon: threejs,
	},
	{
		name: 'aws',
		icon: aws,
	},
	{
		name: 'git',
		icon: git,
	},
	{
		name: 'jest',
		icon: jest,
	},
	{
		name: 'figma',
		icon: figma,
	},
	{
		name: 'docker',
		icon: docker,
	},
	{
		name: 'firebase',
		icon: firebase,
	},
];

const experiences = [
	{
		title: 'Ecommerce Developer',
		company_name: 'HTM Lighting Solutions',
		icon: htmlighting,
		iconBg: '#383E56',
		date: 'Jun 2017 - Jan 2020',
		points: [
			'Rebuilt online marketplace from Magento to Shopify platform',
			'Managed multiple online stores including Amazon & Ebay',
			'Optimized SEO and email marketing automations with Google and Mailchimp integrations',
		],
	},
	{
		title: 'Software Specialist / Project Manager',
		company_name: 'ByDesign Tech',
		icon: bydesign,
		iconBg: '#E6DEDD',
		date: 'Dec 2019 - Jul 2020',
		points: [
			'Software troubleshooting and training to product users and internal team members.',
			'Responsible for project sprint management, feature testing & deployment, and software documentation.',
			'Used knowledge of development operations to efficiently translate client business requirements to clear goals.',
		],
	},
	{
		title: 'Full Stack Developer',
		company_name: 'Trust Home Medical / MyDrHank',
		icon: thm,
		iconBg: '#383E56',
		date: 'Jul 2020 - Oct 2021',
		points: [
			'Crafted full-stack React and WordPress, applications - integrated with multiple softwares including Twilio, OpenERP, and Google',
			'Migrated new and maintained multiple AWS EC2 environments',
			'Collaborated directly with stakeholders to implement SDLC solutions and sprint goals',
		],
	},
	{
		title: 'Application Developer',
		company_name: 'Gale Healthcare',
		icon: gale,
		iconBg: '#E6DEDD',
		date: 'Nov 2021 - Sep 2023',
		points: [
			'Collaborated on multiple projects from updating applications to modern Stack/UI design, microservice integration, and performance optimization',
			'Conducted code reviews and implemented solutions to optimize database performance',
		],
	},
];

const testimonials = [
	{
		testimonial:
			'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
		name: 'Sara Lee',
		designation: 'CFO',
		company: 'Acme Co',
		image: 'https://randomuser.me/api/portraits/women/4.jpg',
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: 'Chris Brown',
		designation: 'COO',
		company: 'DEF Corp',
		image: 'https://randomuser.me/api/portraits/men/5.jpg',
	},
	{
		testimonial:
			"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: 'Lisa Wang',
		designation: 'CTO',
		company: '456 Enterprises',
		image: 'https://randomuser.me/api/portraits/women/6.jpg',
	},
];

const projects = [
	{
		name: 'Fullstack CMS Application',
		description: 'Next.js + Vercel application with Sanity.io CMS',
		tags: [
			{
				name: 'nextjs',
				color: 'blue-text-gradient',
			},
			{
				name: 'sanity',
				color: 'green-text-gradient',
			},
			{
				name: 'vercel',
				color: 'pink-text-gradient',
			},
			{
				name: 'tailwind',
				color: 'blue-text-gradient',
			},
			{
				name: 'auth0',
				color: 'green-text-gradient',
			},
		],
		image: fullstackCmsScreenshot,
		demo_link: 'https://blog-nextjs-sanity-sable-zeta.vercel.app/',
		source_code_link: 'https://github.com/adrianrtownsend/blog-nextjs-sanity',
	},
	{
		name: 'Project Portfolio',
		description: 'Vite + React portfolio with CI/CD integration',
		tags: [
			{
				name: 'vite',
				color: 'blue-text-gradient',
			},
			{
				name: 'tailwind',
				color: 'green-text-gradient',
			},
			{
				name: 'docker',
				color: 'pink-text-gradient',
			},
		],
		image: portfolio,
		demo_link: 'https://adrianrtownsend.github.io/portfolio',
		source_code_link: 'https://github.com/adrianrtownsend/portfolio',
	},
	{
		name: 'URL Shortener & IP tracker',
		description:
			'Web application that allows users to shorten url links and view detailed information on their IP address',
		tags: [
			{
				name: 'typescript',
				color: 'blue-text-gradient',
			},
			{
				name: 'sass',
				color: 'green-text-gradient',
			},
			{
				name: 'thirdpartyintegration',
				color: 'pink-text-gradient',
			},
		],
		image: ipUrlShortener,
		demo_link: 'https://adrianrtownsend.github.io/react-shortly-iptracker',
		source_code_link:
			'https://github.com/adrianrtownsend/react-shortly-iptracker',
	},
];

const services = [
	{
		name: 'Technology Consulting',
		description:
			'Navigate the complexities of the business world with confidence. Our seasoned consultants  help you stay ahead in a rapidly evolving market.',
		image: amigosChatting,
	},
	{
		name: 'Marketing Strategies',
		description:
			'Our marketing experts develop data-driven strategies to boost your online visibility, engage customers, and drive measurable results.',
		image: croodsChart,
	},
	{
		name: 'Digital & Product Design',
		description:
			'Our creative team combines aesthetics with functionality to create user-centric designs that captivate and convert.',
		image: croodsFriends,
	},
];

const stats = [
	{
		name: '7+',
		description: 'Years Experience',
		image: groupTwo,
	},
	{
		name: '20+',
		description: 'Exper Consultants',
		image: group,
	},
	{
		name: '5+',
		description: 'Industries Served',
		image: avatarNetwork,
	},
];

export { services, technologies, experiences, testimonials, projects, stats };
