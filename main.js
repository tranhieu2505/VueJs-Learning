var vueInstance = new Vue({
    el: '#app',
    data:{
        title: 'Áo thun nam thể thao hàng VNXK vải dày mịn - Vải Đốm',
        url:'https://www.lazada.vn/products/ao-thun-nam-the-thao-hang-vnxk-vai-day-min-vai-dom-i265780948-s382816279.html',
        target: 'blank',
        price: 20000,
        sale: 0.1,
        selectedProduct: 1,
        cartNumber: 1,
        listProductDetail: [
            {
                image: './images/blue.jpg',
                quantity: 8,
                textColor: 'Blue'
            },
            {
                image: './images/black.jpg',
                quantity: 10,
                textColor: 'Black'
            },
            {
                image: './images/red.jpg',
                quantity: 0,
                textColor: 'Red'
            },
        ],
        listDesc: [
            'Chất liệu: polyester và thun',
            'Thoát mồ hôi tốt',
            'Áo thun cổ tròn thể thao Hiye chuyên được may từ chất liệu nilon thoáng mát',
            'Kết hợp thêm sợi thun tạo độ co giãn giúp người tiêu dùng thoải mái khi mặc',
            'Chất liệu: polyester và thun'
        ],
        description: '<p>M&ocirc; tả: &Aacute;o thun cổ tr&ograve;n thể thao Hiye chuy&ecirc;n được may từ chất liệu nilon tho&aacute;ng m&aacute;t v&agrave; tho&aacute;t mồ h&ocirc;i tốt, kết hợp th&ecirc;m sợi thun tạo độ co gi&atilde;n gi&uacute;p người ti&ecirc;u d&ugrave;ng thoải m&aacute;i khi mặc</p> ',
        testDescription: `<p>Test hjskhfk h</p>

        <p><strong><span style="background-color:#8e44ad">fhsdjkfhsk&nbsp; hsdjkfk&nbsp;</span></strong></p>`

    },

    methods:{
        handleClickColor(e, index) {
            this.selectedProduct = index;
        },
        handleAddToCart(e) {
            if(this.cartNumber + 1 > this.getProduct.quantity) {
                alert('Quantity is not enough.')
            } else {
                this.cartNumber = this.cartNumber  + 1;
            }
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