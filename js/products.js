window.Shop = {

    apiUrl: "http://localhost:8082",

    addProductToCart: function (productId){
        var data = {
            'customerId': 1,
            'productsIds': [productId]
        };

        $.ajax({
            url: Shop.apiUrl +"/carts",
            method: "POST",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(data)
        }).done(function(response){
            console.log(response);
            //reload items table

        });

    },

    getProducts:function (){
        $.ajax({
            url: Shop.apiUrl +"/products",
            method: "GET"
        }).done(function(response){
            console.log(response);
            //reload items table

            Shop.displayProducts(response.content)

        });


    },

    getProductDiv: function(product){


        return `<div class="col-md-3 col-sm-6">
                    <div class="single-shop-product">
                        <div class="product-upper">
                            <img src="img/product-2.jpg" alt="">
                        </div>
                        <h2><a href="">${product.name}</a></h2>
                        <div class="product-carousel-price">
                            <ins>${product.price}</ins>
                        </div>  
                        
                        <div class="product-option-shop">
                            <a class="add_to_cart_button" data-quantity="1" data-product_sku="" data-product_id="${product.id}" rel="nofollow" href="/ustora/cart.html">Add to cart</a>
                        </div>                       
                    </div>
                </div>`
    },

    displayProducts: function(products){
        console.log('Displaying products');
        var divs = '';
        products.forEach(product => divs += Shop.getProductDiv(product) );

        console.log('divs');

        $('#products-row').html(divs);

    },

    bindEvents: function () {
        $('#products-row').delegate('.add_to_cart_button','click',function(){
            var id = $(this).data('product_id');
            Shop.addProductToCart(id);
        });

    }


};

Shop.getProducts();
Shop.bindEvents();