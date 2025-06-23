export function createUserCard(user) {
  const card = document.createElement("div");
  card.className = "user-card";

  const companyName = user.company?.name ?? "Unknown Company";
  const yearsEmployed = user.employment?.years ?? "N/A";

  card.innerHTML = `
    <h3>${user.name}</h3>
    <p><strong>Email:</strong> ${user.email}</p>
    <p><strong>Phone:</strong> ${user.phone}</p>
    <p><strong>Company:</strong> ${companyName}</p>
    <p><strong>Years Employed:</strong> ${yearsEmployed}</p>
  `;

  return card;
}
export function clearCards() {
  const existing = document.querySelectorAll(".user-card");
  existing.forEach((card) => card.remove());
}
