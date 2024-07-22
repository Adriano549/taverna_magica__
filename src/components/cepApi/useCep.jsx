import { useState, useEffect } from "react";
import axios from "axios";

const useCep = (initialCep) => {
    const [cep, setCep] = useState(initialCep);

    const [address, setAddress] = useState({
        logradouro: "",
        bairro: "",
        localidade: "",
        uf: "",
        
    });
    const [error, setError] = useState("");
    
    const handleCepChange = (newCep) => {
        const cep = newCep.replace(/\D/g, ''); // Remove non-numeric characters
        if (cep.length <= 8) {
            setCep(cep);
            setAddress({
              logradouro: "",
              bairro: "",
              localidade: "",
              uf: "",
            });
        }
        
    };

    useEffect(() => {
        if (cep.length === 8) {
            axios.get(`https://viacep.com.br/ws/${cep}/json/`)
                .then(response => {
                    const data = response.data;
                    console.log(data);
                    if (data.erro) {
                        setError("CEP não encontrado");
                        setAddress({
                            logradouro: "",
                            bairro: "",
                            localidade: "",
                            uf: ""
                        });
                    } else {
                        setError("");
                        setAddress({
                            logradouro: data.logradouro,
                            bairro: data.bairro,
                            localidade: data.localidade,
                            uf: data.uf
                        });
                    }
                })
                .catch(error => {
                    setError("Erro ao buscar CEP");
                    setAddress({
                        logradouro: "",
                        bairro: "",
                        localidade: "",
                        uf: ""
                    }); 
                });
        }
    }, [cep]);

    return { cep, handleCepChange, address, error };
};

export default useCep;