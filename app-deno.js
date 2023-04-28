export const add_deno = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Les paramètres doivent être des nombres');
  }
  return a + b;
};
