import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { add_deno } from '../app-deno.js';

Deno.test("test de la fonction add-deno", () => {
  assertEquals(add_deno(1, 2), 3);
  assertEquals(add_deno(2, -3), -1);
  assertEquals(add_deno(0, 0), 0); // Ajout d'un autre test
  assertEquals(add_deno(NaN, 2), NaN); // Ajout d'un autre test
});
