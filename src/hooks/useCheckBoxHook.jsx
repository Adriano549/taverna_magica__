import { useState, useEffect } from "react";
import { produtosData } from "../services";

const useCheckBoxHook = () => {
    const [produtos, setProdutos] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [searchText, setSearchText] = useState("")
    
    useEffect(() => {
        getProdutos();
    }, []);

    useEffect(() => {
        getProdutos(selectedCategories , searchText);
    }, [selectedCategories , searchText]);

    const getProdutos = () => {
        const endpoints = [];
        for (const categoria of Object.values(produtosData)) {
            endpoints.push(...categoria.pocoes, ...categoria.feiticos, ...categoria.armas, ...categoria.acessorios, ...categoria.armaduras);
        }
        const filteredEndpoints = endpoints.filter((endpoint) => {
            const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(endpoint.categoria);
            const searchMatch = endpoint.nome.toLowerCase().includes(searchText.toLowerCase()) || endpoint.descricao.toLowerCase().includes(searchText.toLowerCase());
            return categoryMatch && searchMatch;
        });
        
        setProdutos(filteredEndpoints);
        
    };
    const handleCheckboxChange = (category, isChecked) => {
        const updatedCategories = [...selectedCategories];
        if (isChecked) {
            updatedCategories.push(category);
        } else {
            const index = updatedCategories.indexOf(category);
            if (index !== -1) {
                updatedCategories.splice(index, 1);
            }
        }
        setSelectedCategories(updatedCategories);
        getProdutos(updatedCategories);
    };
    const handleSearchChange = (event) => {
       
        setSearchText(event.target.value);
    };

    return { produtos, handleCheckboxChange, selectedCategories, handleSearchChange }
};

export default useCheckBoxHook;