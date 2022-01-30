const button = document.querySelector("button");
const word = document.querySelector("h1 span");

// reset the transition by...
button.addEventListener(
	"click",
	function (e) {
		e.preventDefault;

		// -> removing the class
		word.classList.remove("animation");

		// -> triggering reflow /* The actual magic */
		void word.offsetWidth;

		// -> and re-adding the class
		word.classList.add("animation");
	},
	false
); 