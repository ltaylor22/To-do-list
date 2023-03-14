import { create } from "zustand";

export const useTodoList = create((set) => ({
  task: "",
  list: [],

  changeTask: (value) => {
    set({ task: value });
  },

  addTask: () => {
    set((store) => ({
      list: [...store.list, { task: store.task, done: false }],
      task: "",
    }));
  },

  completeTask: (index) => {
    set((store) => {
      const newList = [...store.list];
      newList[index].done = true;
      return { list: newList };
    });
  },
}));
