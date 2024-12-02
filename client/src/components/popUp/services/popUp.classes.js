import PopUp from "../popUp";

class InterfacePopUp {
    constructor(){
        this.condicao = true;
        this.message = '';
    };
};

class PopUps extends InterfacePopUp{
    constructor(message){ super() };
    
    aviso(message){
        this.message = message;
        this.condicao = true;
        return <PopUp condicao={this.condicao} mensagem={this.message}/> 
    };

    erro(message){
        this.message = message;
        this.condicao = false;
        return <PopUp condicao={this.condicao} mensagem={this.message}/>
    };
};

export const popUp = new PopUps();
