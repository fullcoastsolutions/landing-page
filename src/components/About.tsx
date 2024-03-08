import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const About = () => {
	return (
		<div className='flex gap-5 items-center'>
			<div className='flex-1'>
				<motion.div variants={textVariant()}>
					<h2 className={`${styles.sectionSubTextAlt}`}>ABOUT US</h2>
					<p className={`${styles.sectionHeadTextAlt}`}>
						Our Mission and Vision
					</p>
				</motion.div>
				<motion.p
					variants={fadeIn('', '', 0.1, 1)}
					className='mt-4 text-[17px] font-light max-w-3xl leading-[30px]'
				>
					At Full Coast Solutions, we offer a suite of integrated services that
					cover every aspect of your business needs. From cutting-edge software
					development to strategic consulting, powerful marketing, and
					innovative design, we're your one-stop solution for achieving and
					surpassing your business goals.
				</motion.p>
				<motion.p
					variants={fadeIn('', '', 0.1, 1)}
					className='mt-4 text-[17px] font-light max-w-3xl leading-[30px]'
				>
					Revolutionize your business with our bespoke software solutions. Our
					experienced team of developers harness the latest technologies to
					create robust, scalable, and tailored software that aligns perfectly
					with your unique requirements.
				</motion.p>
			</div>
			<div className='flex-1 p-10'>
				<img
					src={'/assets/pexels-mikael-blomkvist-6476260.jpg'}
					alt='project_image'
					className='w-full h-auto object-cover rounded-2xl mx-auto'
				/>
			</div>
		</div>
	);
};

const AboutSectionWrapper = SectionWrapper(About, 'about');

export default AboutSectionWrapper;
