import AddTodo from "@/components/todo/AddTodo";
import TodoHeader from "@/components/todo/TodoHeader";
import TodoItem from "@/components/todo/TodoItem";
import { ITodo } from "@/interface/todo";
import { addTodo, deleteTodo, selectTodos, toggleTodo, updateTodo } from "@/redux/features/todosSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useState } from "react";

const Todo = () => {
  const [filter, setFilter] = useState<string>("all");
  const dispatch = useAppDispatch();
  const todos = useAppSelector(selectTodos);

  const activeTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  const filteredActiveTodos = filter === "all" ? activeTodos : activeTodos.filter((todo) => todo.priority === filter);

  const handleAdd = (title: string, description: string, priority: "low" | "medium" | "high") => {
    const newTodo: ITodo = {
      title,
      description,
      priority,
    };
    dispatch(addTodo(newTodo));
  };

  const handleEdit = (id: number, title: string, description: string, priority: any) => {
    dispatch(
      updateTodo({
        id,
        title,
        description,
        priority,
      })
    );
  };

  const handleDelete = (id: number) => {
    dispatch(deleteTodo(id));
  };

  const handleToggle = (id: number) => {
    dispatch(toggleTodo(id));
  };

  return (
    <div className="container py-8 space-y-6">
      <div className="bg-white rounded-lg shadow-lg">
        <TodoHeader onFilterChange={setFilter} />
        <div className={`p-6 ${filteredActiveTodos.length > 0 && "space-y-6"}`}>
          <AddTodo onAdd={handleAdd} />

          {/* Active Todos */}
          <div className="space-y-3">
            {filteredActiveTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                {...todo}
                onEdit={(title, description, priority) => handleEdit(todo.id as number, title, description, priority)}
                onDelete={() => handleDelete(todo.id as number)}
                onToggle={() => handleToggle(todo.id as number)}
              />
            ))}
          </div>

          {/* Completed Todos */}
          {completedTodos.length > 0 && (
            <div className="mt-8 pt-6 border-t">
              <h2 className="text-lg font-semibold text-muted-foreground mb-4">Completed Tasks</h2>
              <div className="space-y-3">
                {completedTodos.map((todo) => (
                  <TodoItem
                    key={todo.id}
                    {...todo}
                    onEdit={(title, description, priority) =>
                      handleEdit(todo.id as number, title, description, priority)
                    }
                    onDelete={() => handleDelete(todo.id as number)}
                    onToggle={() => handleToggle(todo.id as number)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Todo;
