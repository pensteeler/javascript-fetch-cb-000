const app = "I don't do much.";
const token = 'c45c47621a1cca3ed40d524dff0ca165ab775081'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
