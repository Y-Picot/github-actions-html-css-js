// Cette fonction additionne deux nombres et retourne le résultat.
// Elle lève une erreur si les paramètres ne sont pas des nombres.
function add_jest(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Les paramètres doivent être des nombres");
  }
  return a + b;
}

module.exports = add_jest;
