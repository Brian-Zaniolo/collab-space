import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    data: [],
    loading: false,
    error: null,
};

const CardItemSlice = createSlice({
    name: 'cardItem',
    initialState,
    reducers: {
        addCardItem: (state, { payload }) => {
            state.data.push({ id: uuidv4(), title: payload });
        },
        removeCardItem: (state, { payload }) => {
            state.data = state.data.filter((item) => item.id !== payload);
        },
        updateCardItem: (state, { payload }) => {
            const { id, value } = payload;
            const index = state.data.findIndex((item) => item.id === id);
            if (index !== -1) {
                state.data[index].title = value;
            } else {
                state.error = `Item with id ${id} not found`;
            }
        },
        setLoading: (state, { payload }) => {
            state.loading = payload;
        },
        setError: (state, { payload }) => {
            state.error = payload;
        },
        clearError: (state) => {
            state.error = null;
        },
    },
});

export const {
    addCardItem,
    removeCardItem,
    updateCardItem,
    setLoading,
    setError,
    clearError,
} = CardItemSlice.actions;

export const getCardItems = (state) => state.cardItem.data;

export default CardItemSlice.reducer;
