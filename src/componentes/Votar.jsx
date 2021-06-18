import React, { useEffect } from "react"
import { useState } from "react";
import { Button } from 'reactstrap';
import axios from "axios";

/**
 * 
 * @author Thiago da Silva Moraes
 * @param {*} props 
 * @returns 
 */

export default function Votar(props) {

    const [conteudo, SetConteudo] = useState([])
    const [upvotes, SetUpvotes] = useState(0)

    useEffect(() => {
		axios
			.get(`/posts/`)
			.then(res => {
                let resposta = res.data

                if(resposta != null) {
                    SetConteudo(res.data)
                    console.log(res.data)
                } else {
                    alert("Nenhum texto recebeu curtida")
                }
			})
			.catch(err => {
				console.log(err)
			})
        }, [upvotes])
    
    function curtir() {
        SetUpvotes((anterior) => {return anterior + 1})
    }

    function apresentaVotos(id, texto, voto) {
        let votos = JSON.stringify(voto)
        var votacao = parseInt(votos) + parseInt(upvotes)
        const atualiza = { id: id, name: texto, voto: votacao };

        if (props.id === id) {
                axios.put(`/posts/${id}`, atualiza)
                .catch(function (error) {
                    console.error('There was an error!', error)
                  })
                .then(response => console.log(response))
                
                do {
                    return <strong>{votacao}</strong>
                } while (upvotes);
                
        }
    }

    const curtidas = conteudo.map(upvote => apresentaVotos(upvote.id, upvote.name, upvote.voto))

    return(
    <div>
        <Button data-testid="votar" size="sm" color="primary" onClick={curtir}>{curtidas}</Button>
    </div>
    )
}