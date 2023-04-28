import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import add from "../app.js;

Deno.test("test de la fonction add", () => {
  assertEquals(add(1, 2), 3);
  assertEquals(add(2, -3), -1);
  assertEquals(add("hello", 2), NaN);
});
