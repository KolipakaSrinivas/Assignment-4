ratingData = [

    {restaurant: 'KFC', rating:5}, 
    {restaurant: 'Burger King', rating:4},
    {restaurant: 'KFC', rating:3}, 
    {restaurant: 'Domino', rating:2},  
    {restaurant: 'Subway', rating:3},
    {restaurant: 'Domino', rating:1}, 
    {restaurant: 'Subway', rating:4},
    {restaurant: 'Pizza Hut', rating:5}

 ];
//a set uniqe values from a give list
const uniqueRestaurants = Array.from(new Set(ratingData.map(({restaurant})=>restaurant)));
let arry=[]
uniqueRestaurants.map(restaurantsName=>{
    const filtereatingdata = ratingData.filter(obj=>obj.restaurant == restaurantsName);
    //[{restaurent:'kfc',reating:5},......]
    let output={
        restaurant:restaurantsName,
        averageRating:filtereatingdata.reduce((prev,next)=>prev+next.rating,0)/filtereatingdata.length
    }
    arry.push(output)
})

console.log(arry)

//b
console.log(arry.filter(item=>item.averageRating >= 4));
