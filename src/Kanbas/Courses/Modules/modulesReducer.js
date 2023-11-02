import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";


const initialState = {
    modules: db.modules,
    module: { name: "New Module", description: "New Description" },
};


const modulesSlice = createSlice({
    name: "modules",
    initialState,
    reducers: {
        addModule: (state, action) => {
            state.modules = [
                { ...action.payload, _id: 'module' + new Date().getTime().toString() },
                ...state.modules,
            ];
            state.module = { name: "New Module", description: "New Description" }
        },
        deleteModule: (state, action) => {
            state.modules = state.modules.filter(
                (module) => module._id !== action.payload
            );
        },
        updateModule: (state, action) => {
            state.modules = state.modules.map((module) => {
                if (module._id === action.payload._id) {
                    return action.payload;
                } else {
                    return module;
                }
            });
            state.module = { name: "New Module", description: "New Description" }
        },
        setModule: (state, action) => {
            state.module = action.payload;
        },
    },
});


export const { addModule, deleteModule,
    updateModule, setModule } = modulesSlice.actions;
export default modulesSlice.reducer;