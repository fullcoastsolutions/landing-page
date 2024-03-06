import { BrowserRouter } from 'react-router-dom';

import {
	About,
	Contact,
	Experience,
	//Feedbacks,
	Hero,
	Navbar,
	Tech,
	Works,
	// StarsCanvas,
	News,
} from './components';

const App = () => {
	return (
		<BrowserRouter>
			<div className='relative z-0 bg-contact-pattern bg-fixed bg-cover bg-no-repeat bg-center'>
				<div className='bg-fixed bg-cover bg-black/10'>
					<div className='bg-hero-pattern bg-fixed bg-cover bg-no-repeat bg-center'>
						<div className='bg-fixed bg-cover bg-black/10'>
							<Navbar />
							<Hero />
						</div>
					</div>
					<About />
					<Experience />
					<Tech />
					<div className='bg-white-100 bg-cover bg-no-repeat bg-center'>
						<Works />
					</div>
					<div className='bg-tertiary bg-cover bg-no-repeat bg-center'>
						<News />
					</div>
					{/*<Feedbacks />*/}
					<div className='relative z-0'>
						<Contact />
						{/* <StarsCanvas /> */}
					</div>
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
