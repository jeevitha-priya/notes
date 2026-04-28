import { useEffect, useState } from "react";
import API from "./api";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");
  const [editingNote, setEditingNote] = useState(null);

  // Fetch notes
  const fetchNotes = async () => {
    const res = await API.get("/notes");
    setNotes(res.data);
  };

  // Delete note
  const deleteNote = async (id) => {
    await API.delete(`/notes/${id}`);
    fetchNotes();
  };

  // Filter notes
  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="container">
      <h1 className="title">📝 Notes App</h1>

      <input
        className="search"
        placeholder="Search notes..."
        onChange={(e)=>setSearch(e.target.value)}
      />

      <div className="card">
        <NoteForm
          fetchNotes={fetchNotes}
          editingNote={editingNote}
          setEditingNote={setEditingNote}
        />
      </div>

      <NoteList
        notes={filteredNotes}
        deleteNote={deleteNote}
        editNote={setEditingNote}
      />
    </div>
  );
}

export default App;
