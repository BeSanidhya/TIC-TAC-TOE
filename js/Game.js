export default class Game{

    constructor(){
        console.log("init game");
        this.board = new Array(9).fill(null);
        this.turn = "X";
    }

    nextTurn(){
        if(this.turn == "X"){
            this.turn = "O";
        } else {
            this.turn = "X"
        }
    }

    makeMove(i){

        if(this.endOfGame()){
            return;
        }
        if(this.board[i]){
            return;
        }
        this.board[i] = this.turn;
        let wincombo = this.findWinning();
        if(!wincombo){
            this.nextTurn();
        }
    }

    findWinning(){
        const winning = [
            [0,1,2],[3,4,5],[6,7,8],
            [0,3,6],[1,4,7],[2,5,8],
            [0,4,8],[6,4,2]
        ]
        for(const combination of winning){
            const [a,b,c] = combination;
            if(this.board[a] && this.board[a] === this.board[b] && this.board[a]===this.board[c]){
                return combination;
            }
        }
        return null;
    }

    endOfGame(){
        let wincombo = this.findWinning();
        if(wincombo){
            return true;
        }else{
            return false;
        }
    }
}