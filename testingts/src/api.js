const BASE_URL = "http://localhost:3000";

const Requests = {
  getAllNotes: () =>
    fetch(`${BASE_URL}/notes`).then((response) => response.json()),

  createNote: (note) => {
    return fetch(`${BASE_URL}/notes`, {
      body: JSON.stringify(note),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  },
};

// Exporting the Requests object if you're using a module system like ES6 modules
export { Requests };
