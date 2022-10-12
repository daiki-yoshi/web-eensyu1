const myImage = document.querySelector('img');

myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/google.png') {
    myImage.setAttribute('src','images/google2.png');
  } else {
    myImage.setAttribute('src','images/google.png');
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    const myName = prompt('あなたの名前を入力してください。');
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = `Googleの歴史、${myName}`;
    }
  }
  
  
  if (!localStorage.getItem('name')) {
    setUserName();
  } else {
    const storedName = localStorage.getItem('name');
    myHeading.textContent = `Googleの歴史、${storedName}`;
  }
  
  myButton.onclick = () => {
    setUserName();
  }
  