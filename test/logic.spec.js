describe('Testing of Logic APP', () => {
  it('should be button register defined', () => {
    document.body.innerHTML = '<button type="button" class="button" id="registerUser"><span>Registrate</span></button>';
    const buttonRegister = document.getElementById('registerUser');
    expect(buttonRegister).toBeDefined();
  });

  it('should be button register null', () => {
    document.body.innerHTML = '';
    const buttonRegister = document.getElementById('registerUser');
    expect(buttonRegister).toBeNull();
  });

  it('should be button signInGoogle defined', () => {
    document.body.innerHTML = '<button id="linkWithGoogle" type="button" class="button"><img src="../../img/google.png" alt="Logo Google" id="linkgoogleImg"/><span>Vincular Cuenta con Google</span></button>';
    const signInGoogle = document.getElementById('linkWithGoogle');
    expect(signInGoogle).toBeDefined();
  });

  it('should be button signInGoogle null', () => {
    document.body.innerHTML = '';
    const signInGoogle = document.getElementById('linkWithGoogle');
    expect(signInGoogle).toBeNull();
  });
});
