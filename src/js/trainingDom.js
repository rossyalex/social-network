import { addPosts, allPosts } from '../firebase/post.js';
// función para crear post en training
export async function createPostTraining() {
  const trainingContent = document.getElementById('trainingContent');
  const message = trainingContent.value;
  const postData = {
    content: message,
    userId: localStorage.getItem('uid'),
    name: localStorage.getItem('email'),
    likes: 0,
    comments: [],
  };
  console.log('Data del post', postData);
  await addPosts(postData);
  trainingContent.value = '';
  // eslint-disable-next-line no-use-before-define
  await getAllPosts();
}

// export function handlePost() {
//   const commentPosts = document.querySelectorAll('.buttonPostComment');
//   // eslint-disable-next-line no-unused-vars
//   const textComment = document.querySelectorAll('.textComment');
//   console.log(commentPosts);
//   commentPosts.forEach((commentPost, i) => {
//     commentPost.addEventListener('click', () => {
//       // addCommentPost(textComment[i]);
//     });
//   });
// }

// función que da evento a la creación de post
export function createClickPostTraining() {
  const buttonPost = document.getElementById('createPost');
  buttonPost.addEventListener('click', createPostTraining);
}

// función que muestra post en home, inyectando HTML
// export function renderPost(posts) {
//   const renderId = document.getElementById('renderPosts');
//   const userId = localStorage.getItem('uid');
//   renderId.innerHTML = '';
//   let cardPost = '';
//   posts.forEach((post) => {
//     cardPost += `<div class="cardPost">
//                   <h4>Runner ${post.name}</h4>
//                   <p>${post.content}</p>
//                   <button class="buttonPost tooltip">
//                       <i class="fa-solid fa-hand-holding-heart"></i>
//                       ${post.likes}
//                       <span class="tooltiptext">Darle Me gusta</span>
//                   </button>
//                   <button id="comment" class="buttonPost tooltip">
//                       <i class="fa-solid fa-comment"></i>
//                       <span class="tooltiptext">Comentar</span>
//                   </button>`;
//     if (post.userId === userId) {
//       cardPost += `<button class="buttonPost tooltip buttonDelete">
//                         <i class="fa-solid fa-trash-can"></i>
//                         <span class="tooltiptext">Eliminar</span>
//                       </button>`;
//     }
//     cardPost += `<div class="divComment">
//                       <textarea class="textComment" data-id="${post.id}" cols="35" rows="4"></textarea>
//                       <button class="buttonPostComment">Crear comentario</button>
//                   </div>`;
//     if (post.comments.length > 0) {
//       cardPost += '<div class="commentsPost"><h4>Leer comentarios</h4>';
//       post.comments.forEach((comment) => {
//         cardPost += `<h5 class="comment">De: ${comment.user}</h5><p class="comment">${comment.comment}</p>`;
//       });
//       cardPost += '</div>';
//     }
//     cardPost += '</div>';
//   });
//   renderId.innerHTML = cardPost;
//   handlePost();
// }

// export async function getAllPosts() {
//   const posts = await allPosts();
//   console.log(posts);
//   renderPost(posts);
// }
