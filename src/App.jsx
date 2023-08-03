export default function App() {

  return (
    // ola Hatfix
        <main className=" h-full w-full md:w-5/6 md:h-5/6 md:max-h-80 md:mx-auto md:mt-40 md:flex md:shadow-2xl rounded-3xl">

          <article className="w-full h-2/4 bg-blue-200 lg:bg-red-200 text-white text-center rounded-b-3xl  md:w-2/4 md:min-h-full md:rounded-3xl">

            <h1 className="text-sm font-bold p-2 md:text-2xl md:my-5">Seu Resultado</h1>

            <div className="w-28 h-28 rounded-full bg-gradient-to-b from-blue-900 flex flex-col justify-center mx-auto my-3 md:p-9 md:box-content">
                <div className="text-4xl font-bold md:text-6xl md:mb-2">76</div>
                <p>para 100</p>
            </div>
            <h2 className="text-xl font-bold md:text-4xl md:my-5">ótimo</h2>
            <p className="text-sm w-60 mx-auto my-1 text-cente md:text-2xl md:w-auto md:px-12">você teve uma pontuação superior a 65% das pessoas que fizeram esses testes</p>
          </article>
          <article className="mx-7 md:w-2/4">

            <h2 className="text-xl font-semibold capitalize my-3 md:text-3xl">resumo</h2>

            <div className="bg-red-100 p-2 rounded-lg flex justify-between mb-3 md:p-3">
              <div className="flex w-32 ">
                <img src={"../../public/images/icon-reaction.svg"} alt="" className="inline-block md:w-10"/>
                <span className="capitalize text-red-500 ml-3 md:text-2xl">reação</span>
              </div>
              <div className="inline text-2xl">
                80 / 100
              </div>

            </div>

            <div className="bg-yellow-100 rounded-lg p-2 mb-3  md:p-3 md:my-5">
              <div className="inline-block ">
                <img src="../../public/images/icon-memory.svg" alt="" className="inline-block mr-3 md:w-10"/>
                <span className="capitalize text-yellow-600 md:text-2xl">memória</span>
              </div>
              <div className="float-right md:text-2xl">
                92 / 100
              </div>
            </div>

            <div className="flex bg-green-100 p-2 mb-2 rounded-lg justify-between md:p-3">
              <div>
                <img src="../../public/images/icon-verbal.svg" alt="" className="inline-block md:w-10"/>
                <span className="text-green-600 ml-3 capitalize md:text-2xl">verbal</span>
              </div>
              <div className="md:text-2xl">
                61 / 100
              </div>
            </div>

            <div className="bg-indigo-100 flex rounded-xl p-2 justify-between md:p-3 md:my-5">
              <div>
                <img src="../../public/images/icon-visual.svg" alt="" className="inline-block md:w-10"/>
                <span className="text-indigo-600 ml-3 capitalize md:text-2xl">visual</span>
              </div>
              <div className="md:text-2xl">
                72 / 100
              </div>
            </div>
          <div className="text-center">
          
            <button className="w-full bg-blue-950 text-white py-3 my-4 rounded-full capitalize hover:bg-indigo-600 md:py-5">continue</button>
          </div>
          </article>
        </main>
  )
}


