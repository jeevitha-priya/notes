
function NoteList({ notes, deleteNote, editNote }) {
  return (
  <div className="notes-grid">
  {notes.map(note => (
    <div className="note-card" key={note._id}>
      <h3>{note.title}</h3>
      <p>{note.body}</p>

      <div className="actions">
        <button className="btn edit" onClick={()=>editNote(note)}>Edit</button>
        <button className="btn delete" onClick={()=>deleteNote(note._id)}>Delete</button>
      </div>
    </div>
  ))}
</div>
  );
}

export default NoteList;