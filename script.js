document.addEventListener("DOMContentLoaded", () => {
    const display = document.querySelector(".display input");
    const buttons = document.querySelectorAll("form input[type='button']");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.value;

            if (value === "AC") {
                display.value = "";
            } else if (value === "DE") {
                display.value = display.value.slice(0, -1);
            } else if (value === "=") {
                try {
                    display.value = eval(display.value) || "0";
                } catch {
                    display.value = "Error";
                    setTimeout(() => (display.value = ""), 1500);
                }
            } else {
                display.value += value;
            }
        });
    });
});
