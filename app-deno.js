export const add_deno = (a, b) => {
  if (isNaN(a) || isNaN(b)) {
    throw new Error('Les paramètres doivent être des nombres');
  }
  return a + b;
};
