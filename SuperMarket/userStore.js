// userStore.js
let currentUser = null;


export const setCurrentUser = (data) => {
  currentUser = data;
};

export const getCurrentUser = () => {
  return currentUser;
};