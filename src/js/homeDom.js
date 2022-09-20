import {
  addComment,
  addPosts,
  allPosts,
  deleteComment, deletePost,
  editComment,
  likePost, updatePost,
} from '../firebase/post.js';
import { dateSocial, orderByDate } from './helper.js';

/**
 * Función que renderiza cada uno de los post
 * @param posts
 */
export function renderPost(posts) {
  const renderId = document.getElementById('renderPosts');
  const userId = localStorage.getItem('uid');
  const name = localStorage.getItem('email');
  renderId.innerHTML = '';
  let cardPost = '';
  posts.forEach((post) => {
    cardPost += `<div class="cardPost">
                <h4>Runner ${post.name}</h4>
                <p>${post.content}</p>
                <p class="datePost">Creado el ${post.date}</p>
                <div class="hide editPost" data-id="${post.id}"><textarea class="textEditComment" data-id="${post.id}" cols="35" rows="10">${post.content}</textarea><button class="editPostButton">Editar Post</button></div>
                <button class="buttonLike tooltip" data-id="${post.id}">
                    <i class="fa-solid fa-hand-holding-heart" data-id="${post.id}"></i>
                    ${post.likes.qty === undefined ? 0 : post.likes.qty}
                    <span class="tooltiptext">Darle Me gusta</span>
                </button>
                <button class="buttonAddComment tooltip">
                    <i class="fa-solid fa-comment"></i>
                    <span class="tooltiptext">Comentar</span>
                </button>`;
    if (post.userId === userId) {
      cardPost += `
<button class="tooltip buttonEdit" data-id="${post.id}"><i class="fa-solid fa-pen-to-square" data-id="${post.id}"></i> <span class="tooltiptext">Editar</span></button>
<button class="tooltip buttonDelete" data-id="${post.id}"><i class="fa-solid fa-trash-can" data-id="${post.id}"></i><span class="tooltiptext">Eliminar</span></button>`;
    }
    cardPost += `<div class="divComment hide">
                    <textarea class="textComment" data-id="${post.id}" cols="35" rows="4"></textarea>
                    <button class="buttonPostComment">Crear comentario</button>
                </div>`;
    if (post.comments.length > 0) {
      cardPost += '<div class="commentsPost"><h4>Leer comentarios</h4>';
      post.comments.forEach((comment, i) => {
        cardPost += `<h5 class="comment" data-id="${i}">De: ${comment.user}</h5><p class="comment">${comment.comment}</p>`;
        if (name === comment.user) {
          cardPost += `<button class="editComment" data-id="${i}"><i class="fa-solid fa-pen"></i></button>
                       <button class="deleteComment" data-id="${i}" data-post="${post.id}"><i class="fa-solid fa-trash"></i></button>
                      <div class="hide divEditComment">
                         <input type="text" class="editCommentInput" value="${comment.comment}" data-id="${i}" data-post="${post.id}"><i class="fa-sharp fa-solid fa-paper-plane edit"></i>
                      </div>`;
        }
      });
      cardPost += '</div>';
    }
    cardPost += '</div>';
  });
  renderId.innerHTML = cardPost;
  // eslint-disable-next-line no-use-before-define
  handlePost();
}

/**
 * Función que trae todos los posts
 * @return {Promise<void>}
 */
export async function getAllPosts() {
  const posts = await allPosts();
  const postOrder = orderByDate(posts);
  renderPost(postOrder);
}

/**
 * Función que crea el post con la estructura correspondiente
 * @return {Promise<void>}
 */
export async function createPost() {
  const content = document.getElementById('content');
  const message = content.value;
  const datePost = dateSocial();
  const postData = {
    content: message,
    userId: localStorage.getItem('uid'),
    name: localStorage.getItem('email'),
    likes: {
      qty: 0,
      users: [],
    },
    comments: [],
    date: datePost,
  };
  await addPosts(postData);
  content.value = '';
  await getAllPosts();
}

/**
 * Funcion para editar el post siempre y cuando sea el usuario dueño del post
 * @param e
 * @return {Promise<void>}
 */
export async function editPostEvent(e) {
  const inputPost = e.target.previousSibling;
  const postId = inputPost.getAttribute('data-id');
  const msg = inputPost.value;
  await updatePost(postId, msg);
  await getAllPosts();
}

/**
 * Función para crear los eventos de click para crear post
 */
export function createClickPost() {
  const buttonPost = document.getElementById('createPost');
  buttonPost.addEventListener('click', createPost);
}

/**
 * Función para crear los eventos para editar el post
 */
