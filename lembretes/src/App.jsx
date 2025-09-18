import "./App.css"

function App() {
  return (
    <>
      <section className="lembrete">
        <h1>Meus Lembretes</h1>
        <h3>Adicionar Lembretes</h3>
        <input type="text" className="inputLembrete" id="inputLembrete" placeholder="Qual lembrete você irá adicionar?" />
        <button>Enviar</button>
      </section>
      <section className="listaLembrete">
        <div class="card">
          <h3>Titulo do lembrete</h3>
          <p>Sem observações</p>
          <ul>
            <li>Test</li>
          </ul>
          <div>
            <input type="text" className="adicionarObs" id="adicionarObs" placeholder="Adicionar observações" />
            <button>Adicionar</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
