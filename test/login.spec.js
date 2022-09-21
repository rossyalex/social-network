describe('Testing html in form login', () => {
  it('Email is empty', () => {
    document.body.innerHTML = '<input id="emailLogIn" type="text" value="" />';
    const email = document.getElementById('emailLogIn');
    expect(email.value).toBe('');
  });
  it('Email dont have value', () => {
    document.body.innerHTML = '<input id="emailLogIn" type="text" value="" />';
    const email = document.getElementById('emailLogIn');
    expect(email.value).not.toBe('faker@gmail.com');
  });

  it('Password is empty', () => {
    document.body.innerHTML = '<input id="passwordLogIn" type="password" placeholder="********" value="" />';
    const password = document.getElementById('passwordLogIn');
    expect(password.value).toBe('');
  });
  it('Password dont have value', () => {
    document.body.innerHTML = '<input id="passwordLogIn" type="password" placeholder="********" value="" />';
    const password = document.getElementById('passwordLogIn');
    expect(password.value).not.toBe('123456');
  });
});
