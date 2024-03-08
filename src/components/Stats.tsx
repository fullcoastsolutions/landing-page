import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { stats } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

interface StatCardProps {
	index: number;
	name: string;
	description: string;
	image: string;
	source_code_link?: string;
	demo_link?: string;
	links?: { link: string; label: string }[];
}

const StatCard = ({ index, name, description, image }: StatCardProps) => {
	return (
		<motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
			<Tilt className='p-5 sm:w-[360px] w-full h-full flex flex-col justify-between'>
				<div className='relative'>
					<img
						src={image}
						alt='stat_image'
						className='w-full h-auto object-cover rounded-2xl'
					/>
				</div>

				<div className='mt-5 flex justify-center gap-5 items-center'>
					<h1 className='text-black-100 font-bold text-[50px]'>{name}</h1>
					<p className='mt-2 text-black text-[24px]'>{description}</p>
				</div>
			</Tilt>
		</motion.div>
	);
};

const Stats = () => {
	return (
		<>
			<motion.div
				variants={textVariant()}
				className='text-center'
			>
				<p className={`${styles.sectionHeadText}`}>Why Choose Us</p>
			</motion.div>

			<div className='mt-20 flex flex-wrap gap-7 items-stretch'>
				{stats.map((stat, index) => (
					<StatCard
						key={`stat-${index}`}
						index={index}
						{...stat}
					/>
				))}
			</div>
		</>
	);
};

const StatsSectionWrapper = SectionWrapper(Stats, 'stats');

export default StatsSectionWrapper;
