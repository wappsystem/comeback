(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "cart":     {url:"$H/m/cart.html",table:"comeback-cart"},
        "footer":   {url:"$H/0/footer.html", Table:"comeback-email-address"},
        "checkout1":{url:"$H/m/checkout1.html"},
        "checkout2":{url:"$H/m/checkout2.html"},
        "p2":       {url:"$H/m/page-02.html",router:1},
        "p3":       {url:"$H/m/page-03.html",router:1},
        "p4":       {url:"$H/m/page-04.html",router:1},
        "p5":       {url:"$H/m/page-05.html",router:1},
        "payment":  {url:"$H/stripe/index.html"},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
