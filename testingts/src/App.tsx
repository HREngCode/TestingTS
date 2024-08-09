import { useEffect, useState } from "react";
import "./App.css";
import { Note } from "./types";
import { NotesList } from "./Components/NotesList";
import { ActiveNote } from "./Components/ActiveNote";
import { CreateNoteForm } from "./Components/CreateNoteForm";
import { Requests } from "./api";
import toast from "react-hot-toast";
import { SectionLayout } from "./Components/Layouts/SectionLayout";

function App() {
  const [activeNote, setActiveNote] = useState<Note | null>(null);
  const [allNotes, setAllNotes] = useState<Note[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    // Two arguments to it, A effect, B dependency array
    // dependency array empty? runs once
    // This function gets called whenever anything inside of b changes
    // Requests.getAllNotes().then(setAllNotes);
    refetchData();
  }, []);

  const refetchData = () => {
    setIsLoading(true);
    Requests.getAllNotes()
      .then((notes) => {
        setAllNotes(notes);
      })
      .finally(() => setIsLoading(false));
  };

  const createNote = (note: Omit<Note, "id">) => {
    setIsLoading(true);
    Requests.createNote(note)
      .then(refetchData)
      .then(() => {
        toast.success("Awesome Note Dude 🚀");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const deleteNote = (id: number) => {
    setIsLoading(true);
    Requests.deleteNote(id)
      .then(refetchData)
      .then(() => {
        toast.success("You deleted successfully");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <h1>Notes App</h1>
      <h1>{isLoading ? "loading...." : ""}</h1>
      <NotesList
        setActiveNote={setActiveNote}
        allNotes={allNotes}
        onDeleteNote={deleteNote}
      />
      <ActiveNote note={activeNote} />
      <CreateNoteForm createNote={createNote} isLoading={isLoading} />
    </>
  );
}

export default App;
