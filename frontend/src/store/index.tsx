import { configureStore } from '@reduxjs/toolkit'
import urlSlice from './urlSlice';

const mainStore = configureStore({
    reducer: {
        shortUrl: urlSlice
    }
});

export default mainStore;