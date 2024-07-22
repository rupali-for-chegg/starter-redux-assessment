import { createSlice } from '@reduxjs/toolkit';
import photos from './photos.data.js'; // Ensure this path is correct

const initialState = {
  photos: photos, // Initialize with data from photos.data.js
};

const photosSlice = createSlice({
  name: 'photos',
  initialState: initialState, // Use the initialState object
  reducers: {
    addPhoto: (state, action) => {
      state.photos.push(action.payload);
    },
    removePhoto: (state, action) => {
      state.photos = state.photos.filter(photo => photo.id !== action.payload);
    },
    // Add other reducers here if needed
  },
});

export const { addPhoto, removePhoto } = photosSlice.actions;

// Selector to get the list of photos
export const selectFilteredPhotos = (state) => state.photos.photos; // Adjust the selector if needed

export default photosSlice.reducer;
