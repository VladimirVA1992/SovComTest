const DOM = document;

const BODY = DOM.querySelector("body");
const colorTheme = DOM.querySelector(".color-theme");
const colorThemeOption = DOM.querySelectorAll(".color-theme__option");

colorTheme.addEventListener("click", (event) => {
	colorThemeOption.forEach((item) => {
		item.classList.toggle("active");
	});

	if (event.target.hasAttribute("data-light")) {
		BODY.classList.toggle("dark");
		BODY.classList.toggle("light");
		return;
	}

	if (event.target.hasAttribute("data-dark")) {
		BODY.classList.toggle("light");
		BODY.classList.toggle("dark");
		return;
	}
});
