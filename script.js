const make_button = (button_name) => {

    document.getElementById("buttons").innerHTML += `<button onclick="window.location.href='${button_name}';">${button_name}</button>`;
};

let button_names = ['lw7', 'lw8', 'lw9','lw10'];
button_names.forEach(button => {
    make_button(button);
});
