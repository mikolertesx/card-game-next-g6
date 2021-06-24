// Hey, Roger!
// If you're reading this, be full aware that this is my idea of an implementation
// I felt like doing this might ease the time it took me to implement everything and avoid errors.
export default function (arrayClasses, className) {
	if (!className) return arrayClasses.join(' ');

	return arrayClasses.map(cssClass => className[cssClass]).join(' ');
}