
// Initialize Firebase
var config = {
    apiKey: "AIzaSyC1BBc7SFw1QQCJTtYn5usZJjMtvDTUSpc",
    authDomain: "portfolio-pawelwiecko.firebaseapp.com",
    databaseURL: "https://portfolio-pawelwiecko.firebaseio.com",
    projectId: "portfolio-pawelwiecko",
    storageBucket: "portfolio-pawelwiecko.appspot.com",
    messagingSenderId: "71476576218",
    appId: "1:71476576218:web:d504be87f708b633f48ae3"
};

firebase.initializeApp(config);

//Reference messages collection
var messagesRef = firebase.database().ref('messages');

//listen to form
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

    // get Values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var message = getInputVal('message');

    //save message

    saveMessage(name, email, message);

    //show alert
    document.querySelector('.alert').style.display='block';

    //Hide alert after 3 s
    setTimeout(function(){
        document.querySelector('.alert').style.display='none';
    }, 3000)
    //clear form
    document.getElementById('contactForm').reset();
}
//function to get form values

function getInputVal(id){
    return document.getElementById(id).value;
}

//save message to firebase
function saveMessage(name, email, message){
    let newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        message: message
    })
}



setInterval(function () {
    if (scrolling) {
        scrolled();
        scrolling = false;
    }
}, 100);

// Menu-nav


const menu = document.getElementById('menu');
const nav = document.getElementById('nav');
const exit = document.getElementById('exit');

menu.addEventListener('click', function(e) {
    nav.classList.toggle('hide-mobile');
    header.classList.remove('header-up');
    e.preventDefault();
});

exit.addEventListener('click', function(e) {
    nav.classList.add('hide-mobile');
    header.classList.remove('header-up');
    e.preventDefault();

});


