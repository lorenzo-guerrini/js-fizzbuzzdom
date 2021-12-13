for (let i = 1; i <= 100; i++) {
    let number;
    const container = document.querySelector(".container");
    const element = document.createElement("div");
    element.classList.add("element");

    if ((i % 3 == 0) && (i % 5 == 0)) {
        number = "FizzBuzz";
        element.classList.add("multiple35")
    } else if (i % 3 == 0) {
        number = "Fizz";
        element.classList.add("multiple3")
    } else if (i % 5 == 0) {
        number = "Buzz";
        element.classList.add("multiple5")
    } else {
        number = i;
    }

    console.log(number);
    element.append(i);
    container.append(element);
}