export function createClickEditPost() {
  const editButtons = document.querySelectorAll('.buttonEdit');
  const editDivPost = document.querySelectorAll('.editPost');
  const editPostButtons = document.querySelectorAll('.editPostButton');
  editButtons.forEach((button) => {
    const dataId = button.getAttribute('data-id');
    editDivPost.forEach((eleHtml, i) => {
      const eleDataId = eleHtml.getAttribute('data-id');
      if (dataId === eleDataId) {
        console.log('Pasa aca', eleDataId);
        button.addEventListener('click', () => {
          eleHtml.classList.toggle('hide');
          editPostButtons[i].addEventListener('click', editPostEvent);
        });
      }
    });
  });
}

/**
 * Función para eliminar el post
 * @param e
 * @return {Promise<void>}
 */
export async function deletePostEvent(e) {
  const button = e.target;
  const postId = button.getAttribute('data-id');
  await deletePost(postId);
  await getAllPosts();
}

/**
 * Función para crear los eventos para eliminar el post
 */
export function createClickDeletePost() {
  const deleteButtons = document.querySelectorAll('.buttonDelete');
  deleteButtons.forEach((button) => {
    button.addEventListener('click', deletePostEvent);
  });
}

/**
 * Función para editar el comentario del post si el usuario es el titular
 * @param e
 * @return {Promise<void>}
 */
export async function editCommentPost(e) {
  const inputComment = e.target.previousSibling;
  const comment = inputComment.value;
  const position = inputComment.getAttribute('data-id');
  const post = inputComment.getAttribute('data-post');
  await editComment(post, comment, position);
  await getAllPosts();
}

/**
 * Función para eliminar el comentario si el usuario es el titular
 * @param e
 * @return {Promise<void>}
 */
export async function deleteCommentPost(e) {
  const button = e.target.parentNode;
  const commentId = button.getAttribute('data-id');
  const postId = button.getAttribute('data-post');
  await deleteComment(postId, commentId);
  await getAllPosts();
}

/**
 * Función para agregar o quitar el like
 * @param e
 * @return {Promise<void>}
 */
export async function changeLikePost(e) {
  const button = e.target;
  const postId = button.getAttribute('data-id');
  const userId = localStorage.getItem('email');
  await likePost(postId, userId);
  await getAllPosts();
}

/**
 * Función para agregar el evento de likes
 */
export function createClickLikePost() {
  const likeButtons = document.querySelectorAll('.buttonLike');
  likeButtons.forEach((button) => {
    button.addEventListener('click', changeLikePost);
  });
}

/**
 * Función para crear el evento de eliminar comentario
 */
export function createClickDeleteComment() {
  const deleteButtons = document.querySelectorAll('.deleteComment');
  deleteButtons.forEach((button) => {
    button.addEventListener('click', deleteCommentPost);
  });
}

/**
 * Función para crear el evento de editar comentario
 */
export function createClickEditComment() {
  const editButtons = document.querySelectorAll('.editComment');
  console.log(editButtons);
  const divEditComments = document.querySelectorAll('.divEditComment');
  const editIcons = document.querySelectorAll('.edit');
  editButtons.forEach((button, i) => {
    button.addEventListener('click', () => {
      divEditComments[i].classList.toggle('hide');
      editIcons[i].addEventListener('click', editCommentPost);
    });
  });
}

/**
 * Función para mostrar/ocultar el comentarios
 */
export function showComments() {
  const buttonsComment = document.querySelectorAll('.buttonAddComment');
  const divComments = document.querySelectorAll('.divComment');
  buttonsComment.forEach((buttonComment, i) => {
    buttonComment.addEventListener('click', () => {
      divComments[i].classList.toggle('hide');
    });
  });
}

/**
 * Función para agregar el comentario en el post
 * @param textInput
 * @return {Promise<void>}
 */
export async function addCommentPost(textInput) {
  const comment = {
    user: localStorage.getItem('email'),
    comment: textInput.value,
  };
  const idPost = textInput.getAttribute('data-id');
  await addComment(idPost, comment);
  // eslint-disable-next-line no-param-reassign
  textInput.value = '';
  await getAllPosts();
}

/**
 * Función que llama otras funciones que se encargan de agregar eventos a los botones
 */
export function handlePost() {
  const commentPosts = document.querySelectorAll('.buttonPostComment');
  const textComment = document.querySelectorAll('.textComment');
  commentPosts.forEach((commentPost, i) => {
    commentPost.addEventListener('click', async () => {
      await addCommentPost(textComment[i]);
    });
  });
  showComments();
  createClickEditPost();
  createClickDeletePost();
  createClickLikePost();
  createClickEditComment();
  createClickDeleteComment();
}
