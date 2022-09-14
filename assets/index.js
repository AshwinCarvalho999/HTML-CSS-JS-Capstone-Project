const StaffSection = document.querySelector('#staff .flex-container');

const staff = [
  {
    name: 'Teresa',
    title: 'Mexico',
    description:
      'Teresa is a passionate enthusiast with over 30 years of experience as a SkyDiver. She Likes to Skydive and also to Paraglide form different destinations around the world',
    image: 'assets/images/guides/teresa.jpg',
    class: 'staff1',
  },
  {
    name: 'Jorgen',
    title: 'Ecuador',
    description:
      'Jorgen has been living and Likes to Wingsuit Flying in Ecuador for the past 10 years. He was born in Sweden in the town of Kiruna, but decided to swap for the Equator almost 20 years ago.',
    image: 'assets/images/guides/jorgen.jpg',
    class: 'staff2',
  },
  {
    name: 'Rolando',
    title: 'Panama',
    description:
      'Rolando likes the Hang Gliding adventure. Rolando also likes to teach How to to fly and control the Hang Glider to the beginners',
    image: 'assets/images/guides/rolando.jpg',
    class: 'staff3',
  },
  {
    name: 'Meghan',
    title: 'Portugal',
    description:
      'Meghan has 15 years experience as SkyDiving. Her passion for Air Sports was passed on to her by her parents.',
    image: 'assets/images/guides/Meghan.jpg',
    class: 'staff4',
  },
  {
    name: 'Miguel',
    title: 'Andean, Cusco',
    description:
      'Miguel was born in the beautiful Andean city of Cusco where he learned Para Motoring and now he is expert in Para Motoring.',
    image: 'assets/images/guides/Miguel.jpg',
    class: 'staff5',
  },
  {
    name: 'Sid',
    title: 'Morocco',
    description:
      'Sid is form Morocco. He had established a superb knowledge of SkyDiving. He was also able to dive from top of big mountains in Morocco. ',
    image: 'assets/images/guides/sid.jpg',
    class: 'staff6',
  },
];

function createStaffMember(profile) {
  StaffSection.innerHTML += `
  <article class="${profile.class} staff">
  <div class="staff__img">
      <img src="${profile.image}" alt="">
  </div>
  <div class="staff__description">
      <h3>${profile.name}</h3>
      <h4>${profile.title}</h4>
      <hr>
      <p>${profile.description}</p>
  </div>
</article>`;
}

function createStaffSection() {
  for (let i = 0; i < staff.length; i += 1) {
    createStaffMember(staff[i]);
    if (i > 1) {
      document.querySelector(`.staff${i + 1}`).classList.add('toggle');
    }
  }
  StaffSection.innerHTML
    += '<div id="more">More <a href="#Staff"><i class="fas fa-chevron-down"></i></a></div>';
}

createStaffSection();

const more = document.querySelector('#more a');
const speaker = document.querySelectorAll('.staff');

more.addEventListener('click', () => {
  for (let i = 2; i < speaker.length; i += 1) {
    speaker[i].classList.toggle('toggle');
  }
  if (speaker[2].classList.contains('toggle')) {
    more.innerHTML = "<i class='fas fa-chevron-down'></i>";
  } else {
    more.innerHTML = "<i class='fas fa-chevron-up'></i>";
  }
});

const openMenu = document.querySelector('.navbar-main__toggler');
const closeMenu = document.querySelector('.navbar-button__close');
const menu = document.querySelector('.navbar-main__nav');
const menuLinks = document.querySelectorAll('.navbar-main__list li');

closeMenu.addEventListener('click', () => {
  menu.classList.toggle('collapse');
});

openMenu.addEventListener('click', () => {
  menu.classList.toggle('collapse');
});

menuLinks.forEach((li) => {
  li.addEventListener('click', () => {
    menu.classList.toggle('collapse');
  });
});
