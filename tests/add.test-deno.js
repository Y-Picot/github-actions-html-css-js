import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { add_deno } from '../app-deno.js';

Deno.test("test de la fonction add", () => {
  assertEquals(add_deno(1, 2), 3);
  assertEquals(add_deno(2, -3), -1);
  assertEquals(isNaN(add_deno("hello", 2)), true);
});
