// Définition de la fonction à tester
function addition(a, b) {
  return a + b;
}

// Tests unitaires avec Jest
describe('Test de la fonction addition', () => {
  it('Doit retourner 3 si on passe 1 et 2 en paramètres', () => {
    expect(addition(1, 2)).toBe(3);
  });

  it('Doit retourner 0 si on passe 0 et 0 en paramètres', () => {
    expect(addition(0, 0)).toBe(0);
  });

  it('Doit retourner -5 si on passe -2 et -3 en paramètres', () => {
    expect(addition(-2, -3)).toBe(-5);
  });
});
