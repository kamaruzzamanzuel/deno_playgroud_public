const content = "Hello, Deno 2.0!";
await Deno.writeTextFile(" ./output.txt", content);
console.log("File written successfully!");

// deno --allow-write write_file.ts