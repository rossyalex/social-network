import {
  addDoc,
  collection,
  db,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
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
    await addDoc(collection(db, 'posts'), post);
  } catch (error) {
    console.error('Error adding document: ', error.message);
  }
};

/**
 * Función para eliminar un post
 * @param {*} idPost
 */
export const deletePost = async (idPost) => {
  try {
    await deleteDoc(doc(db, 'posts', idPost));
    console.log('Se eliminó el documento');
  } catch (e) {
    console.error('Error delete document', e.message);
  }
};

/**
 * Función para actualizar un post
 * @param {*} idPost
 * @param {*} message
 */
export const updatePost = async (idPost, message) => {
  try {
    const docRef = doc(db, 'posts', idPost);
    await updateDoc(docRef, {
      content: message,
    });
  } catch (e) {
    console.log('Error update document', e.message);
  }
};

/**
 * Función para traer todos los posts
 */
// eslint-disable-next-line consistent-return
export const allPosts = async () => {
  try {
    const posts = [];
    const querySnapshot = await getDocs(collection(db, 'posts'));
    querySnapshot.forEach((postDoc) => {
      const post = postDoc.data();
      post.id = postDoc.id;
      posts.push(post);
    });
    return posts;
  } catch (e) {
    console.log('Error get all documents', e.message);
  }
};

/**
 * Función para obtener un post por su Id
 * @param idPost
 * @return {Promise<undefined|*>}
 */
export const getPost = async (idPost) => {
  const docRef = doc(db, 'posts', idPost);
  const post = await getDoc(docRef);

  if (post.exists()) {
    return post.data();
  }
  return undefined;
};

/**
 * Función para agregar comentario por el Id del post
 * @param idPost
 * @param comment
 * @return {Promise<void>}
 */
export const addComment = async (idPost, comment) => {
  try {
    const { comments } = await getPost(idPost);
    comments.push(comment);
    const docRef = doc(db, 'posts', idPost);
    await updateDoc(docRef, {
      comments,
    });
  } catch (e) {
    console.log('Error add comment to post', e.message);
  }
};

/**
 * Función para editar el comentario por el id del post
 * @param idPost
 * @param msg
 * @param commentIndex
 * @return {Promise<void>}
 */
export const editComment = async (idPost, msg, commentIndex) => {
  try {
    const { comments } = await getPost(idPost);
    comments[commentIndex].comment = msg;
    const docRef = doc(db, 'posts', idPost);
    await updateDoc(docRef, {
      comments,
    });
  } catch (e) {
    console.log(e);
  }
};

/**
 * Función para eliminar el comentario por el id del post
 * @param idPost
 * @param commentIndex
 * @return {Promise<void>}
 */
export const deleteComment = async (idPost, commentIndex) => {
  try {
    const { comments } = await getPost(idPost);
    comments.splice(commentIndex, 1);
    const docRef = doc(db, 'posts', idPost);
    await updateDoc(docRef, {
      comments,
    });
  } catch (e) {
    console.log(e);
  }
};

/**
 * Función para agregar/quitar el like del post
 * @param idPost
 * @param userId
 * @return {Promise<void>}
 */
export const likePost = async (idPost, userId) => {
  try {
    const { likes } = await getPost(idPost);
    const { users } = likes;
    if (users.find((user) => user === userId)) {
      // eslint-disable-next-line no-plusplus
      likes.qty--;
      likes.users = users.filter((user) => user !== userId);
    } else {
      // eslint-disable-next-line no-plusplus
      likes.qty++;
      users.push(userId);
    }
    const docRef = doc(db, 'posts', idPost);
    await updateDoc(docRef, {
      likes,
    });
  } catch (e) {
    console.log(e);
  }
};
