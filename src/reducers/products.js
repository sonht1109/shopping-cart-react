import * as constants from '../constants/ActionTypes'

var initState = [
    {
        id: 1, 
        name: 'Huawei Nova 7i',
        src: 'https://cdn.chotot.com/pgJHwPnotaffQXI-n3lcKQmcDx4MzszNBQKtdxr8URo/preset:view/plain/c976532b7d562fb90d0c21b9ca8eeb48-2690151060756686875.jpg',
        price: 228,
        desc: 'Made by Huawei',
        inventory: 5
    },
    {
        id: 2, 
        name: 'Iphone 11 Pro Max',
        src: 'https://minhtuanmobile.com/wp-content/uploads/2020/05/iphone-11-pro-max-gold-3-1.jpg',
        price: 647,
        desc: 'Made by Apple',
        inventory: 8
    },
    {
        id: 3, 
        name: 'Samsung S20 Ultra',
        src: 'https://cdn.tgdd.vn/Products/Images/60/220189/op-lung-galaxy-s20-ultra-nhua-deo-slim-tpu-jm-den-1-1-600x600.jpg',
        price: 635,
        desc: 'Made by Samsung',
        inventory: 10
    },
    {
        id: 4, 
        name: 'Oppo Reno 5',
        src: 'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/gsmarena_0001.jpg',
        price: 593,
        desc: 'Made by Oppo',
        inventory: 20
    },
    {
        id: 5,
        name: "Oneplus 5T",
        src: 'https://www.viettablet.com/images/detailed/26/oneplus-5.png',
        price: 392,
        desc: 'Made by 1+',
        inventory: 15
    },
    {
        id: 6,
        name: "Xiaomi Note 10 Lite",
        src: "https://i01.appmifile.com/webfile/globalimg/products/pc/mi-note-10-lite/section04.png",
        price: 427,
        desc: "Made by Mi",
        inventory: 2
    }
]

var reducer = (state = initState, action)=>{
    switch(action.type){
        case constants.UPDATE_STOCK:
            const {list} = action;
            console.log(action);
            let temp = state;
            for(let item of list){
                state[item.product.id - 1].inventory -= item.quantity
            }
            return [...temp]
        default:
            return [...state];
    }
}

export default reducer;