// pages/Contact.js
export const FiqueAtento = (b) => {
    const div = document.createElement('div');
    div.classList.add("tabela")

    const tabela = document.createElement("table");

    function gerarTabela () {
         
        for (let i = 0; i < 3; i++) {
            const tr = document.createElement("tr")
            const tr2 = document.createElement("tr")
            if (i === 0) {

                for (let h = 0; h < 2; h++) {
                    const th = document.createElement("th")
                    if (h === 0) {
                        th.innerText = "Data"
                    }else{
                        th.innerText = "Presença"
                    }
                tr2.append(th)
            }
        }
            for (let j = 0; j < 1; j++) {
    const td = document.createElement("td");

    const novoBotao = b.cloneNode(true); 

    novoBotao.onclick = b.onclick; 
    td.append(novoBotao);
    tr.append(td);
            }
            tabela.append(tr2, tr);
            
        }
    }

    gerarTabela()
    
    div.append(tabela)

    return div;
};