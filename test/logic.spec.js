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
});
