export const add_deno = (a, b) => {
  if (isNaN(Number(a)) || isNaN(Number(b))) {
    throw new Error('Les paramètres doivent être des nombres');
  }
  return a + b;
};
