import './style.css';

import {
  fillUsersSelect,
  fillPosts,
  fillFeaturedPostComments,
  clearPageData,
  fillErrorMessage,
} from './utils/updateUI';

const usersSelect = document.querySelector('#users-select');

const USERS_API = 'https://dummyjson.com/users';
// faça a lógica para pegar as informações das pessoas usuárias e preencher o select aqui.
    fetch(USERS_API)
    .then((response) => response.json())
    .then((data) => { 
        const { users } = data;

        // Chama a função auxiliar para preencher os nomes e ids no select users-select
        fillUsersSelect(users);
    });

usersSelect.addEventListener('change', () => {
  clearPageData();
  // faça a lógica para pegar as informações dos posts da pessoa selecionada e dos comentários do post destacado aqui.
  const POSTS_API = `https://dummyjson.com/posts/user/${usersSelect.value}`;

  fetch(POSTS_API)
    .then((response) => response.json())
    .then((data) => { 
        const { posts } = data;
    });
});