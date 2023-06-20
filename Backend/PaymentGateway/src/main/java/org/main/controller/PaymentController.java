package org.main.controller;

import org.main.model.PaymentRequest;
import org.main.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.stripe.exception.StripeException;

@RestController
@RequestMapping("/payment")
public class PaymentController {

	@Autowired
	PaymentService service;

	@PostMapping
	public ResponseEntity<String> completePayment(@RequestBody PaymentRequest request) throws StripeException {
		String chargeId= service.charge(request);
		return chargeId!=null? new ResponseEntity<String>(chargeId,HttpStatus.OK):
			new ResponseEntity<String>("Please check the credit card details entered",HttpStatus.BAD_REQUEST);
	}

	@ExceptionHandler
	public String handleError(StripeException ex) {
		return ex.getMessage();
	}
}


//import com.stripe.Stripe;
//import com.stripe.exception.StripeException;
//import com.stripe.model.PaymentIntent;
//import com.stripe.param.PaymentIntentCreateParams;
//import org.main.model.PaymentRequest;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//public class PaymentController {
//
//	// Endpoint for creating a payment intent
//	@PostMapping("/create-payment-intent")
//	public ResponseEntity<?> createPaymentIntent(@RequestBody PaymentRequest paymentRequest) {
//		Stripe.apiKey = "YOUR_STRIPE_API_KEY";
//
//		try {
//			PaymentIntentCreateParams params = new PaymentIntentCreateParams.Builder()
//					.setAmount((long) paymentRequest.getAmount())
//					.setCurrency(paymentRequest.getCurrency())
//					.setDescription(paymentRequest.getDescription())
//					.build();
//
//			PaymentIntent paymentIntent = PaymentIntent.create(params);
//
//			// Return the client secret to the frontend
//			return ResponseEntity.ok(paymentIntent.getClientSecret());
//		} catch (StripeException e) {
//			// Handle any exceptions
//			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error creating payment intent");
//		}
//	}
//}

