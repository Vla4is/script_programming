let counter = 0;
const change_theme = () => {
    color="green";
    if (counter == 1) {
        document.body.classList.add("light_theme");
        document.body.classList.remove("dark_theme");
        counter--;
    }else {
        counter ++;
        document.body.classList.add("dark_theme");
        document.body.classList.remove("light_theme");
    }
  }