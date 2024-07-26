
const product = [
   {
       id: 0,
       image: 'dumbbell.png',
       title: 'Dumbbell (4kg)',
       price: 24.00,
   },
   {
       id: 1,
       image: 'treadmill.png',
       title: 'Treadmill',
       price:1488.00,
   },
   {
       id: 2,
       image: 'skipping_role.png',
       title: '2Skipping rope',
       price: 4.00,
   },
   {
       id: 3,
       image: 'Sit_up.png',
       title: 'Sit-Up Benches',
       price: 99.00,
   },
   {
    id: 4,
    image: 'yogamats.png',
    title: 'Yoga mats',
    price: 11.00,
},
{
    id: 5,
    image: '多功能家用健身器材.webp',
    title: 'Home Gym',
    price: 1899.00,
},
{
    id: 6,
    image: 'yoga_band.png',
    title: 'Yoga Band',
    price: 39.00,
},
{
    id: 7,
    image: 'massage_stick.png',
    title: 'Massage_stick',
    price: 9.00,
}
];
const categories = [...new Set(product.map((item)=>
   {return item}))]
   let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
   var {image, title, price} = item;
   return(
       `<div class='box'>
           <div class='img-box'>
               <img class='images' src=${image}></img>
           </div>
       <div class='bottom'>
       <p>${title}</p>
       <h2>$ ${price}.00</h2>`+
       "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
       `</div>
       </div>`
   )
}).join('')

var cart =[];

function addtocart(a){
   cart.push({...categories[a]});
   displaycart();
}
function delElement(a){
   cart.splice(a, 1);
   displaycart();
}

function displaycart(){
   let j = 0, total=0;
   document.getElementById("count").innerHTML=cart.length;
   if(cart.length==0){
       document.getElementById('cartItem').innerHTML = "Your cart is empty";
       document.getElementById("total").innerHTML = "$ "+0+".00";
   }
   else{
       document.getElementById("cartItem").innerHTML = cart.map((items)=>
       {
           var {image, title, price} = items;
           total=total+price;
           document.getElementById("total").innerHTML = "$ "+total+".00";
           return(
               `<div class='cart-item'>
               <div class='row-img'>
                   <img class='rowimg' src=${image}>
               </div>
               <p style='font-size:12px;'>${title}</p>
               <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
               "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
           );
       }).join('');
   }

   
}
