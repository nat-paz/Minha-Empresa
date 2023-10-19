const tabela = document.querySelector(".tabela-js");

axios.get('https://apiaulas--nataliapazsa.repl.co/funcionarios')
    .then(function(response) {
        getData(response.data);
    })

    .catch(function(error){
        console.log(error);
    })

    function getData(data){
        data.map((item)=>{
            tabela.innerHTML += ` 
            <tr>
                <th scope="row">${item.id}</th>
                <td>${item.nome}</td>
                <td>${item.cargo}</td>
                <td>${item.salario}</td>
                <td><span class="material-symbols-outlined text-danger">
                delete
                </span><span class="material-symbols-outlined text-success">
                edit
                </span></td>
            </tr>
            `
        })
    }


