import axios from "axios";

const fetchData = async (url: string) => {
  let data: any = null;
  await axios
    .get(url, {
      headers: {
        "x-rapidapi-key": "a2e362eba7mshf79992f1cbe7a73p1c653ejsn87bd2054f646",
        "x-rapidapi-host": "cricbuzz-cricket.p.rapidapi.com",
      },
    })
    .then((response) => (data = response.data));

  return data;
};

export { fetchData };
