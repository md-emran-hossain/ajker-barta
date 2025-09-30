export const getInitials = (name = "") =>
	name
		.replace(/\s+/, " ")
		.split(" ")
		.slice(0, 2)
		.map(v => v[0]?.toUpperCase())
		.join("");
