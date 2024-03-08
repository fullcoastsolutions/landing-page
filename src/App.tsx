import { BrowserRouter } from 'react-router-dom';

import { About, Contact, Hero, Navbar, Services, Stats } from './components';

const App = () => {
	return (
		<BrowserRouter>
			<div className='bg-fixed bg-cover bg-black/10'>
				<div className='bg-fixed bg-cover bg-black/10'>
					<Navbar />
					<Hero />
				</div>
				<Services />
				<About />
				<div className='bg-white-100 bg-cover bg-no-repeat bg-center'>
					<Stats />
					{/*<Feedbacks />*/}
					<Contact />
					{/* <StarsCanvas /> */}
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
