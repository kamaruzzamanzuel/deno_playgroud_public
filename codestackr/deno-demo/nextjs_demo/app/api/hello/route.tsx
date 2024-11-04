export const GET = (request: Request) => {
  return new Response(
    JSON.stringify({
      message: `Hello from deno! Current time is ${new Date().toLocaleString()}`,
    }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
};
