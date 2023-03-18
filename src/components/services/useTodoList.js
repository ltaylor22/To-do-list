import { create } from "zustand";

export const useTodoList = create((set) => ({
  task: "",
  list: [],

  changeTask: (value) => {
    set({ task: value });
  },

  addTask: () => {
    set((store) => ({
      list: [...store.list, { label: store.task, done: false }],
      task: "",
    }));
    get().updateDataAPI();
  },

  completeTask: (index) => {
    set((store) => {
      const newList = [...store.list];
      newList[index].done = true;
      return { list: newList };
    });
    get().updateDataAPI();
  },

  getTodosFromAPI: () => {
    const options = { method: "GET" };

    fetch("https://assets.breatheco.de/apis/fake/todos/user/ltaylor22", options)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        set({ list: data });
      });
  },

  updateDataAPI: () => {
    const { list } = get();

    fetch("https://assets.breatheco.de/apis/fake/todos/user/ltaylor22"),
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(list),
      };
  },
}));
