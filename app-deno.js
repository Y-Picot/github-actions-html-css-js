// Cette fonction additionne deux nombres et retourne le résultat.
// Elle lève une erreur si les paramètres ne sont pas des nombres.
export const add_deno = (a, b) => {
  if (isNaN(a) || isNaN(b)) {
    throw new Error("Les paramètres doivent être des nombres");
  }
  return a + b;
};
