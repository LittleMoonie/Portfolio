// src/routes/routes.tsx

import React from 'react';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from 'react-router-dom';
import Layout from '../Components/Layout';
import NotFound from '../Views/Error404';

// Define your routes
const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path='/' element={<Layout />} />
			{/* <Route path='/SolaLunaire' element={<SolaLunaire />} /> */}

			{/* Wildcard route for 404 - Page Not Found */}
			<Route path='*' element={<NotFound />} />
		</>
	)
);

export default router;
