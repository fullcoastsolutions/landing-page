import {
	QueryClient,
	QueryClientProvider,
	useQuery,
} from '@tanstack/react-query';
import axios from 'axios';
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';
import { styles } from '../styles';

const queryClient = new QueryClient();

const News = () => {
	const { isLoading, error, data, isFetching } = useQuery({
		queryKey: ['factData'],
		queryFn: () =>
			axios
				.get('https://api.api-ninjas.com/v1/facts?limit=1', {
					headers: { 'x-api-key': import.meta.env.VITE_APP_APININJAS_API_KEY },
				})
				.then((res) => res.data),
	});

	if (error) return 'An error has occurred: ' + error;

	return (
		<>
			<div className='w-full p-8 flex justify-center'>
				{isLoading || isFetching ? (
					<>
						<div className='w-2/3 animate-pulse flex space-x-4'>
							<div className='rounded-full bg-slate-700 h-10 w-10'></div>
							<div className='flex-1 space-y-4 py-1'>
								<div className='grid grid-cols-3 gap-4'>
									<div className='h-2 bg-slate-700 rounded col-span-2'></div>
									<div className='h-2 bg-slate-700 rounded col-span-1'></div>
								</div>
								<div className='h-2 bg-slate-700 rounded'></div>
							</div>
						</div>
					</>
				) : (
					<motion.div
						variants={textVariant()}
						className='w-2/3 grid grid-cols-2 items-center'
					>
						<div>
							<h1 className={styles.sectionHeadText}>Here's a fact:</h1>
						</div>
						<div>
							<p className={styles.sectionSubText}>
								{Array.isArray(data) && data[0].fact}
							</p>
						</div>
					</motion.div>
				)}
			</div>
		</>
	);
};

const Wrapper = () => (
	<QueryClientProvider client={queryClient}>
		<News />
	</QueryClientProvider>
);

export default Wrapper;
