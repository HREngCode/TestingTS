import { Note } from "../types";

export const NotesList = ({
  allNotes,
  setActiveNote,
}: {
  allNotes: Note[];
  setActiveNote: (note: Note | null) => void;
}) => {
  return (
    <section className="notes-list">
      {allNotes.map((note) => (
        <li
          key={note.id}
          onClick={() => {
            setActiveNote(note);
          }}
        >
          {note.title}
        </li>
      ))}
    </section>
  );
};
