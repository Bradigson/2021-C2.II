const para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName() {
  let name = prompt('Enter a new name');
  para.textContent = 'Players: ' + name;

  let name1 = prompt('Enter a new name');
  para.textContent = 'Players : ' + name +", "+ name1;

  let name2 = prompt('Enter a new name');
  para.textContent = 'Players : ' + name +","+ name1 +","+ name2;

  let name3 = prompt('Enter a new name');
  para.textContent = 'Players : ' + name +","+ name1 +","+ name2 +","+ name3 ;
  
}