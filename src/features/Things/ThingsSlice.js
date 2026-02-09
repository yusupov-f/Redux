import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchThingsApi, fetchThingByIdApi } from "../../api/thingsApi";

// 📃 Загрузка списка
export const fetchThings = createAsyncThunk(
    "things/fetchAll",
    async () => {
        return await fetchThingsApi();
    }
);

// 🔍 Загрузка одной вещи
export const fetchThingById = createAsyncThunk(
    "things/fetchById",
    async (id) => {
        return await fetchThingByIdApi(id);
    }
);

const thingsSlice = createSlice({
    name: "things",
    initialState: {
        items: [],
        selectedThing: null,
        status: "idle",
        error: null
    },
    reducers: {
        clearSelectedThing(state) {
            state.selectedThing = null;
        }
    },
    extraReducers: (builder) => {
        builder
            // список
            .addCase(fetchThings.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchThings.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.items = action.payload;
            })
            .addCase(fetchThings.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })

            // одна вещь
            .addCase(fetchThingById.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchThingById.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.selectedThing = action.payload;
            })
            .addCase(fetchThingById.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    }
});

export const { clearSelectedThing } = thingsSlice.actions;
export default thingsSlice.reducer;