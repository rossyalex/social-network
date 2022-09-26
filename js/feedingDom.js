import { addPosts, allPosts } from '../firebase/post.js';
// función para crear post
export async function createPostFeeding() {
  const feedingContent = document.getElementById('feedingContent');
  const message = feedingContent.value;
  const postData = {
    content: message,
    userId: localStorage.getItem('uid'),
    name: localStorage.getItem('email'),
    likes: 0,
    comments: [],
  };
  console.log('Data del post', postData);
  await addPosts(postData);
  feedingContent.value = '';
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
export function createClickPostFeeding() {
  const buttonPost = document.getElementById('createPost');
  buttonPost.addEventListener('click', createPostFeeding);
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
//                   </button>`;
//     if (post.userId === userId) {
//       cardPost += `<button class="buttonPost tooltip buttonDelete">
//                         <i class="fa-solid fa-trash-can"></i>
//                         <span class="tooltiptext">Eliminar</span>
//                       </button>`;
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
