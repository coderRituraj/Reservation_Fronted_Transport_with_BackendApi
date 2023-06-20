package org.main.service;

import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentMethod;
import org.main.model.PaymentRequest;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;


@Service
public class PaymentService {


    public String charge(PaymentRequest chargeRequest) throws StripeException {
        Stripe.apiKey = "sk_test_tR3PYbcVNZZ796tH88S4VQ2u";
        Map<String, Object> card = new HashMap<>();
        card.put("number", "4242424242424242");
        card.put("exp_month", 8);
        card.put("exp_year", 2024);
        card.put("cvc", "314");
        Map<String, Object> params = new HashMap<>();
        params.put("type", "card");
        params.put("card", card);

        PaymentMethod paymentMethod =
                PaymentMethod.create(params);

        // for admin use will implement in admin page further
        // PaymentMethod.retrieve("pm_1NJ23P2eZvKYlo2C0zaHa6PI");
        return paymentMethod.getId();

    }


}
