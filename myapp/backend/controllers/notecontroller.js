const Note = require("../models/note");

// CREATE
exports.createNote = async (req, res) => {
  try {
    const { title, body } = req.body;

    if (!title || !body) {
      return res.status(400).json({ message: "All fields required" });
    }

    const note = await Note.create({ title, body });
    res.status(201).json(note);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// READ
exports.getNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.json(notes);
  } catch {
    res.status(500).json({ message: "Error fetching notes" });
  }
};

// UPDATE
exports.updateNote = async (req, res) => {
  try {
    const note = await Note.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(note);
  } catch {
    res.status(500).json({ message: "Update failed" });
  }
};

// DELETE
exports.deleteNote = async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.id);
    res.json({ message: "Note deleted" });
  } catch {
    res.status(500).json({ message: "Delete failed" });
  }
};