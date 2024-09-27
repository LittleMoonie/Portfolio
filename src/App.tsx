import React, { useState, useEffect } from 'react';
import router from './Routes/Routes';
import { RouterProvider } from 'react-router-dom';

const App: React.FC = () => {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
};

export default App;
