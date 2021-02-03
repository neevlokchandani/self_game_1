class game1{
    constructor(){}

    referGameState(){
        database.ref("GameState").on("value",(data)=>{
            gamedata=data.val();
        });
    }

        updateGame(data1){
            database.ref("/").update({
                GameState: data1
            })
        }
}