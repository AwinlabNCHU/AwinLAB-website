// Pagination functionality
export function createPaginationControls(totalItems, currentPage, onPageChange, ITEMS_PER_PAGE) {
  const paginationContainer = document.getElementById("pagination-professor");
  if (!paginationContainer) {
    console.warn("Pagination element not found");
    return;
  }

  paginationContainer.innerHTML = "";

  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  if (totalPages <= 1) return; // no need for pagination

  const createButton = (text, page) => {
    const btn = document.createElement("button");
    btn.textContent = text;
    btn.classList.add("btn", "btn-sm", "mx-1", "btn-outline-primary");
    if (page === currentPage) btn.classList.add("active");
    btn.addEventListener("click", () => {
      onPageChange(page);
    });
    return btn;
  };

  if (currentPage > 1) {
    paginationContainer.appendChild(createButton("Prev", currentPage - 1));
  }

  for (let i = 1; i <= totalPages; i++) {
    paginationContainer.appendChild(createButton(i, i));
  }

  if (currentPage < totalPages) {
    paginationContainer.appendChild(createButton("Next", currentPage + 1));
  }
}
