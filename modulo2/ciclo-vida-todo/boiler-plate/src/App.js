import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [
        {
          id: Date.now(), // Explicação abaixo
          texto: 'Estudar programação',
          completa: false // Indica se a tarefa está completa (true ou false)
        },
        {
          id: Date.now(), // Explicação abaixo
          texto: 'Atividade física',
          completa: true // Indica se a tarefa está completa (true ou false)
        }
      ],
      inputValue: '',
      filtro: '',
      inputCompetas:""
    }

  componentDidUpdate() {

  };

  componentDidMount() {

  };

  onChangeInput = (event) => {
    this.setState ({inputValue: event. target.value})

  }

  criaTarefa = () => {
    
    const novasTarefas = {
      texto: this.state.inputValue
    }

    const copia = [... this.state.tarefas, novasTarefas ]
    this.setState ({tarefas: copia})
    
    this.setState ({inputValue:""})


  }

  selectTarefa = (id) => {

    const ListaTarefasCompletas = this.state.tarefas.map ((tarefa) => {
      if (id === tarefa.id){
        const UmaNovaListaDeTarefas ={
          ...tarefa,
          completas: !tarefa.completas

        }
        return tarefa
      
      }

    })

    this.setState({tarefas: ListaTarefasCompletas})

  }



  onChangeFilter = (event) => {

    this.setState ({inputCompletas: event. target.value})
  
  }

  criaTarefascompletas = () => {
    
    const novasTarefasCompletas = {
      texto: this.state.inputCompetas
    }

    const copia = [... this.state.tarefas, novasTarefasCompletas ]
    this.setState ({tarefas: copia})
    
    this.setState ({inputCompetas:""})


  }



  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
         
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="Nenhum">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
