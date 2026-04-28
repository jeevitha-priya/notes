
import { useState, useEffect } from "react";
import API from "../api";

function NoteForm({ fetchNotes, editingNote, setEditingNote }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setBody(editingNote.body);
    }
  }, [editingNote]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !body) {
      alert("All fields required");
      return;
    }

    if (editingNote) {
      await API.put(`/notes/${editingNote._id}`, { title, body });
      setEditingNote(null);
    } else {
      await API.post("/notes", { title, body });
    }

    setTitle("");
    setBody("");
    fetchNotes();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="input"
        placeholder="Title"
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
      />

      <textarea
        className="textarea"
        placeholder="Write your note..."
        value={body}
        onChange={(e)=>setBody(e.target.value)}
      />

      <button className="btn primary" type="submit">
        {editingNote ? "Update Note" : "Add Note"}
      </button>
    </form>
  );
}

export default NoteForm;