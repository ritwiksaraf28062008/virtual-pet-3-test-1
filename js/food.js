class Food{
    constructor(){
        this.image = loadImage("./images/Milk.png") 
        this.foodStock = 0;
        this.lastFed = null
        }

    display(){
        var x = 80
        var y = 100
 //       image(this.image , 220,200,50,50);
 
 if(this.foodStock > 0){
        for(var i = 0 ; i<this.foodStock ; i++){
            x = x+50
            if(i%10===0){
                x = 80
                y = y+50
            }
            image(this.image , x , y , 60 , 60)

        }
    }


}

getFoodStock(){
    var foodStockref = database.ref('Food');
    foodStockref.on("value" , (data)=>{
        this.foodStock = data.val();
    });
}

updateFoodStock(x){
    if(x<=0){
        x = 0;
      }
      else{
        x = x-1
      } 
      database.ref('/').update({
        Food : x ,
        FeedTime : hour
      })
}

}