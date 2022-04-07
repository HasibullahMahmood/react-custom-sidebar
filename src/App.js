import { useState } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import sidebarData from './sidebarData';
import './App.css';

function App() {
	const [open, setOpen] = useState(false);
	return (
		<div className="App">
			<Sidebar content={sidebarData} open={open} />
			<section className="main">
				<button onClick={() => setOpen((state) => !state)}>Toggle</button>
			</section>
		</div>
	);
}

export default App;
