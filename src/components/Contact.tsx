import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import ReCAPTCHA from 'react-google-recaptcha';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
	const formRef = useRef(null);
	const [form, setForm] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [formError, setFormError] = useState('');
	const [loading, setLoading] = useState(false);
	const [recaptcha, setRecaptcha] = useState<string | null>();

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

		if (!form.name || !form.email || !form.message) {
			setFormError('Please fill in all required fields.');
			return;
		}

		if (!recaptcha) {
			setFormError('Please complete the reCAPTCHA challenge.');
			return;
		}

		setFormError('');
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
					'g-recaptcha-response': recaptcha,
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

	const handleRecaptcha = (value: string | null) => {
		setRecaptcha(value);
	};

	return (
		<div
			className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden items-center`}
		>
			<motion.div
				variants={slideIn('left', 'tween', 0.2, 1)}
				className='flex-1 bg-white p-8 rounded-2xl'
			>
				{formError && <div className='text-red-500 mb-4'>{formError}</div>}
				<form
					ref={formRef}
					onSubmit={handleSubmit}
					className='mt-12 flex flex-col gap-8'
				>
					<label className='flex flex-col'>
						<span className='text-tertiary font-medium text-[20px] mb-4'>
							Name
						</span>
						<input
							type='text'
							name='name'
							value={form.name}
							onChange={handleChange}
							required
							placeholder='(First Last)'
							className='bg-tertiary py-4 px-6 placeholder:text-gray-50 placeholder:italic rounded-lg outline-none border-none font-medium'
						/>
					</label>
					<label className='flex flex-col'>
						<span className='text-tertiary font-medium text-[20px] mb-4'>
							Email
						</span>
						<input
							type='email'
							name='email'
							value={form.email}
							onChange={handleChange}
							required
							placeholder='(example123@mail.com)'
							className='bg-tertiary py-4 px-6 placeholder:text-gray-50 placeholder:italic rounded-lg outline-none border-none font-medium'
						/>
					</label>
					<label className='flex flex-col'>
						<span className='text-tertiary font-medium text-[20px] mb-4'>
							Message
						</span>
						<textarea
							rows={7}
							name='message'
							value={form.message}
							onChange={handleChange}
							required
							placeholder="(Describe in a short summary what you'd like to discuss!)"
							className='bg-tertiary py-4 px-6 placeholder:text-gray-50 placeholder:italic rounded-lg outline-none border-none font-medium'
						/>
					</label>

					<button
						type='submit'
						className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit font-bold shadow-md shadow-quaternary'
						data-sitekey='reCAPTCHA_site_key'
						data-callback='onSubmit'
						data-action='submit'
					>
						{loading ? 'Sending...' : 'Send'}
					</button>
					<ReCAPTCHA
						sitekey={import.meta.env.VITE_APP_RECAPTCHA_SITE_KEY}
						onChange={handleRecaptcha}
					/>
				</form>
			</motion.div>

			<motion.div
				variants={slideIn('right', 'tween', 0.2, 1)}
				className='flex-1 flex flex-col gap-10 p-8'
			>
				<div className='bg-tertiary p-8 rounded-2xl'>
					<h1 className={`${styles.contactHeadText}`}>
						Let's Grow Your Business Together
					</h1>
					<p className={`${styles.contactSubText}`}>
						Ready to take your business to the next level? Contact us today to
						schedule a consultation with one of our experts.
					</p>
				</div>
				<img
					src={'/assets/Stuck at Home Alone Time 1.png'}
					alt='stat_image'
					className='object-cover rounded-2xl'
				/>
			</motion.div>
		</div>
	);
};

const ContactSectionWrapper = SectionWrapper(Contact, 'contact');

export default ContactSectionWrapper;
