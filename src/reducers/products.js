var initState = [
    {
        id: 1, 
        name: 'Huawei Nova 7i',
        src: 'https://cdn.tgdd.vn/Products/Images/42/218363/huawei-nova-7i-tgdd4-5.jpg',
        price: 228,
        desc: 'Made by Huawei',
        inventory: 5
    },
    {
        id: 2, 
        name: 'Iphone 11 pro max',
        src: 'https://minhtuanmobile.com/wp-content/uploads/2020/05/iphone-11-pro-max-gold-3-1.jpg',
        price: 647,
        desc: 'Made by Apple',
        inventory: 8
    },
    {
        id: 3, 
        name: 'Samsung s20 ultra',
        src: 'https://cdn.tgdd.vn/Products/Images/60/220189/op-lung-galaxy-s20-ultra-nhua-deo-slim-tpu-jm-den-1-1-600x600.jpg',
        price: 635,
        desc: 'Made by Samsung',
        inventory: 10
    }
]

var reducer = (state = initState, action)=>{
    switch(action.actionTypes){
        default:
            return [...state];
    }
}

export default reducer;