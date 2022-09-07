describe('Testing html in form login', () => {
  it('Email is empty', () => {
    document.body.innerHTML = '<input id="emailLogIn" type="text" value="" />';
    const email = document.getElementById('emailLogIn');
    expect(email.value).toBe('');
  });
  it('Email not have value', () => {
    document.body.innerHTML = '<input id="emailLogIn" type="text" value="" />';
    const email = document.getElementById('emailLogIn');
    expect(email.value).not.toBe('faker@gmail.com');
  });
});
