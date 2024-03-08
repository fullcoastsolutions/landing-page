import { motion } from 'framer-motion';

import { styles } from '../styles';
import { stuckatHomeOffice } from '../assets';
// import { ComputersCanvas } from './canvas';

const Hero = () => {
	return (
		<section className={`relative w-full mx-auto bg-white py-5 h-screen`}>
			<div className='h-[120px]'></div>
			<div className='flex flex-col gap-5'>
				<div className='flex container mx-auto mb-10'>
					<div className='gap-2 flex-1'>
						<div className='flex'>
							<div className='flex flex-col justify-center items-center m-5'>
								<div className='w-5 h-5 rounded-full bg-secondary' />
								<div className='w-1 sm:h-80 h-40 yellow-pink-gradient' />
							</div>

							<div>
								<h1 className={`${styles.heroHeadText}`}>
									Full Coast Solutions
								</h1>
								<p className={`${styles.heroSubText}`}>
									We offer a suite of integrated services that cover every
									aspect of your business needs.
								</p>
							</div>
						</div>
					</div>
					<div className='flex-1'>
						{/* <div className='bg-hero-pattern bg-fixed bg-cover bg-no-repeat bg-center h-full' /> */}
						<img
							src={stuckatHomeOffice}
							alt='hero image'
							className='mx-auto'
						/>
					</div>
				</div>

				<div className='w-full flex justify-center items-center absolute bottom-[30px]'>
					<a href='#services'>
						<div className='w-[35px] h-[64px] rounded-3xl border-4 border-primary flex justify-center items-start p-2'>
							<motion.div
								animate={{
									y: [0, 24, 0],
								}}
								transition={{
									duration: 1.5,
									repeat: Infinity,
									repeatType: 'loop',
								}}
								className='w-3 h-3 rounded-full bg-primary mb-1'
							/>
						</div>
					</a>
				</div>
			</div>
		</section>
	);
};

export default Hero;
