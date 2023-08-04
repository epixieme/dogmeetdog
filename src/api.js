export async function getDogs(id) {
  const url = id ? `/api/dogs/${id}` : "/api/dogs";
  const res = await fetch(url);
  if (!res.ok) {
    throw {
      message: "Failed to fetch available dogs",
      statusText: res.statusText,
      status: res.status,
    };
  }

  const data = await res.json();
  return data.dogs;
}
