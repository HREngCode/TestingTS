// import { useState } from "react";
// // Remove the TypeScript type import
// // import { Note } from "../types";

// export const CreateNoteForm = ({ createNote, isLoading }) => {
//   const [titleInput, setTitleInput] = useState("");
//   const [contentInput, setContentInput] = useState("");

//   return (
//     <form
//       onSubmit={(e) => {
//         e.preventDefault();
//         // Code to trigger the add
//         createNote({
//           content: contentInput,
//           title: titleInput,
//         });
//         setTitleInput("");
//         setContentInput("");
//       }}
//     >
//       <h2>Create Note Form</h2>
//       <div>
//         <label htmlFor="title">Title</label>
//         <input
//           type="text"
//           name="title"
//           placeholder="title"
//           value={titleInput}
//           onChange={(e) => {
//             setTitleInput(e.target.value);
//           }}
//         />
//       </div>
//       <div>
//         <label htmlFor="content">Content</label>
//         <textarea
//           style={{
//             minHeight: 100,
//           }}
//           name="content"
//           placeholder="content"
//           value={contentInput}
//           onChange={(e) => {
//             setContentInput(e.target.value);
//           }}
//         />
//       </div>
//       <button type="submit" disabled={isLoading}>
//         Submit
//       </button>
//     </form>
//   );
// };
