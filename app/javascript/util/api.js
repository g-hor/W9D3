const { custom } = require("babel-loader");

const csrfToken = document.querySelector("meta[name=csrf-token]").content;

async function customFetch(url, options = {}) {
  options.headers = {
    // Your code here

    ...options.headers // = key1: val1, key2: val2, key3: val3
  };

  return await fetch(url, options);
}

function followUser(id) {

  return customFetch(`/users/${id}/follow`, {
    method: "POST"
  });
}

function unfollowUser(id) {

  return customFetch(`/users/${id}/follow`, {
    method: "DELETE"
  });
}