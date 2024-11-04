const PORT = 3000;

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

const todos: Todo[] = [
  { id: 1, title: "Buy groceries", completed: false },
  { id: 2, title: "Clean house", completed: true },
  { id: 3, title: "Cook dinner", completed: false },
];

function handleRequest(request: Request): Promise<Response> {
  const url = new URL(request.url);

  if (url.pathname === "/todos") {
    if (request.method === "GET") {
      return new Response(JSON.stringify(todos), {
        headers: { "Content-Type": "application/json" },
      });
    } else if (request.method === "POST") {
      return request.json().then((data: { title: string }) => {
        const newTodo: Todo = {
          id: todos.length + 1,
          title: data.title,
          completed: false,
        };

        todos.push(newTodo);

        return new Response(JSON.stringify(newTodo), {
          status: 201,
          headers: { "Content-Type": "application/json" },
        });
      });
    }
  }

  return new Response("Not found", { status: 404 });
}

console.log(`Server running at http://localhost:${PORT}`);

Deno.serve({ port: PORT }, handleRequest);

// curl http://localhost:3000/todos

// curl -X POST -H "Content-Type: application/json" -d '{"title":"Test Demo Api"}' http://localhost:3000/todos
