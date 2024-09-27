import React, { useRef, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import Lottie from 'lottie-react';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import rocketAnimation from '../lottiefiles/rocket.json';
import moonAnimation from '../lottiefiles/moon.json';
import starsAnimation from '../lottiefiles/stars.json';
import launchPadImage from '../Assets/launchpad.png';

interface RocketAnimationProps {
	onComplete?: () => void; // Optional onComplete callback
}

const RocketAnimation: React.FC<RocketAnimationProps> = ({ onComplete }) => {
	const [animationComplete, setAnimationComplete] = useState(false); // Track animation completion
	const rocketRef = useRef<HTMLDivElement>(null);
	const moonRef = useRef<HTMLDivElement>(null);
	const starsRef = useRef<HTMLDivElement>(null);
	const launchPadRef = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const animationTimeline = useRef<gsap.core.Timeline | null>(null); // Store GSAP timeline in a ref

	// Capture the initial coordinates of the rocket and the moon
	const [initialRocketPosition, setInitialRocketPosition] = useState({
		x: 0,
		y: 0,
	});
	const [initialMoonPosition, setInitialMoonPosition] = useState({
		x: 0,
		y: 0,
	});

	// Ensure initial positions are captured correctly when the component mounts
	useEffect(() => {
		gsap.registerPlugin(MotionPathPlugin);

		if (rocketRef.current && moonRef.current) {
			// Capture initial positions
			const rocketRect = rocketRef.current.getBoundingClientRect();
			const moonRect = moonRef.current.getBoundingClientRect();

			// Log initial positions for debugging
			console.log('Initial Rocket Position:', rocketRect);
			console.log('Initial Moon Position:', moonRect);

			// Set initial positions in state
			setInitialRocketPosition({ x: rocketRect.left, y: rocketRect.top });
			setInitialMoonPosition({ x: moonRect.left, y: moonRect.top });
		}
	}, []);

	useEffect(() => {
		if (
			initialRocketPosition &&
			initialMoonPosition &&
			!animationTimeline.current
		) {
			// Initialize animation timeline
			animationTimeline.current = gsap.timeline({
				ease: 'power4.inOut',
				onComplete: () => {
					setAnimationComplete(true);

					// Log final positions for debugging
					const finalRocketPosition =
						rocketRef.current?.getBoundingClientRect();
					const finalMoonPosition = moonRef.current?.getBoundingClientRect();
					console.log('Final Rocket Position:', finalRocketPosition);
					console.log('Final Moon Position:', finalMoonPosition);

					// Call onComplete if provided
					if (onComplete) onComplete();
				},
			});

			// Set initial position of rocket and other elements
			gsap.set(rocketRef.current, {
				bottom: '20px',
				left: '50%',
				transform: 'translateX(-50%)',
			});
			gsap.set(launchPadRef.current, { opacity: 1, y: 0 });
			gsap.set(moonRef.current, { scale: 0.5 });
			gsap.set(starsRef.current, { y: 0 });

			// Create animations with initial motion path
			animationTimeline.current
				.to(launchPadRef.current, { y: 100, duration: 10, ease: 'linear' }, '0')
				.to(starsRef.current, { y: 1000, duration: 10, ease: 'linear' }, '0')
				.to(
					rocketRef.current,
					{
						y: -500, // Move rocket upwards
						duration: 10,
						ease: 'linear',
						onUpdate: () => {
							const rect = rocketRef.current?.getBoundingClientRect();
							console.log('Rocket position during upward animation:', rect);
						},
					},
					'0'
				)
				.to(
					moonRef.current,
					{
						scale: 1.5, // Scale the moon
						duration: 5,
						ease: 'power4.inOut',
						onUpdate: () => {
							const rect = moonRef.current?.getBoundingClientRect();
							console.log('Moon position during scaling:', rect);
						},
					},
					'-=5'
				)
				// Before starting the motion path animation, recalculate the positions dynamically
				.add(() => {
					// Recalculate the positions of the rocket and moon dynamically
					const rocketRect = rocketRef.current?.getBoundingClientRect();
					const moonRect = moonRef.current?.getBoundingClientRect();

					if (rocketRect && moonRect) {
						const deltaX = moonRect.left - rocketRect.left;
						const deltaY = moonRect.top - rocketRect.top;

						console.log('Dynamic DeltaX:', deltaX, 'Dynamic DeltaY:', deltaY);

						// Variables to control proximity to the moon
						const proximityOffsetX = 50; // Adjust this value to control horizontal distance (negative to land left of the moon, positive to land right)
						const proximityOffsetY = -380; // Adjust this value to control vertical distance (negative to land above the moon, positive to land below)

						// Define the motion path with proximity offsets applied
						const motionPath = [
							{ x: 0, y: 0 }, // Start at current position
							{ x: deltaX * 0.25, y: deltaY * 0.25 }, // Curve point 1
							{ x: deltaX * 0.35, y: deltaY * 0.5  }, // Curve point 2, add upward arc
							{ x: deltaX * 0.45, y: deltaY * 0.75 }, // Curve point 3
							{ x: deltaX + proximityOffsetX, y: deltaY + proximityOffsetY }, // Final position near the moon with proximity adjustments
						];

						console.log(
							'Updated Motion Path with Proximity Offsets:',
							motionPath
						);

						console.log('Updated Motion Path:', motionPath);

						// Animate the rocket with the recalculated motion path
						const durationMultiplier = 0.5; // 0.5 to reduce to half, 2 to double the time, etc.

						animationTimeline.current!.to(
							rocketRef.current,
							{
								duration: 10 * durationMultiplier, // Apply the multiplier to the duration
								scale: 0.6,
								motionPath: {
									path: motionPath,
									curviness: 1.5,
								},
								rotate: -55,
								transformOrigin: 'center center',
								onUpdate: () => {
									const rect = rocketRef.current?.getBoundingClientRect();
									console.log(
										'Rocket position during motion path animation:',
										rect
									);
								},
							},
							'-=5'
						);
					}
				}, '-=5');
		}
	}, [initialRocketPosition, initialMoonPosition, onComplete]);

	return (
		<Box
			ref={containerRef}
			sx={{
				position: 'fixed',
				top: 0,
				left: 0,
				width: '100%',
				height: '100vh',
				zIndex: 50,
				overflow: 'hidden',
				pointerEvents: 'none',
			}}
		>
			{/* Rocket */}
			<Box
				className={'Rocket'}
				ref={rocketRef}
				sx={{
					position: 'absolute',
					width: '150px',
					height: '150px',
					transition: 'top 1s ease, left 1s ease',
				}}
			>
				<Lottie animationData={rocketAnimation} loop={false} />
			</Box>

			{/* Launch Pad */}
			<Box
				ref={launchPadRef}
				sx={{
					position: 'absolute',
					bottom: '0px',
					left: '50%',
					transform: 'translateX(-50%)',
					width: '200px',
					height: '50px',
					opacity: 1,
				}}
			>
				<img src={launchPadImage} alt='Launch Pad' width='100%' />
			</Box>

			{/* Moon */}
			<Box
				ref={moonRef}
				sx={{
					position: 'absolute',
					top: '15%', // Place the moon at the top-left corner explicitly
					left: '15%', // Ensure the moon starts in the top-left area
					width: '150px',
					height: '150px',
					transform: 'translate(-50%, -50%)',
					transition: 'top 1s ease, left 1s ease',
				}}
			>
				<Lottie animationData={moonAnimation} loop={true} />
			</Box>

			{/* Falling Stars */}
			<Box
				ref={starsRef}
				sx={{
					position: 'absolute',
					top: '0px',
					left: '0',
					width: '100%',
					height: '100vh',
					backgroundRepeat: 'repeat',
					backgroundSize: 'cover',
					opacity: 1,
				}}
			>
				<Lottie animationData={starsAnimation} loop={true} />
			</Box>
		</Box>
	);
};

export default RocketAnimation;
