const data = [{id: 1, name: 'Abul', address:'Kochu khet'}];
console.log(data[0].address);

const product = {
    count: 500,
    data:[
        {id:1, name:'Lenovo laptop', price: 65000},
        {id:2, name:'Macbook', price: 65000}
    ]
}
console.log(product.data[1].price);

const user = {
    id: 5001,
    name: 'Shoriful Raj',
    address:{
        street:{
            first:'54/1 uttor side',
            second:'Poribag er goli',
            third: 'No dorai'
        },
        city: 'Dhaka'
    }
}
const user2 = {
    id: 5002,
    name: 'Pori bibir bazar',
    address:{
        city:'Chittagong',
        country:'Bangladesh'
    }
}
console.log(user.address.street.second);
console.log(user2.address.street?.second);