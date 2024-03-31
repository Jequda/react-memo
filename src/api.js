const baseHost = "https://wedev-api.sky.pro/api/leaderboard";

export async function getLeaders() {
  const response = await fetch(baseHost, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }

  const data = await response.json();
  return data;
}

export async function postLeader({ name, time }) {
  const response = await fetch(baseHost, {
    method: "POST",
    body: JSON.stringify({
      name,
      time,
    }),
  });

  if (!response.ok) {
    throw new Error("Ошибка отправки данных");
  }

  const data = await response.json();
  return data;
}
