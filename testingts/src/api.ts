import { Note } from "./types";

const BASE_URL = "http://localhost:3000"

export const Requests = {
  //cleaning up code
  getAllNotes:(): Promise<Note[]> => 
    fetch(`${BASE_URL}/notes`).then((response) => response.json()),

  createNote: (note: Omit<Note, "id">) => {
    return fetch(`${BASE_URL}/notes`, {
      body: JSON.stringify(note),
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
    }).then((responses) => responses.json())
  }
};