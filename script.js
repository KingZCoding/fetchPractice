fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => displayUsers(json));

function displayUsers(users) {
  let container = document.getElementById('user-post');
  users.forEach(user => {
    container.innerHTML += `

        <div class="post-content">
          <div class="user">
            <h1>${user.name}</h1>
          </div>
          <div class="email">
            <h2>${user.email}</h2>
          </div>
          <div class="address">
            <h3>${user.address.street}
                ${user.address.suite}
                ${user.address.city}
                ${user.address.zipcode}</h3>
          </div>
        </div>`;

    console.log(user);
  });
}
