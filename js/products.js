window.Shop = {

    apiUrl: "http://localhost: 8082",

    getProducts:function (){
        $.ajax({
            url: Shop.apiUrl,
            method: "GET"
        }).done(function(response){
            console.log(response);
            //reload items table

            Shop.displayProducts(response)

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
                            <a class="add_to_cart_button" data-quantity="1" data-product_sku="" data-product_id="70" rel="nofollow" href="/canvas/shop/?add-to-cart=70">Add to cart</a>
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


};

Shop.getProducts();