import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    color_group_list: [],
};
const colorSlice = createSlice({
    name: "colorSlice",
    initialState,
    reducers: {
        addGroup: (state, action) => {
            state.color_group_list = [...state.color_group_list,action.payload];
            console.log(state.color_group_list,'color_group_list')
        },
        completedColor: (state, action) => {
            const currentIndex = action.payload.index;
            const completed = action.payload.completed;

            const newTodo = [...state.color_group_list];

            newTodo[currentIndex].completed = completed;

            state.color_group_list = newTodo;
            console.log(newTodo,'newTodo')
        },
    },
});

export const { addGroup,completedColor} = colorSlice.actions;

export default colorSlice.reducer;