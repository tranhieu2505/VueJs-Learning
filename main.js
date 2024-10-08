var vueInstance = new Vue({
    el: '#app',
    data:{
        title: 'Áo thun nam thể thao hàng VNXK vải dày mịn - Vải Đốm',
        url:'https://www.lazada.vn/products/ao-thun-nam-the-thao-hang-vnxk-vai-day-min-vai-dom-i265780948-s382816279.html',
        target: 'blank',
        price: 20000,
        sale: 0.1,
        selectedProduct: 1,
        listProductDetail: [
            {
                image: './images/blue.jpg',
                quanlity: 8,
                textColor: 'Blue'
            },
            {
                image: './images/black.jpg',
                quanlity: 10,
                textColor: 'Black'
            },
            {
                image: './images/red.jpg',
                quanlity: 0,
                textColor: 'Red'
            },
        ]
    },
    methods:{
        handleClickColor(e, index) {
            this.selectedProduct = index;
        }
    },
    computed: {
        formatOriginalPrice() {
            var number = this.price;

            return new Intl.NumberFormat('de-DE', {style: 'currency',
                currency: 'VND'}).format(number);
        },
        formatFinalPrice() {
            var number = this.price - this.sale * this.price;
            return new Intl.NumberFormat('de-DE', {style: 'currency',
                currency: 'VND'}).format(number);
        },
        getProduct() {
            let index = this.selectedProduct;
            return this.listProductDetail[index];
        }
    }
});


console.log(vueInstance)