import Note from "../models/Note.js";

export async function getAllNotes(request, response) {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    response.status(200).json(notes);
  } catch (error) {
    console.error("error in getAllNotes controller", error);
    response.status(500).json({ message: "Internal server error" });
  }
}

export async function getNoteById(request, response) {
  try {
    const note = await Note.findById(request.params.id);
    if (!note) return response.status(404).json({ message: "Note not found!" });
    response.status(200).json(note);
  } catch (error) {
    console.error("error in getNoteById controller", error);
    response.status(500).json({ message: "Internal server error" });
  }
}

export async function createNote(request, response) {
  try {
    const { title, content } = request.body;
    const note = new Note({ title, content });
    const savedNote = await note.save();
    response.status(201).json(savedNote);
  } catch (error) {
    console.error("Error in createNote controller", error);
    response.status(500).json({ message: "Internal server error" });
  }
}

export async function updateNote(request, response) {
  try {
    const { title, content } = request.body;
    const updatedNote = await Note.findByIdAndUpdate(
      request.params.id,
      { title, content },
      { new: true }
    );
    if (!updatedNote)
      return response.status(404).json({ message: "Note not found" });

    response.status(200).json({ message: updatedNote });
  } catch (error) {
    console.error("Error in upddateNote", error);
    response.status(500).json({ message: "Internal server error" });
  }
}

export async function deleteNote(request, response) {
  try {
    const deletedNote = await Note.findByIdAndDelete(request.params.id);
    if (!deletedNote)
      return response.status(404).json({ message: "Note not found" });
    response.status(200).json({ message: "Note deleted succesfully" });
  } catch (error) {
    console.error("Error in deleteNote", error);
    response.status(500).json({ message: "Internal server error" });
  }
}
