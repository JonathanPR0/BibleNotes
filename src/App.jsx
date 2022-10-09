import { useState } from "react";
import 'animate.css';
import GridNotes from "./modules/GridNotes";
import Note from "./modules/Note";
import AddNote from "./modules/AddNote";
import Hero from "./modules/Hero";

export default function App() {
  const [showForm, setShowForm] = useState(false);
  const [showNotes, setShowNotes] = useState(true);
  const [showNote, setShowNote] = useState(false);

  return (
    <div className="flex items-center flex-col overflow-hidden h-full">
      <Hero />
      <GridNotes setShowForm={setShowForm} setShowNote={setShowNote} setIsActive={setShowNotes} isActive={showNotes} />
      <AddNote setShowNotes={setShowNotes} setIsActive={setShowForm} isActive={showForm} />
      <Note setShowNotes={setShowNotes} setIsActive={setShowNote} isActive={showNote} />
    </div>
  )
}