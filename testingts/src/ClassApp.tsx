// import { Component } from "react";
// import "./App.css";
// import { Note } from "./types";
// import { NotesList } from "./Components/NotesList";

// const getAllNotes = () =>
//   fetch("http://localhost:3000/notes").then((response) => response.json());

// type State = {
//   activeNote: Note | null;
//   allNotes: Note[];
// };

// class App extends Component<Record<string, never>, State> {
//   state: State = {
//     activeNote: null,
//     allNotes: [],
//   };

//   componentDidMount(): void {
//     getAllNotes().then((notes) => {
//       this.setState({ allNotes: notes });
//     });
//   }

//   render() {
//     const { allNotes, activeNote } = this.state;
//     return (
//       <>
//         <h1>Notes App</h1>
//         <NotesList
//           setActiveNote={(note) => this.setState({ activeNote: note })}
//           allNotes={allNotes}
//         />
//         <section className="my-note">
//           <h3>My Note</h3>
//           <div>
//             <b>Title:</b> {activeNote?.title}
//           </div>
//           <div>
//             <b>Content</b> {activeNote?.content}
//           </div>
//         </section>
//       </>
//     );
//   }
// }

// export default App;
