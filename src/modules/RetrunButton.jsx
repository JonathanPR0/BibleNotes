import { ArrowUUpLeft } from "phosphor-react"

export default function RetrunButton({ section, previousSection, left, top }) {
  return (
    <button className={`flex items-center justify-center w-max mb-4 sm:mb-0 sm:absolute rounded-full top-[${top}px] left-[${left}px] p-3 border-2 border-lineColor-500 text-lineColor-500 hover:border-lineColor-600 hover:text-lineColor-600 transition-colors`} onClick={() => {
      section(false);
      previousSection(true);
    }}><ArrowUUpLeft size={18} weight="bold" /></button>
  )
}
