    import React from 'react'
    import Digimon from "./Digimon";



    const DigimonsList  = (props) =>(


            <ul>
                {
                    props.digimons.map(digimon => (
                        <Digimon
                            key={digimon.id}
                            id={digimon.id}
                            name ={digimon.name}
                            tipo ={digimon.tipo}

                        />

                    ))
                }


            </ul>



    )


    export default  DigimonsList