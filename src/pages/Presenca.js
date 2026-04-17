// pages/Contact.js 

export const Presenca = (a, b) => {
    const div2 = document.createElement('div');
    div2.classList.add("tabela");
    
    const tabela = document.createElement("table");

    tabela.innerHTML = `
    <tr>
     <th>Data</th>
     <td>${a}/${b}</td>
     <td>${a+1}/${b}</td>
     <td>${a+2}/${b}</td>
     <td>${a+3}/${b}</td>
     <td>${a+4}/${b}</td>
    </tr>
    <tr>
     <th>Presença</th>
     <td class="td"></td>
     <td class="td"></td>
     <td class="td"></td>
     <td class="td"></td>
     <td class="td"></td>
    </tr>
    `;

    // Seleciona todas as células
    const tds = tabela.querySelectorAll(`.td`);

    // Percorre cada uma das 4 células encontradas
    tds.forEach((celula) => {
        const espacoPresenca = document.createElement(`div`);
        espacoPresenca.classList.add(`espacoPresenca`);
        // espacoPresenca.classList.add(`clicado`);
        
        // Adiciona a div dentro da célula atual do loop
        celula.append(espacoPresenca);
    });

    div2.append(tabela);
    return div2;
};

    // function gerarTabela () {
         
    //     for (let i = 0; i < 3; i++) {
    //         const tr = document.createElement("tr")
    //         const tr2 = document.createElement("tr")
    //         if (i === 0) {
                
    //             for (let h = 0; h < 2; h++) {
    //                 const th = document.createElement("th")
    //                 if (h === 0) {
    //                     th.innerText = "Data"
    //                 }else{
    //                     th.innerText = "Presença"
    //                 }
    //             tr2.append(th)
    //         }
    //     }
    //         for (let j = 0; j < 1; j++) {
    // const td = document.createElement("td");
    
    // const novoBotao = b.cloneNode(true); 
    
    // novoBotao.onclick = b.onclick; 
    // td.append(novoBotao);
    // tr.append(td);
    //         }
    //         tabela.append(tr2, tr);
            
    //     }
    // }
    
    // gerarTabela()


