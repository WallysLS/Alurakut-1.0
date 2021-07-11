function testeTres(id: string, nome:string){
    console.log(id,nome)
};

class minhaClasse(){
        cadastro() {
            testeTres("ou","e")
        }
};




interface meusDados{
    id:string,
    nome:string
}

function testeTres({ id, nome }:string){
    console.log(id,nome )
}