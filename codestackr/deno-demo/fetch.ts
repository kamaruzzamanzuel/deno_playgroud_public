const response = await fetch("https://api.github.com/users/denoland");
const data = await response.json();
console.log(data);
