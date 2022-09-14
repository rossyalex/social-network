import {
  addDoc, collection, db, deleteDoc, doc, getDoc, getDocs, updateDoc,
} from './firebaseImports.js';
// Objeto post de ejemplo
// const post = {
//     content: 'Recomiendo correr en plaza Ñuñoa',
//     userId: '23redasd23e',
//     name: 'chopita',
//     likes: 0,
//     comments: [{comentario1}, {comentario2},... ],
//   };

// POST - Agregar - Editar - Eliminar - Ver todos los posts - Comentar los posts - Likes

// Functions - addPost - updatePost - deletePost - allPosts - addCommentPost
// updateCommentPost - deleteCommentPost - likePost

/**
 * Función para agregar post
 * @param {*} post
 */
export const addPosts = async (post) => {
  try {
    const docRef = await addDoc(collection(db, 'posts'), post);
    console.log('Document written with ID: ', docRef.id);
  } catch (error) {
    console.error('Error adding document: ', error.message);
  }
};

// función para traer todos los post
// eslint-disable-next-line consistent-return
export const allPosts = async () => {
  try {
    const posts = [];
    const querySnapshot = await getDocs(collection(db, 'posts'));
    // eslint-disable-next-line no-shadow
    querySnapshot.forEach((doc) => {
      const post = doc.data();
      post.id = doc.id;
      posts.push(post);
    });
    return posts;
  } catch (e) {
    console.log('Error get all documents', e.message);
  }
};
