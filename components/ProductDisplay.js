app.component('product-display' ,{ 
    props: {
      premium : {
        type: Boolean ,
        required: true
      }
    },
    template:
    /*html*/
    `<div class="product-display">
    <div class="product-container">
      <div class="product-image">
         <img :class="{'out-of-stock-img': !instock}" v-bind:src="image" >
      </div>
      <div class="product-info">
        <h1> {{sale}}</h1>
        <p v-if="instock"> In Stock</p>
        <p v-else>Out of Stock</p>
        <p> shipping: {{ shipping}} </p>
        <div class="lists-container">
        <ul>
          <li v-for="(size, index) in sizes" :key="index">{{size}}</li>
        </ul>
        <ul>
          <li v-for="detail in details">{{detail}}</li>
        </ul>
        </div>
      <div v-for="(variant,index) in variants" :key="variant.id" 
      @mouseover="updateVariant(index)" 
      class="color-circle" :style="{ backgroundColor: variant.color}" > 
       </div>
       <div class="button-container">
      <button class="button" :class="{ disabledButton: !instock}" @click="addtocart" 
      :disabled="!instock">Add to Cart</button>
      <button class="button" @click="removefromcart">Remove item</button>
     </div>
      </div>
      <review-list v-if="reviews.length" :reviews="reviews"></review-list>
      <review-form @review-submitted="addReview"></review-form>
    </div> ` ,
    data() {
        return {
           onSale: true ,
           product: 'socks',
           brand: 'vue Mastery',
           selectedVariant:0,
           details: ['50% cotton','30% wool', '20% polyester'],
           variants: [
             { id:2234 , color: 'green' , image:'./assets/images/socks_green.jpg', quantity:2 },
             { id:2235 , color: '#0c0b54', image: './assets/images/socks_blue.jpg' , quantity:50},
           ],
           sizes: ['S', 'M', 'L', 'XL'],
           reviews: []
         
     }
 },
 methods: {
   addtocart() {
     this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
   },
   updateVariant(index){
     this.selectedVariant=index
     console.log(index)
   },
   removefromcart(){
    this.$emit('remove-from-cart', this.variants[this.selectedVariant].id)
   },
   addReview(review){
    this.reviews.push(review)
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
    },
    shipping(){
        if(this.premium){
            return 'Free';
        }
        return 2.99;
    }
    }
})