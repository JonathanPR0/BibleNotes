import Search from "./Search";
import iconGradient from "../assets/iconGradient.png";

export default function Hero() {

  return (
    <section className="flex absolute items-center justify-center flex-col w-screen h-screen bg-background text-textColor-500 p-8 object-cover">
      <img src={iconGradient} className="absolute top-0 left-0 w-[20vw] sm:w-[15vw] z-5" />
      <h2 className="text-lg sm:text-2xl md:text-4xl font-bold mb-1 sm:mb-4 max-w-xl">Olá! Este é o</h2>
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 sm:mb-12 max-w-xl">📖 BibleNotes 📖</h1>
      <p className="text-base md:text-lg font-medium mb-8 sm:mb-12 max-w-xl text-center">Com o “BibleNotes” é possível guardar os textos bíblicos que mais lhe tocam e futuramente revê-los para um estudo mais aprofundado</p>
      <Search />
      <img src={iconGradient} className="absolute bottom-0 right-0 w-[20vw] sm:w-[15vw] rotate-180" />
    </section>
  )
}