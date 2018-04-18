    import React from 'react'
    import uid from 'uid'


    const DigimonAddForm = (props) =>(

        <form onSubmit={props.onAddDigimon}>
            <input type="text" placeholder="Nombre del Digimon" name="name" required />
            <input type="text" placeholder="Tipo del Digimon" name="tipo" required />
            <input type="hiden" name = "id" value={uid(10)} />
            <input type="submit" value="Guardar"/>

        </form>

    )

    export default DigimonAddForm


