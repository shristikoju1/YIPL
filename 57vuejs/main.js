Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: `
            <div class="product">
            <div class="product-image">
                <img v-bind:src='image' alt="shoes">
            </div>
            <div class="product-info">
                <h1>{{ title }}</h1>
                <p v-if="inStock">In Stock</p> 
                <!-- <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out !</p>  -->
                <p v-else
                    :class="{outofstock: !instock}"
                >Out of Stock</p>
                <p>{{sale}}</p>
                <p>Shipping: {{shipping}}</p>
                <ul>
                    <li v-for="detail in details">{{detail}}</li>
                </ul>

                <div 
                    class="color-box"
                    v-for="(variant, index) in variants" 
                    :key="variant.variantId"
                    :style="{backgroundColor: variant.variantColor}"
                    @mouseover="updateProduct(index)"
                >

                </div>

                <button 
                    v-on:click="addToCart"
                    :disabled="!inStock"
                    :class="{disabledButton: !inStock}"
                >
                    Add to cart
                </button>
            </div>
        </div>
    `,
    data(){
        return {
            product: "Socks",
            brand: "Vue Mastery",
            selectedVariant: 0,
            link: 'https://www.vuemastery.com/courses/intro-to-vue-js/attribute-binding',
            // inStock: false,
            details: ['80% cotton', '20% polyester', 'Gender-neutral'],
            variants: [
                {
                    variantId: 2234,
                    variantColor: 'green',
                    variantImage: './assets/vmSocks-green.png',
                    variantQuantity: 10
                },
                {
                    variantId: 2235,
                    variantColor: 'blue',
                    variantImage: './assets/vmSocks-blue.png',
                    variantQuantity: 0
                }
            ],
            cart: [],
            onSale: true
    
        }

    },
    methods: {
        addToCart(){
            this.$emit('add-to-cart',
                this.variants[this.selectedVariant].variantId
            )
        },
        updateProduct(index){
            this.selectedVariant = index
            console.log(index)
        },
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image(){
            return this.variants[this.selectedVariant].variantImage
        },
        inStock(){
            return this.variants[this.selectedVariant].variantQuantity
        },
        sale(){
            if (this.onSale) {
                return this.brand + ' ' + this.product + ' ' + 'are on sale!'
            }
            return this.brand + ' ' + this.product + 'are not on sale'
        },
        shipping() {
            if (this.premium) {
                return "Free"
            }
            return '2.99'
        }

    }



})

var app = new Vue ({
    el: '#app',
    data: {
        premium: false,
        cart: []
    },
    methods: {
        updateCart(id){
            this.cart.push(id)
        }
    }

})