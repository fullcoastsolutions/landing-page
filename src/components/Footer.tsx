import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const Footer = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<h2 className={`${styles.sectionSubTextAlt}`}>ABOUT US</h2>
				<p className={`${styles.sectionHeadTextAlt}`}>Our Mission and Vision</p>
			</motion.div>
			<motion.p
				variants={fadeIn('', '', 0.1, 1)}
				className='mt-4 text-[17px] font-light max-w-3xl leading-[30px]'
			>
				At Full Coast Solutions, we offer a suite of integrated services that
				cover every aspect of your business needs. From cutting-edge software
				development to strategic consulting, powerful marketing, and innovative
				design, we're your one-stop solution for achieving and surpassing your
				business goals.
			</motion.p>
			<motion.p
				variants={fadeIn('', '', 0.1, 1)}
				className='mt-4 text-[17px] font-light max-w-3xl leading-[30px]'
			>
				Revolutionize your business with our bespoke software solutions. Our
				experienced team of developers harness the latest technologies to create
				robust, scalable, and tailored software that aligns perfectly with your
				unique requirements.
			</motion.p>
		</>
	);
};

const FooterSectionWrapper = SectionWrapper(Footer, 'footer');

export default FooterSectionWrapper;
