        //criando o array
        let lista = ["Diego", "Ray", "Yasmin", "Jureba" ];
        //pegando o body
        let body = document.getElementsByTagName('body');
        //criando a lista
        let listaul = document.createElement('ul');
        //add a lista
        body[0].appendChild(listaul);
        //pegando a lista criada
        let listali = document.getElementsByTagName('ul');
        //lopping para adicionar todos os elementos da lista 1 por 1
        for(let i = 0; i < lista.length ; i++) {
            //pegando cada elemento da lista
            let li = document.createElement('li');
            //adicionando texto(cada nome) dentro da lista
            let nomes = document.createTextNode(lista[i]);
            //adicionando cada li com cada nome
            li.appendChild(nomes);
            listali[0].appendChild(li);
        }