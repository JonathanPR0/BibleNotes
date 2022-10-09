import SummaryNote from "./SummaryNote";

export default function GridNotes({ setShowForm, setShowNote, setIsActive, isActive }) {
  return (
    <section className={`${isActive ? "flex md:grid" : "hidden"} flex-col justify-center md:grid-cols-2 auto-rows-auto gap-8 sm:gap-12 max-w-5xl px-8 py-16 bg-white w-screen mt-[100vh]`}>
      <button className="text-lg w-full rounded-lg bg-primaryColor-500 hover:bg-primaryColor-600 transition-colors col-start-1 col-span-2 py-4 text-white font-medium" onClick={() => {
        setIsActive(false);
        setShowForm(true);
      }}>+ Nova anotação +</button>
      <SummaryNote setShowNote={setShowNote} setShowForm={setIsActive} />
      <SummaryNote setShowNote={setShowNote} setShowForm={setIsActive} />
      <SummaryNote setShowNote={setShowNote} setShowForm={setIsActive} />
      <SummaryNote setShowNote={setShowNote} setShowForm={setIsActive} />
    </section>
  )
}
