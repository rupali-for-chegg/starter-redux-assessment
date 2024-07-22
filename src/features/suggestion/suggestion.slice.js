import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchSuggestion = createAsyncThunk(
    'suggestion/fetchSuggestion',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch("http://localhost:3004/api/suggestion");

            if (!response.ok) {
                // If the response status is not OK, throw an error
                throw new Error('Network response was not ok');
            }

            const data = await response.json();

            // Log the response data for debugging
            console.log('API Response Data:', data);

            return data.data; // Adjust based on the API response structure
        } catch (error) {
            // Log the error for debugging
            console.error('Fetch Suggestion Error:', error);

            return rejectWithValue(error.message);
        }
    }
);

const initialState = {
    suggestion: null,
    loading: false,
    error: null,
};

const suggestionSlice = createSlice({
    name: 'suggestion',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSuggestion.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSuggestion.fulfilled, (state, action) => {
                state.loading = false;
                state.suggestion = action.payload;
            })
            .addCase(fetchSuggestion.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || action.error.message;
            });
    },
});

export const selectSuggestion = (state) => state.suggestion.suggestion;
export const selectLoading = (state) => state.suggestion.loading;
export const selectError = (state) => state.suggestion.error;

export default suggestionSlice.reducer;
