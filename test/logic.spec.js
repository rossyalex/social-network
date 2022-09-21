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

  it('should be button buttonOutGoogle defined', () => {
    document.body.innerHTML = '<a href="#" id="outGoogle"><i class="fa fa-window-close icon" aria-hidden="true"></i></a>';
    const buttonOutGoogle = document.getElementById('outGoogle');
    expect(buttonOutGoogle).toBeDefined();
  });

  it('should be button buttonOutGoogle null', () => {
    document.body.innerHTML = '';
    const buttonOutGoogle = document.getElementById('outGoogle');
    expect(buttonOutGoogle).toBeNull();
  });

  it('should be button signInView defined', () => {
    document.body.innerHTML = '<button id="initiation" type="button" class="button"><span>Iniciar Sesión</span></button>';
    const signInView = document.getElementById('initiation');
    expect(signInView).toBeDefined();
  });

  it('should be button signInView null', () => {
    document.body.innerHTML = '';
    const signInView = document.getElementById('initiation');
    expect(signInView).toBeNull();
  });

  it('should be button registerView defined', () => {
    document.body.innerHTML = '<button id="create" type="button" class="button"><span>Crear Cuenta</span></button>';
    const registerView = document.getElementById('create');
    expect(registerView).toBeDefined();
  });

  it('should be button registerView null', () => {
    document.body.innerHTML = '';
    const registerView = document.getElementById('create');
    expect(registerView).toBeNull();
  });

  it('should be button buttonLogIn defined', () => {
    document.body.innerHTML = '<button type="button" class="button" id="login"><span>Ingresar</span></button>';
    const buttonLogIn = document.getElementById('login');
    expect(buttonLogIn).toBeDefined();
  });

  it('should be button buttonLogIn null', () => {
    document.body.innerHTML = '';
    const buttonLogIn = document.getElementById('login');
    expect(buttonLogIn).toBeNull();
  });

  it('should be button home defined', () => {
    document.body.innerHTML = '<div id="home" class="card"><h1>Runner Lovers</h1><p>Acá podrás revisar y compartir toda la información actualizada de nuestra pasión, además de acompañarnos en los entrenamientos.</p><label for="comment"></label><textarea name="content" id="content" cols="35" rows="10"></textarea><button id="createPost" class="button"><span><i class="fa-solid fa-paper-plane"></i></span></button></div>';
    const home = document.getElementById('home');
    expect(home).toBeDefined();
  });

  it('should be button home null', () => {
    document.body.innerHTML = '';
    const home = document.getElementById('home');
    expect(home).toBeNull();
  });

  it('should be button feeding defined', () => {
    document.body.innerHTML = '<div id="feeding" class="card"><h1>Alimentación</h1><p>Espacio dedicado para compartirnos información relacionada a la alimentación para periodos de entrenamiento y competencias, tiendas donde se puedan conseguir alimentos deportivos</p><label for="comment"></label><textarea name="content" id="feedingContent" cols="35" rows="10"></textarea><button id="createPost" class="button"><span><i class="fa-solid fa-paper-plane"></i></span></button></div>';
    const feeding = document.getElementById('feeding');
    expect(feeding).toBeDefined();
  });

  it('should be button feeding null', () => {
    document.body.innerHTML = '';
    const feeding = document.getElementById('feeding');
    expect(feeding).toBeNull();
  });

  it('should be button training defined', () => {
    document.body.innerHTML = '<div id="training" class="card"> <h1>Entrenamientos y Eventos</h1><p>Espacio dedicado para compartirnos información relacionada a rutinas de entrenamiento, formar grupos de entrenamiento en conjunto y más</p><label for="comment"></label><textarea name="content" id="trainingContent" cols="35" rows="10"></textarea><button id="createPost" class="button"><span><i class="fa-solid fa-paper-plane"></i></span></button></div>';
    const training = document.getElementById('training');
    expect(training).toBeDefined();
  });

  it('should be button training null', () => {
    document.body.innerHTML = '';
    const training = document.getElementById('training');
    expect(training).toBeNull();
  });
});
