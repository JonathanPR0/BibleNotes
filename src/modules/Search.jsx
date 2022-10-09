import { MagnifyingGlass } from "phosphor-react"

export default function Search() {

  return (
    <div className="flex max-w-xl gap-2">
      <input type="text" placeholder="Encontre o livro" className="text-sm sm:text-base md:text-lg font-medium rounded-full py-4 px-8 border-2 border-inputColor-500 text-inputColor placeholder:text-inputColor-500 focus:placeholder:text-inputColor-600 bg-transparent focus:border-inputColor-600 focus:outline-0 transition-colors" />
      <button className="text-sm sm:text-base md:text-lg font-semibold py-2 px-4 sm:py-4 sm:px-8 rounded-full bg-primaryColor-500 hover:bg-primaryColor-600 text-white transition-colors"><MagnifyingGlass size={24} weight="bold" /></button>
    </div>
  )
};
