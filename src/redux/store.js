import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slice/userSlice';
import cartSlice from './slice/cartSlice';

export default configureStore({
	reducer: {
		user: userSlice,
		cart: cartSlice,
	},
});
