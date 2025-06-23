export function createUserCard(user) {
  const card = document.createElement("div");
  card.className = "user-card";

  const fullName = `${user.firstName} ${user.lastName}`;
  const companyName = user.companyName ?? "Unknown Company";
  const yearsEmployed = user.yearsEmployed ?? "N/A";

  card.innerHTML = `
    <h3>${fullName}</h3>
    <p><strong>Email:</strong> ${user.email}</p>
    <p><strong>Company:</strong> ${companyName}</p>
    <p><strong>Years Employed:</strong> ${yearsEmployed}</p>
  `;

  return card;
}
export function clearCards() {
  const grid = document.querySelector('.cards-grid');
  if (grid) {
    grid.innerHTML = '';
  }
}
