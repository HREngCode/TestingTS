// import React, { useEffect, useState } from "react";
// import "./App.css";
// import { Note } from "./types";
// import { Requests } from "./api";
// import toast from "react-hot-toast";
// import { SectionLayout } from "./Components/Layouts/SectionLayout";

// const App = () => {
//   const [activeNote, setActiveNote] = useState(null);
//   const [allNotes, setAllNotes] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     refetchData();
//   }, []);

// This can work but if the fetch fails, it doesn't go anywhere
// refetchData = () => {
//   this.setState({ isLoading: true });
//   return Requests.getAllNotes().then((notes) => {
//     this.setState({ allNotes: notes });
//   }).then(() => this.setState({ isLoading: false }));
// };

//   const refetchData = () => {
//     setIsLoading(true);
//     return Requests.getAllNotes()
//       .then((notes) => {
//         setAllNotes(notes);
//       })
//       .finally(() => {
//         setIsLoading(false);
//       });
//   };

//   const createNote = (note) => {
//     setIsLoading(true);
//     Requests.createNote(note)
//       .then(refetchData)
//       .then(() => {
//         toast.success("Awesome Note Dude 🚀");
//       })
//       .finally(() => {
//         setIsLoading(false);
//       });
//   };

//   return (
//     <>
//       <SectionLayout backgroundColor="blueviolet">
//         <h1>Hello</h1>
//       </SectionLayout>
//       <SectionLayout backgroundColor="blueviolet" children="HELLO" />
//       <SectionLayout backgroundColor="palegreen">
//         <h1>Hello</h1>
//       </SectionLayout>
//       <SectionLayout backgroundColor="tomato">
//         <h1>Hello</h1>
//       </SectionLayout>
//     </>
//   );
// };

// export default App;

// import { useEffect, useState } from "react";
// import "./App.css";
// import { Note } from "./types";

// const getAllNotes = () =>
//   fetch("http://localhost:3000/notes").then((response) => response.json());

// function App() {
//   const [activeNote, setActiveNote] = useState<Note | null>(null);
//   const [allNotes, setAllNotes] = useState<Note[]>([]);

//   useEffect(() => {
//     getAllNotes().then(setAllNotes);
//   }, []);

//   return (
//     <>
//       <h1>Notes App</h1>
//       <h3>All Notes</h3>
//       <ol>
//         <section className="notes-list">
//           {allNotes.map((note) => (
//             <li
//               key={note.id}
//               onClick={() => {
//                 setActiveNote(note);
//               }}
//             >
//               {note.title}
//             </li>
//           ))}
//         </section>
//       </ol>
//       <section className="my-note">
//         <h3>My Note</h3>
//         <div>
//           <b>Title:</b> {activeNote?.title}
//         </div>
//         <div>
//           <b>Content</b> {activeNote?.content}
//         </div>
//       </section>
//     </>
//   );
// }

// export default App;
