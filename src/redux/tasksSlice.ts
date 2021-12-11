import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TasksModel } from "models/tasksModel";
import { v4 as uuidv4 } from "uuid";

const initialState = [] as TasksModel[];

const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: {
            reducer: (state: any, action: PayloadAction<TasksModel>) => {
                state.push(action.payload);
            },
            prepare: (title: string, description: string, gift: string, priority: string, isDone: boolean) => ({
                payload: {
                    id: uuidv4(),
                    title,
                    description,
                    gift,
                    priority,
                    isDone
                } as TasksModel,
            }),
        },
        removeTask(state: any, action: PayloadAction<string>) {
            const index = state.findIndex((task: TasksModel) => task.id === action.payload);
            state.splice(index, 1);
        },
        editTask(
            state: any,
            action: PayloadAction<TasksModel>
        ) {
            const index = state.findIndex((task: TasksModel) => task.id === action.payload.id);
            state[index] = action.payload;
        },
        setTaskDoneStatus(
            state,
            action: PayloadAction<{ isDone: boolean; id: string }>
        ) {
            const index = state.findIndex((todo) => todo.id === action.payload.id);
            state[index].isDone = action.payload.isDone;
        },
    },
});

export const { addTask, removeTask, editTask, setTaskDoneStatus } = tasksSlice.actions;
export default tasksSlice.reducer;