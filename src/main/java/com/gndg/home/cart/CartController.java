package com.gndg.home.cart;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.gndg.home.member.MemberDTO;

@Controller
@RequestMapping("/cart/*")
public class CartController {
	
	@Autowired
	private CartService cartService;
	
//	@RequestMapping(value="cart")
//	public ModelAndView getCartList(MemberDTO memberDTO,HttpSession session)throws Exception{
//		ModelAndView mv = new ModelAndView();
//		System.out.println("박한별 멍청이");
//		System.out.println(memberDTO.getUser_id());
//		List<CartDTO> al = cartService.getCartList(memberDTO);
//		session.getAttribute("member");
//		mv.addObject("cartList", al);
//		mv.setViewName("/cart/cart");
//		
//		return mv;
//	}
	//카트 추가  AJAX처리 해줘야함
	@RequestMapping(value="AddCart")
	public int setAddCart(CartDTO cartDTO, HttpSession session)throws Exception{
		MemberDTO member =  (MemberDTO)session.getAttribute("member");
		cartDTO.setUser_id(member.getUser_id());
		int result = cartService.setAddCart(cartDTO);
		
		return result;
	}
	
	@RequestMapping(value="cart")
	public ModelAndView getItemList(CartDTO cartDTO,HttpSession session)throws Exception{
		ModelAndView mv = new ModelAndView();
		MemberDTO member  = (MemberDTO)session.getAttribute("member");
		cartDTO.setUser_id(member.getUser_id());
		System.out.println("아이디 이씨=="+cartDTO.getUser_id());
		List<CartDTO> cart = cartService.getItemList(cartDTO);
		Long result = cartService.getCountCart(cartDTO);
		
		mv.addObject("cart", cart);
		mv.addObject("result", result);
		mv.setViewName("/cart/cart");
		
		return mv;
	}
	//카트 수량 수정 AJAX처리 해줘야 함
	@RequestMapping(value="UpdateCart", method = RequestMethod.POST)
	@ResponseBody
	public int setUpdateCart(CartDTO cartDTO)throws Exception{
		int result = cartService.setUpdateCart(cartDTO);
		
		return result;
	}
	
	
	//카트 삭제 AJAX처리 해줘야함
	@RequestMapping(value="DeleteCart", method = RequestMethod.POST)
	@ResponseBody
	public int setDeleteCart(CartDTO cartDTO)throws Exception{
		int result = cartService.setDeleteCart(cartDTO);
		
		return result;
	}
	
	

}
