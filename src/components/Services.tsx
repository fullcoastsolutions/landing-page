import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { globe } from '../assets';
import { SectionWrapper } from '../hoc';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

interface ServiceCardProps {
	index: number;
	name: string;
	description: string;
	image: string;
	source_code_link?: string;
	demo_link?: string;
	links?: { link: string; label: string }[];
}

const ServiceCard = ({
	index,
	name,
	description,
	image,
	demo_link,
}: ServiceCardProps) => {
	return (
		<motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
			<Tilt
				options={{
					max: 45,
					scale: 1,
					speed: 450,
				}}
				className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full'
			>
				<div className='relative w-full h-[230px]'>
					<img
						src={image}
						alt='service_image'
						className='w-full h-full object-cover rounded-2xl'
					/>

					{demo_link && (
						<div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
							<div
								onClick={() => window.open(demo_link, '_blank')}
								className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
							>
								<img
									src={globe}
									alt='demo'
									className='w-1/2 h-1/2 object-contain'
								/>
							</div>
						</div>
					)}
				</div>

				<div className='mt-5 text-center'>
					<h3 className='text-black-100 font-bold text-[24px]'>{name}</h3>
					<p className='mt-2 text-white font-bold text-[16px]'>{description}</p>
				</div>
			</Tilt>
		</motion.div>
	);
};

const Services = () => {
	return (
		<>
			<motion.div
				variants={textVariant()}
				className='text-center'
			>
				<h2 className={`${styles.sectionSubTextAlt}`}>OUR SERVICES</h2>
				<p className={`${styles.sectionHeadTextAlt}`}>
					Grow Your Business with Our Expertise
				</p>
			</motion.div>

			<div className='mt-20 flex flex-wrap gap-7 items-stretch'>
				{services.map((service, index) => (
					<ServiceCard
						key={`service-${index}`}
						index={index}
						{...service}
					/>
				))}
			</div>
		</>
	);
};

const ServicesSectionWrapper = SectionWrapper(Services, 'services');

export default ServicesSectionWrapper;
