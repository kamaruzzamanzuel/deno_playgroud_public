import { parse } from "https://deno.land/std@0.190.0/flags/mod.ts";

const { encode, decode, help } = parse(Deno.args, {
    boolean: ["encode", "decode", "help"],
    alias: { e: "encode", d: "decode", h: "help" },
});

if (help) {
    console.log("Usage: base64_cli [options] <text>");
    console.log("Options: ");
    console.log("  —e, ——encode  Encode text to base64");
    console.log("  —d, ——decode  Decode base64 to text");
    console.log("  —h, ——help    Show help");
    Deno.exit(0);
}

// const text = Deno.args.slice(1).join(" ");
const text = Deno.args[Deno.args.length - 1];

if (encode) {
    console.log(btoa(text));
} else if (decode) {
    console.log(atob(text));
} else {
    console.log("Please specify --encode or --decode");
    Deno.exit(1);
}
 