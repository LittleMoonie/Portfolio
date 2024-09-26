import React, { useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const PARTICLE_COUNT = 200;
const PARTICLE_SIZE = 3; 
const MAX_DISTANCE = 0.2;
const MOUSE_DISTANCE = 0.3;

export const Particles: React.FC = () => {
	const particlesRef = useRef<THREE.Points>(null);
	const linesRef = useRef<THREE.LineSegments>(null);
	const { viewport } = useThree();
	const [positions] = useState(() => {
		const positionsArray = new Float32Array(PARTICLE_COUNT * 3); // x, y, z for each particle
		for (let i = 0; i < PARTICLE_COUNT * 3; i++) {
			positionsArray[i] = (Math.random() - 0.5) * 2; // Random positions between -1 and 1
		}
		return positionsArray;
	});

	const [linePositions] = useState(
		() => new Float32Array(PARTICLE_COUNT * PARTICLE_COUNT * 3 * 2)
	);
	const mouse = useRef({ x: 0, y: 0, z: 0 });

	// Handle mouse move (normalized to viewport)
	const handleMouseMove = (event: MouseEvent) => {
		const { width, height } = viewport;

		// Adjust the Y-coordinate to fine-tune the position
		const yOffset = -0.03; // Slight vertical adjustment

		mouse.current.x = (event.clientX / window.innerWidth) * width - width / 2;
		mouse.current.y =
			-(event.clientY / window.innerHeight) * height + height / 2 + yOffset;
		mouse.current.z = 0; // Keep the mouse on the same z-plane as the particles
	};

	React.useEffect(() => {
		window.addEventListener('mousemove', handleMouseMove);
		return () => window.removeEventListener('mousemove', handleMouseMove);
	}, [viewport]);

	useFrame(() => {
		if (!particlesRef.current || !linesRef.current) return;

		const positionsArray =
			particlesRef.current.geometry.attributes.position.array;
		const linePositionsArray =
			linesRef.current.geometry.attributes.position.array;
		let lineIndex = 0;

		for (let i = 0; i < PARTICLE_COUNT * 3; i += 3) {
			const x1 = positionsArray[i];
			const y1 = positionsArray[i + 1];
			const z1 = positionsArray[i + 2];

			// Update particle positions slightly for a moving effect
			positionsArray[i] += (Math.random() - 0.5) * 0.001;
			positionsArray[i + 1] += (Math.random() - 0.5) * 0.001;

			// Compare particles to other particles for connecting lines
			for (let j = i + 3; j < PARTICLE_COUNT * 3; j += 3) {
				const x2 = positionsArray[j];
				const y2 = positionsArray[j + 1];
				const z2 = positionsArray[j + 2];

				const dist = Math.sqrt(
					(x1 - x2) ** 2 + (y1 - y2) ** 2 + (z1 - z2) ** 2
				);

				// Only draw a line if particles are close enough
				if (dist < MAX_DISTANCE) {
					linePositionsArray[lineIndex++] = x1;
					linePositionsArray[lineIndex++] = y1;
					linePositionsArray[lineIndex++] = z1;
					linePositionsArray[lineIndex++] = x2;
					linePositionsArray[lineIndex++] = y2;
					linePositionsArray[lineIndex++] = z2;
				}
			}

			// Connect particles to the mouse if close enough
			const mouseDistance = Math.sqrt(
				(x1 - mouse.current.x) ** 2 +
					(y1 - mouse.current.y) ** 2 +
					(z1 - mouse.current.z) ** 2
			);

			if (mouseDistance < MOUSE_DISTANCE) {
				// Draw line between particle and mouse
				linePositionsArray[lineIndex++] = x1;
				linePositionsArray[lineIndex++] = y1;
				linePositionsArray[lineIndex++] = z1;
				linePositionsArray[lineIndex++] = mouse.current.x;
				linePositionsArray[lineIndex++] = mouse.current.y;
				linePositionsArray[lineIndex++] = mouse.current.z;
			}
		}

		particlesRef.current.geometry.attributes.position.needsUpdate = true;
		linesRef.current.geometry.attributes.position.needsUpdate = true;
	});

	return (
		<>
			{/* Particles */}
			<points ref={particlesRef}>
				<bufferGeometry>
					<bufferAttribute
						attach='attributes-position'
						array={positions}
						count={positions.length / 3}
						itemSize={3}
					/>
				</bufferGeometry>
				<pointsMaterial
					size={PARTICLE_SIZE}
					color='#ffffff'
					sizeAttenuation={false} // Ensure particles are round and uniform in size
				/>
			</points>

			{/* Lines connecting particles and particles to mouse */}
			<lineSegments ref={linesRef}>
				<bufferGeometry>
					<bufferAttribute
						attach='attributes-position'
						array={linePositions}
						count={linePositions.length / 3}
						itemSize={3}
					/>
				</bufferGeometry>
				<lineBasicMaterial color='#ffffff' transparent opacity={0.3} />
			</lineSegments>
		</>
	);
};
