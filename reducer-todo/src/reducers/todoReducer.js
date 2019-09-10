export const initialState = {
  todos: [
    {
      item: "Learn about reducers",
      completed: false,
      id: 3892987586
    },
    {
      item: "Eat grass",
      completed: false,
      id: 3892987587
    },
    {
      item: "Feed worms",
      completed: false,
      id: 3892987589
    }
  ]
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          { item: action.payload, completed: false, id: Date.now() }
        ]
      };
    case "TOGGLE_COMPLETE":
      return {
        ...state,
        todos: [...state.todos].map(todo => {
          if (todo.id === action.payload) {
            return { ...todo, completed: !todo.completed };
          } else {
            return todo;
          }
        })
      };
    case "REMOVE_TODOS":
      return {
        ...state,
        todos: [...state.todos].filter(todo => todo.completed === false)
      };
    default:
      return state;
  }
};
