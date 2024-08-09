import { Note } from "../types";

export const NotesList = ({
  allNotes,
  setActiveNote,
  onDeleteNote,
}: {
  allNotes: Note[];
  setActiveNote: (note: Note | null) => void;
  onDeleteNote: (id: number) => void;
}) => {
  return (
    <section className="notes-list">
      <ol>
        {allNotes.map((note) => (
          <li
            key={note.id}
            onClick={() => {
              setActiveNote(note);
            }}
          >
            <div>
              <div>{note.title}</div>
              <div>{note.content}</div>
            </div>

            <button onClick={() => setActiveNote(note)}>Edit</button>
            <button onClick={() => onDeleteNote(note.id)}>Delete</button>
          </li>
        ))}
      </ol>
    </section>
  );
};
