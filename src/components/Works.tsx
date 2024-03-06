import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { globe } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

interface ProjectCardProps {
	index: number;
	name: string;
	description: string;
	tags: { name: string; color: string }[];
	image: string;
	source_code_link?: string;
	demo_link?: string;
	links?: { link: string; label: string }[];
}

const ProjectCard = ({
	index,
	name,
	description,
	tags,
	image,
	source_code_link,
	demo_link,
	links,
}: ProjectCardProps) => {
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
						alt='project_image'
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

				<div className='mt-5'>
					<h3 className='text-black-100 font-bold text-[24px]'>{name}</h3>
					<p className='mt-2 text-secondary text-[14px]'>{description}</p>
				</div>

				<div className='mt-4 flex flex-wrap gap-2'>
					{tags.map((tag) => (
						<p
							key={`${name}-${tag.name}`}
							className={`text-[14px] ${tag.color}`}
						>
							#{tag.name}
						</p>
					))}
				</div>

				<div className='mt-4'>
					{source_code_link && (
						<div onClick={() => window.open(source_code_link, '_blank')}>
							<p className='mt-2 text-primary text-[12px] cursor-pointer'>
								source code &gt;
							</p>
						</div>
					)}
					{links &&
						links.map(({ link, label }) => {
							return (
								<div onClick={() => window.open(link, '_blank')}>
									<p className='mt-2 text-primary text-[12px] cursor-pointer'>
										{label} &gt;
									</p>
								</div>
							);
						})}
				</div>
			</Tilt>
		</motion.div>
	);
};

const Works = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={`${styles.sectionSubText} `}>My work</p>
				<h2 className={`${styles.sectionHeadText}`}>Projects</h2>
			</motion.div>

			<div className='w-full flex'>
				<motion.p
					variants={fadeIn('', '', 0.1, 1)}
					className='mt-3 text-black-100 text-[17px] max-w-3xl leading-[30px]'
				>
					The following projects are some of my work showcasing my skills and
					journey through different challenges and learning experieces. Links
					are available both to live demos and source code for each.
				</motion.p>
			</div>

			<div className='mt-20 flex flex-wrap gap-7 items-stretch'>
				{projects.map((project, index) => (
					<ProjectCard
						key={`project-${index}`}
						index={index}
						{...project}
					/>
				))}
			</div>
		</>
	);
};

const WorksSectionWrapper = SectionWrapper(Works, 'works');

export default WorksSectionWrapper;
