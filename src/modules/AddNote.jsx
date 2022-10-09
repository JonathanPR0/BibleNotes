import { useState } from "react";
import RetrunButton from "./RetrunButton";

export default function AddNote({ isActive, setIsActive, setShowNotes }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [link, setLink] = useState("");
  const [review, setReview] = useState("");
  const [otherTexts, setOtherTexts] = useState([]);

  return (
    <section className={`${isActive ? "flex" : "hidden"} flex-col bg-white max-w-lg rounded-lg px-8 py-16 w-screen mt-[100vh]`}>
      <RetrunButton section={setIsActive} previousSection={setShowNotes} top="64" left="-30" />
      <h2 className="font-bold text-4xl text-primaryColor-500 text-center mb-8">+ Nova Anotação + </h2>
      <form action="" className="flex flex-col">
        <input
          type="text"
          id="title"
          value={title}
          placeholder="Título"
          onChange={(event) => setTitle(event.target.value)}
          className="rounded-lg px-6 py-4 mb-4 border-2 border-lineColor-500 text-lineColor-600 placeholder:text-lineColor-500 bg-transparent focus:border-lineColor-600 focus:placeholder:text-lineColor-600 focus:outline-0 hover:border-lineColor-600 hover:placeholder:text-lineColor-600 hover:outline-0 transition-colors"
        />
        <input
          type="text"
          id="text"
          value={text}
          placeholder="Texto Base"
          onChange={(event) => setText(event.target.value)}
          className="rounded-lg px-6 py-4 mb-4 border-2 border-lineColor-500 text-lineColor-600 placeholder:text-lineColor-500 focus:placeholder:text-lineColor-600 bg-transparent focus:border-lineColor-600 focus:outline-0 hover:border-lineColor-600 hover:placeholder:text-lineColor-600 hover:outline-0 transition-colors"
        />
        <input
          type="text"
          id="link"
          value={link}
          placeholder="Link para a matéria"
          onChange={(event) => setLink(event.target.value)}
          className="rounded-lg px-6 py-4 mb-4 border-2 border-lineColor-500 text-lineColor-600 placeholder:text-lineColor-500 focus:placeholder:text-lineColor-600 bg-transparent focus:border-lineColor-600 focus:outline-0 hover:border-lineColor-600 hover:placeholder:text-lineColor-600 hover:outline-0 transition-colors"
        />
        <textarea
          id="mensagem"
          value={review}
          rows="3"
          placeholder="Review da matéria"
          onChange={({ target }) => setReview(target.value)}
          className="rounded-lg px-6 py-4 mb-8 border-2 border-lineColor-500 text-lineColor-600 placeholder:text-lineColor-500 focus:placeholder:text-lineColor-600 bg-transparent focus:border-lineColor-600 focus:outline-0 hover:border-lineColor-600 hover:placeholder:text-lineColor-600 hover:outline-0 transition-colors"
        />
        <h3 className="font-bold text-2xl text-primaryColor-500 mb-6">Outros textos:</h3>
        <ul className="list-disc pl-8">
          <li>1 Coríntios 12:16</li>
        </ul>
        <div className="flex flex-col sm:flex-row gap-3 mt-4 mb-8 max-w-full">
          <input
            type="text"
            id="otherText"
            value={otherTexts}
            placeholder="Texto"
            onChange={(event) => setOtherTexts(event.target.value)}
            className="sm:max-w-[195px] text-base rounded-lg px-6 py-4 border-2 border-lineColor-500 text-lineColor-600 placeholder:text-lineColor-500 focus:placeholder:text-lineColor-600 bg-transparent focus:border-lineColor-600 focus:outline-0 hover:border-lineColor-600 hover:placeholder:text-lineColor-600 hover:outline-0 transition-colors"
          />
          <div className="flex flex-row gap-3" >
            <input
              type="text"
              id="otherTextLink"
              value={otherTexts}
              placeholder="Link"
              onChange={(event) => setOtherTexts(event.target.value)}
              className="min-w-[calc(100%-2.5rem-30px)] sm:max-w-[170px] text-base rounded-lg px-6 py-4 border-2 border-lineColor-500 text-lineColor-600 placeholder:text-lineColor-500 focus:placeholder:text-lineColor-600 bg-transparent focus:border-lineColor-600 focus:outline-0 hover:border-lineColor-600 hover:placeholder:text-lineColor-600 hover:outline-0 transition-colors"
            />
            <button className="text-3xl sm:w-max min-w-[3.5rem] min-h-[3.5rem] rounded-lg bg-primaryColor-500 hover:bg-primaryColor-600 transition-colors text-white font-medium">+</button>
          </div>
        </div>
        <button className="text-lg w-full rounded-lg bg-primaryColor-500 hover:bg-primaryColor-600 transition-colors col-start-1 col-end-3 py-4 text-white font-medium">Criar</button>
      </form>
    </section>
  )
}