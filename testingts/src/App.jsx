// import React, { useState, useEffect } from "react";
// import "./App.css";
// import { NotesList } from "./Components/NotesList";
// import { ActiveNote } from "./Components/ActiveNote";
// import { CreateNoteForm } from "./Components/CreateNoteForm";
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

//   const refetchData = () => {
//     setIsLoading(true);
//     Requests.getAllNotes()
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
