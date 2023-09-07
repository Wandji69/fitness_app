export const setCurrentPage = (1);

export const paginate = (e, value) => {
	setCurrentPage(value);

	window.scrollTo({ top: 1800, behavior: "smooth" });
};
