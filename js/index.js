let count = 0
const boxes = document.querySelectorAll('input[type="checkbox"]');

const $nameInput = document.getElementById("name");
const button = document.getElementById("button1");

function callAlert(){
    [...boxes].forEach(box => {
        if(box.checked === true) count += 1
    })

    const $form = document.querySelector('#guestbook-form')

    alert($nameInput.value + "님, 저와 " + count + "개의 취향이 같으시네요!");

    $form.reset()
}

button.addEventListener("click", callAlert);