// deno stanadard library
import { copy } from "https://deno.land/std@0.224.0/fs/copy.ts";

await copy("./output.txt", "./bar");

// any url with mod.ts at the end can be imported as a module
import { Application } from "https://deno.land/x/oak@v12.5.0/mod.ts";

const app = new Application();
app.use(async (ctx) => {
    ctx.response.body = "Hello World";
});

await app.listen({ port: 8000 });

// npm packages can be imported using the npm: prefix
import cowsay from "npm:cowsay@1.5.0";
console.log(cowsay.say({ text: "Moo from npm in Deno!" }));

// import from jsr library
import { join } from "jsr:@std/path@1.0.7";

console.log(join("foo", "bar"));

// import using import maps
import dayjs from "dayjs";

console.log(dayjs().format("YYYY-MM-DD HH:mm:ss"));

