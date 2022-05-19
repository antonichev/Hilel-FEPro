
const card = function(user) {

  const userCard = document.createElement('div');
  userCard.className = 'user-card';

  const cardHeader = document.createElement('div');
  cardHeader.className = 'card-header';
  cardHeader.innerText = user.name;
  cardHeader.dataset.id = user.id;
  cardHeader.onclick = expand;

  const arrow = document.createElement('img');
  arrow.src = "./img/arrow.png";
  arrow.alt = "arrow";
  arrow.className = "arrow-img";

  cardHeader.appendChild(arrow);

  const cardBody = document.createElement('div');
  cardBody.className = 'card-body';
  cardBody.classList.add('hidden');

  cardBody.innerHTML = `
    <div class="avatar">
      <img src="./img/person.png" alt="${user.name}" class="avatar-img" />
    </div>
    <div class="content">
      <div class="row">
        <p>
          <span>INN:</span>
          ${user.inn}
        </p>
        <p>
          <span>E-mail:</span>
          ${user.email}
        </p>
      </div>
      <div class="row">
        <p>
          <span>City:</span>
          ${user.city}
        </p>
        <p>
          <span>Name:</span>
          ${user.name}
        </p>
      </div>
      <div class="row">
        <p>
          <span>Age:</span>
          ${user.age}
        </p>
        <p>
          <span>Gender:</span>
          ${user.gender}
        </p>
      </div>
    </div>
  `;

  userCard.appendChild(cardHeader);
  userCard.appendChild(cardBody);

  return userCard;
};

function expand() {
  //Need to find better way to get an App div
  const app = this.parentNode.parentNode;

  if(app.prevOpen && app.prevOpen !== this.nextSibling) {
    app.prevOpen.classList.add('hidden');
    app.prevOpen.previousSibling.querySelector('img').classList.remove('rotate');
  }

  app.prevOpen = this.nextSibling;

  const cardBody = this.nextSibling;
  cardBody.classList.toggle('hidden');

  const headerImg = this.querySelector('.arrow-img');
  headerImg.classList.toggle('rotate');

}

export default card;