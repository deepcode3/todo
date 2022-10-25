export type ITodo = {
    id: number;
    title: string;
    description: string;
    completed: boolean;
};

export type ITodos = {
    todos: ITodo[]; //  Todos is an array of Todo
};
