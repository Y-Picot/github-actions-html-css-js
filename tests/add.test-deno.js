import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { add_deno } from '../app.js';

Deno.test("test de la fonction add", () => {
  assertEquals(add_deno(1, 2), 3);
  assertEquals(add_deno(2, -3), -1);
  assertEquals(add_deno("hello", 2), NaN);
});
