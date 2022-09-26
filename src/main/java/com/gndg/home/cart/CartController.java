package com.gndg.home.cart;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("cart/*")
public class CartController {
	
	@Autowired
	private CartService cartService;
	
	@RequestMapping(value="cart")
	public String cart()throws Exception{
		return "/cart/cart";
	}

}
