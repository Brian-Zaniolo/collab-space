import { configureStore } from '@reduxjs/toolkit';
import cardItemSlice from "./slices/CardItemSlice";

export default configureStore({
    reducer: {
        cardItem: cardItemSlice,
    },
});

