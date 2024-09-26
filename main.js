var vueInstance = new Vue({
    el: '#app',
    data:{
        title: 'Áo thun nam thể thao hàng VNXK vải dày mịn - Vải Đốm',
        url:'https://www.lazada.vn/products/ao-thun-nam-the-thao-hang-vnxk-vai-day-min-vai-dom-i265780948-s382816279.html',
        target: 'blank',
        price: 10000
    },
    methods:{
        formatPrice() {
            var number = this.price;

            return new Intl.NumberFormat('de-DE', {style: 'currency',
            currency: 'VND'}).format(number);
        }
    }
});


console.log(vueInstance)