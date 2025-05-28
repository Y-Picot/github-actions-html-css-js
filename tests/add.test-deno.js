// Test de la fonction add_deno pour vérifier qu'elle retourne les résultats attendus
// et qu'elle lève des erreurs pour des paramètres invalides.
import { assertEquals, assertThrows } from "https://deno.land/std/testing/asserts.ts";
import { add_deno } from "../app-deno.js";

Deno.test("test de la fonction add-deno", () => {
  assertEquals(add_deno(1, 2), 3);
  assertEquals(add_deno(2, -3), -1);
  assertEquals(add_deno(0, 0), 0);
  
  assertThrows(
    () => {
      add_deno(NaN, 2);
    },
    Error,
    "Les paramètres doivent être des nombres"
  );

  assertThrows(
    () => {
      add_deno(2, NaN);
    },
    Error,
    "Les paramètres doivent être des nombres"
  );

  assertThrows(
    () => {
      add_deno(NaN, NaN);
    },
    Error,
    "Les paramètres doivent être des nombres"
  );
});
