import { Component } from "react";
import "./App.css";
import { Note } from "./types";
import { NotesList } from "./Components/NotesList";
import { ActiveNote } from "./Components/ActiveNote";
import { CreateNoteForm } from "./Components/CreateNoteForm";
import { Requests } from "./api";
import toast from "react-hot-toast";
import { SectionLayout } from "./Components/Layouts/SectionLayout";

type State = {
  activeNote: Note | null;
  allNotes: Note[];
  isLoading: boolean;
};

class App extends Component<Record<string, never>, State> {
  state: State = {
    activeNote: null,
    allNotes: [],
    isLoading: false,
  };

  componentDidMount(): void {
    this.refetchData();
  }

  // This can work but if the fetch fails, it doesn't go anywhere
  // refetchData = () => {
  //   this.setState({ isLoading: true });
  //   return Requests.getAllNotes().then((notes) => {
  //     this.setState({ allNotes: notes });
  //   }).then(() => this.setState({ isLoading: false }));
  // };

  refetchData = () => {
    this.setState({ isLoading: true });
    return Requests.getAllNotes()
      .then((notes) => {
        this.setState({ allNotes: notes });
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  createNote = (note: Omit<Note, "id">) => {
    this.setState({ isLoading: true });
    Requests.createNote(note)
      .then(this.refetchData)
      .then(() => {
        toast.success("Awesome Note Dude 🚀");
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  render() {
    return (
      <>
        <SectionLayout backgroundColor="blueviolet">
          <h1>Hello</h1>
        </SectionLayout>
        <SectionLayout backgroundColor="blueviolet" children="HELLO" />
        <SectionLayout backgroundColor="palegreen">
          <h1>Hello</h1>
        </SectionLayout>
        <SectionLayout backgroundColor="tomato">
          <h1>Hello</h1>
        </SectionLayout>
      </>
    );
  }
}

export default App;
