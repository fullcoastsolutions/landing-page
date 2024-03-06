import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
// import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
	const formRef = useRef(null);
	const [form, setForm] = useState({
		name: '',
		email: '',
		message: '',
	});

	const [loading, setLoading] = useState(false);

	const handleChange = (
		e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target as HTMLInputElement | HTMLTextAreaElement;

		setForm({
			...form,
			[name]: value,
		});
	};

	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();
		setLoading(true);

		emailjs
			.send(
				import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
				{
					from_name: form.name,
					to_name: import.meta.env.VITE_APP_EMAILJS_TO_NAME,
					from_email: form.email,
					to_email: import.meta.env.VITE_APP_EMAILJS_TO_EMAIL,
					message: form.message,
					subject: import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
				},
				import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
			)
			.then(
				() => {
					setLoading(false);
					alert('Thank you. I will get back to you as soon as possible.');

					setForm({
						name: '',
						email: '',
						message: '',
					});
				},
				(error) => {
					setLoading(false);
					console.error(error);

					alert('Ahh, something went wrong. Please try again.');
				}
			);
	};

	return (
		<div
			className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
		>
			<motion.div
				variants={slideIn('left', 'tween', 0.2, 1)}
				className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
			>
				<p className={styles.sectionSubTextAlt}>Any Questions?</p>
				<h3 className={styles.sectionHeadTextAlt}>Contact Me!</h3>

				<form
					ref={formRef}
					onSubmit={handleSubmit}
					className='mt-12 flex flex-col gap-8'
				>
					<label className='flex flex-col'>
						<span className='text-white font-medium mb-4'>Name</span>
						<input
							type='text'
							name='name'
							value={form.name}
							onChange={handleChange}
							placeholder='ex. Peter Parker'
							className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
						/>
					</label>
					<label className='flex flex-col'>
						<span className='text-white font-medium mb-4'>Email</span>
						<input
							type='email'
							name='email'
							value={form.email}
							onChange={handleChange}
							placeholder='ex. spider.cop62@mail.com'
							className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
						/>
					</label>
					<label className='flex flex-col'>
						<span className='text-white font-medium mb-4'>Message</span>
						<textarea
							rows={7}
							name='message'
							value={form.message}
							onChange={handleChange}
							placeholder="Describe in a short summary what you'd like to discuss!"
							className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
						/>
					</label>

					<button
						type='submit'
						className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
					>
						{loading ? 'Sending...' : 'Send'}
					</button>
				</form>
			</motion.div>

			<motion.div
				variants={slideIn('right', 'tween', 0.2, 1)}
				className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
			>
				{/* <EarthCanvas /> */}
			</motion.div>
		</div>
	);
};

const ContactSectionWrapper = SectionWrapper(Contact, 'contact');

export default ContactSectionWrapper;
