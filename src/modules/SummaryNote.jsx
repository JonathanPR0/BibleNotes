import React from 'react'

export default function SummaryNote({ setShowNote, setShowForm }) {
  return (
    <div className="flex flex-col items-left col-span-1 bg-background px-8 py-6 border-t-4 b-gradient rounded-lg">
      <h3 className="font-bold text-2xl text-primaryColor-500">Gerrit Losh: Não guarde ressentimento</h3>
      <p className="text-base text-primaryColor-300 mt-2 mb-4">1 Coríntios 12:16</p>
      <button className="text-white py-2 px-8 bg-primaryColor-500 rounded-full w-fit" onClick={() => {
        setShowNote(true);
        setShowForm(false)
      }}>Veja mais</button>
    </div >
  )
}
