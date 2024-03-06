import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

interface ServiceCardProps {
	index: number;
	title: string;
	icon: string;
}

const ServiceCard = ({ index, title, icon }: ServiceCardProps) => (
	<Tilt className='xs:w-[250px] w-full'>
		<motion.div
			variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
			className='w-full yellow-pink-gradient p-[1px] rounded-[20px] shadow-card'
		>
			<div
				// options={{
				// 	max: 45,
				// 	scale: 1,
				// 	speed: 450,
				// }}
				className='bg-black-gradient rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
			>
				<img
					src={icon}
					alt='web-development'
					className='w-16 h-16 object-contain'
				/>

				<h3 className='text-black-100 text-[20px] font-bold text-center'>
					{title}
				</h3>
			</div>
		</motion.div>
	</Tilt>
);

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<h2 className={styles.sectionHeadText}>Want to know more?</h2>
				<p className={styles.sectionSubText}>I'm glad you asked!</p>
			</motion.div>

			<motion.p
				variants={fadeIn('', '', 0.1, 1)}
				className='mt-4 text-primary text-[17px] font-light max-w-3xl leading-[30px]'
			>
				My primary skillset includes all things Javascript from React + Native,
				Angular + Ionic, to PHP + Laravel, and many others. I have worked with
				many different processes, languages, and architectures. As a result, I
				adapt quickly to new environments. I value the benefits of asking for
				help when exposed to unfamiliar territory and providing help when
				capable. Let's grow together!
			</motion.p>

			<div className='mt-20 flex flex-wrap gap-10'>
				{services.map((service, index) => (
					<ServiceCard
						key={service.title}
						index={index}
						{...service}
					/>
				))}
			</div>
		</>
	);
};

const AboutSectionWrapper = SectionWrapper(About, 'about');

export default AboutSectionWrapper;
