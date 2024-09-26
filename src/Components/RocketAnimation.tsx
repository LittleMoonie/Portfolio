import React, { useRef, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import Lottie from 'lottie-react';
import gsap from 'gsap';
import Stats from 'stats-gl';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'; // Import MotionPathPlugin
import rocketAnimation from '../lottiefiles/rocket.json'; // Replace with your rocket Lottie file
import moonAnimation from '../lottiefiles/moon.json'; // Replace with your moon Lottie file

interface RocketAnimationProps {
	onComplete: () => void; // Callback when animation is done
}

const RocketAnimation: React.FC<RocketAnimationProps> = ({ onComplete }) => {
	const rocketRef = useRef<HTMLDivElement>(null);
	const moonRef = useRef<HTMLDivElement>(null);
	const commentRef = useRef<HTMLDivElement>(null);
	const starsRef = useRef<HTMLDivElement>(null);
	const stats = useRef(new Stats());

	useEffect(() => {
		// Register MotionPathPlugin for GSAP
		gsap.registerPlugin(MotionPathPlugin);

		// Attach StatsGL to the DOM for performance monitoring
		document.body.appendChild(stats.current.dom);

		// GSAP Animation Timeline for rocket movement and rotation
		const tl = gsap.timeline({
			onComplete: () => onComplete(), // Callback when animation completes
		});

		// First Stage: Blast off for 2 seconds
		tl.to(rocketRef.current, {
			duration: 1.8, // Faster upward movement to avoid long delay
			y: -250, // Move straight up to y = -250
			ease: 'power4.inOut', // Smooth easing for gradual acceleration and deceleration
		})
			// Second Stage: Add stars and shake the rocket slightly for turbulence (2.5s)
			.add(() => {
				// Make stars gradually appear and move down smoothly
				gsap.to(starsRef.current, {
					opacity: 1,
					duration: 0.5, // Quicker fade-in for stars
					ease: 'power2.inOut',
				});
				gsap.to(starsRef.current, {
					y: 1000,
					duration: 3, // Keep stars moving continuously throughout
					ease: 'linear', // Smooth, continuous star movement
					repeat: -1,
				});

				// Subtle rocket shaking for turbulence
				gsap.to(rocketRef.current, {
					x: '+=3', // Smaller shake amount for subtle effect
					y: '+=3',
					yoyo: true,
					repeat: 10, // Slightly reduce shaking repetitions
					duration: 0.08, // Faster shake for realism
					ease: 'sine.inOut',
				});
			}, '+=0.2') // Added slight delay before shaking begins
			// Third Stage: Apply curviness to head to the moon (3s), with manual rotation only after shaking
			.to(
				rocketRef.current,
				{
					duration: 3.5, // Slightly faster curved motion to keep momentum
					ease: 'power4.inOut', // Smoother easing for entering the curve
					motionPath: {
						path: [
							{ x: 0, y: -250 }, // Match the ending point of the straight-up motion
							{ x: -50, y: -280 }, // Start a gentle curve
							{ x: -150, y: -400 }, // Gradual turn upward
							{ x: -250, y: -450 }, // Smooth curve towards the moon
							{ x: -450, y: -600 }, // More gradual curve upward
							{ x: -600, y: -700 }, // Approaching the moon smoothly
							{ x: -800, y: -800 }, // Final point near the moon
						],
						curviness: 1.2, // Adjust the curviness for fluid motion
					},
					onUpdate: () => {
						const progress = tl.progress(); // Get animation progress (0 to 1)

						// Only apply rotation after the shaking (during the curving)
						if (progress > 0.2) {
							const rotate = progress * -55; // Smooth rotation along the curve
							gsap.set(rocketRef.current, { rotate });
						}
					},
				},
				'-=0.1' // Start the second animation 0.1 seconds before the first ends
			)
			// Show "We're arriving!" comment bubble above the rocket
			.add(() => {
				gsap.to(commentRef.current, {
					opacity: 1,
					y: -80,
					duration: 1.5, // Speed up the bubble appearance to match the curve
					ease: 'power1.inOut',
				});
			}, '-=3.5') // Bubble appears earlier to sync with rocket approaching moon
			// Fourth Stage: Scale down the rocket once the "We're arriving!" text is done
			.add(() => {
				gsap.to(rocketRef.current, {
					scale: 0.5, // Shrink rocket to 50% of its original size
					transformOrigin: 'center center', // Ensure it scales from the center
					duration: 2, // Duration of the scaling effect
					ease: 'power2.inOut',
				});
			}, '+=0.5'); // Start scaling down shortly after "We're arriving!" bubble

		// Moon fade-in effect after rocket reaches its position
		gsap.to(moonRef.current, {
			opacity: 1,
			delay: 1.5, // Shorter delay so moon appears in sync
			duration: 1,
			ease: 'power2.inOut',
		});

		// Clean up StatsGL from DOM on unmount
		return () => {
			document.body.removeChild(stats.current.dom);
		};
	}, [onComplete]);

	return (
		<Box
			sx={{
				height: '100vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: '#121212',
				position: 'relative',
				overflow: 'hidden',
			}}
		>
			{/* Rocket */}
			<Box
				ref={rocketRef}
				sx={{
					position: 'absolute',
					bottom: '20px', // Start from bottom
					left: '50%', // Centered horizontally
					transform: 'translateX(-50%)', // Center horizontally
					width: '150px',
					height: '150px',
				}}
			>
				<Lottie animationData={rocketAnimation} loop={false} />
			</Box>

			{/* Comment Bubble */}
			<Box
				ref={commentRef}
				sx={{
					position: 'absolute',
					bottom: '180px', // Adjusted based on rocket position
					left: '50%',
					transform: 'translateX(-50%)',
					opacity: 0, // Initially hidden
				}}
			>
				<Typography
					variant='body1'
					sx={{
						backgroundColor: '#ffffff',
						color: '#000',
						padding: '10px',
						borderRadius: '10px',
						boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.3)',
					}}
				>
					We're arriving!
				</Typography>
			</Box>

			{/* Moon */}
			<Box
				ref={moonRef}
				sx={{
					position: 'absolute',
					top: '10px', // Moon at the top-left corner
					left: '10px',
					width: '150px',
					height: '150px',
					opacity: 0, // Hidden initially, fades in
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
					backgroundImage: 'url(/path/to/star-background.png)', // Your star asset
					backgroundRepeat: 'repeat',
					backgroundSize: 'cover',
					opacity: 0, // Initially hidden
				}}
			/>
		</Box>
	);
};

export default RocketAnimation;
