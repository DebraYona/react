import React, { Component} from 'react'
import PropTypes from 'prop-types';
import $ from 'jquery'
import DigimonsList from "./DigimonsList";
import DigimonAddForm from "./DigimonAddForm";
import { digimon } from "../data/digimon"
import uid from 'uid'

class App extends Component {
    constructor(...props) {
        super(...props)

        this.state = {
            digimons: []
        }

        this.handleOnAddDigimon = this.handleOnAddDigimon.bind(this)
        this.fetchData = this.fetchData.bind(this)
        this.resetData = this.resetData.bind(this)


    }

    handleOnAddDigimon(e) {
        //alert('Evento en React')
        e.preventDefault()
        let form = e.target,
            digimon = {
                id: (form.id.value) ? form.id.value : App.defaultProps.id,
                name: (form.name.value) ? form.name.value : App.defaultProps.name,
                tipo: (form.tipo.value) ? form.tipo.value : App.defaultProps.tipo

            }
        this.setState({
            digimons: this.state.digimons.concat([digimon])

        })

        form.reset()
    }

    fetchData(){
        /*setTimeout( () => this.setState( { courses:courses } ), 3000 )*/
        $('#root')
            .fadeOut( 1000, () => this.setState( { digimons:digimon } ) )
            .fadeIn()
    }


    resetData(){
        /*this.setState( { courses: [] } )*/
        $('#root')
            .fadeOut( 9000, () => this.setState( { digimons:[] } ) )
            .fadeIn()

    }

    componentDidMount(){
        this.fetchData()
    }

    render() {
     if (!this.state.digimons.length){
            return(
                <div>
                    <p>No hay digimons   ...</p>
                    <button onClick ={this.fetchData}> Carga Digimons </button>
                </div>
            )


        } else {
            return (
                <div>
                    <DigimonAddForm onAddDigimon={this.handleOnAddDigimon}/>
                    <DigimonsList
                        digimons={this.state.digimons}  />
                    <button onClick ={this.resetData}> Borrar Digimons </button>

                </div>
                )
             }
/*
        return(
            <div>
                <DigimonAddForm onAddDigimon={this.handleOnAddDigimon}/>
                <DigimonsList
                    digimons={this.state.digimons}  />
                <button onClick ={this.resetData()}> Borrar Digimons </button>

            </div>

        )

*/
    }
}


    App.propTypes = {
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        tipo: PropTypes.string.isRequired
    }

    App.defaultProps = {
        id: uid(10),
        name: 'Curso Desconocido',
        tipo: 'Tipo No Asignado'
    }

    export default App