const app=Vue.createApp({ 
    data() {
       return {
          cart: 0 ,
          product: 'socks',
          brand: 'vue Mastery',
          image:'./assets/images/socks_green.jpg',
          inventory: 0 ,
          details: ['50% cotton','30% wool', '20% polyester'],
          variants: [
            { id: 2234 , color: 'green' , image:'./assets/images/socks_green.jpg', quantity:50 },
            { id:2235 , color: '#0c0b54', image: './assets/images/socks_blue.jpg' , quantity:0},
          ],
          sizes: ['S', 'M', 'L', 'XL'],
          instock: true
    }
},
methods: {
  addtocart() {
    this.cart +=1
  },
  updateImage(variantImage){
    this.image=variantImage
  },
  decrementcart(){
    if(this.cart > 0){
    this.cart -=1
  }
}
},
computed:{
  title() {
    return this.brand + ' ' +this.product
  }
}
})
