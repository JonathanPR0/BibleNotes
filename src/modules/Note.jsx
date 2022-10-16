import RetrunButton from './RetrunButton'

export default function Note({ isActive, setIsActive, setShowNotes }) {
  return (
    <section className={`${isActive ? "flex" : "hidden"} bg-white px-8 py-8 sm:py-16 w-screen items-center justify-center mt-[100vh]`}>
      <div className="relative flex-col justify-center items-center rounded-8 border-2 border-lineColor-500 w-full max-w-4xl px-8 sm:px-16 py-8">
        <RetrunButton section={setIsActive} previousSection={setShowNotes} top="16" left="16" />
        <h2 className="font-bold text-3xl sm:text-4xl max-w-md text-center m-auto text-primaryColor-500 mt-4 mb-6">Gerrit Losh: Não guarde ressentimento</h2>
        <p className="font-medium text-sm sm:text-md text-center text-primaryColor-400 mt-4 mb-6">1 Coríntios 12:16</p>
        <p className="font-normal text-base sm:text-lg text-center text-primaryColor-200 mt-4 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, atque praesentium. Odio temporibus aliquid aspernatur pariatur dicta blanditiis sed culpa magni, natus rerum sapiente ab quibusdam deserunt ipsa ad! Fuga.</p>
        <ul className="flex gap-4 justify-around flex-wrap font-medium text-sm sm:text-lg text-primaryColor-400 ">
          <li>2 Timóteo 2:44</li>
          <li>Apocalipse 21:3,4</li>
          <li>Salmo 100:3</li>
        </ul>
      </div>
    </section>
  )
}
