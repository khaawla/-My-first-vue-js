const app=Vue.createApp({ 
    data() {
       return {
          cart: 0 ,
          onSale: true ,
          product: 'socks',
          brand: 'vue Mastery',
          selectedVariant:0,
          inventory: 0 ,
          details: ['50% cotton','30% wool', '20% polyester'],
          variants: [
            { id: 2234 , color: 'green' , image:'./assets/images/socks_green.jpg', quantity:0 },
            { id:2235 , color: '#0c0b54', image: './assets/images/socks_blue.jpg' , quantity:50},
          ],
          sizes: ['S', 'M', 'L', 'XL'],
        
    }
},
methods: {
  addtocart() {
    this.cart +=1
  },
  updateVariant(index){
    this.selectedVariant=index
    console.log(index)
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
  },
  image() {
    return this.variants[this.selectedVariant].image
  },
  instock() {
    return this.variants[this.selectedVariant].quantity
  },
  sale(){
    if(this.onSale) {
      return this.brand+' '+this.product+' ,is on sale.';
    } else { 
      return this.brand + ' ' +this.product;
     
    
  }
  }

}
})
