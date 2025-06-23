export async function fetchUsers() {
  try {
    const response = await fetch(
      "https://dan-collins-dev.github.io/dummy-data-fetching-repo/data/users.json"
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const users = await response.json();
    console.log("✅ Users fetched:", users);
    return users;
  } catch (error) {
    console.error("❌ Error fetching users:", error);
    throw error;
  }
}
