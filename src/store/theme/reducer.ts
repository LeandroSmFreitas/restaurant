import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getWebSettings } from '../../api/services/webSettingsService';
import { Venue } from '../../models/interfaces/WebSettings';

export const fetchTheme = createAsyncThunk<Venue>('theme/fetchTheme', async () => {
    const response = await getWebSettings();
    return response;
});

const themeSlice = createSlice({
  name: 'theme',
  initialState: {} as Venue,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTheme.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default themeSlice.reducer;