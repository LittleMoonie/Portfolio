import React, { useState, useEffect } from 'react';
import Layout from './Components/Layout';
import LoadingScreen from './Components/LoadingScreen';
import RocketAnimation from './Components/RocketAnimation';

const App: React.FC = () => {
	const [loading, setLoading] = useState(true);

	const [animationComplete, setAnimationComplete] = useState(false);

	const handleAnimationComplete = () => {
		setAnimationComplete(true); // When the animation finishes, set to true
	};

	// Simulate fetching data or loading resources
	useEffect(() => {
		const loadData = async () => {
			// Simulating data fetch with a timeout
			await new Promise((resolve) => setTimeout(resolve, 1));
			setLoading(false); // Set loading to false when done
		};

		loadData();
	}, []);

	// Show loading screen if still loading, otherwise show main content
	return (
		<>
			{loading ? <LoadingScreen /> : !animationComplete ? (
				// Show the rocket animation while loading
				<RocketAnimation onComplete={handleAnimationComplete} />
			) : (
				// Show the main app content after animation is done
				<Layout />
			)}
			{/* <HomePage /> */}
		</>
	);
};

export default App;
