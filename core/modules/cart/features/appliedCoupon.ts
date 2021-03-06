import AppliedCoupon from '@vue-storefront/store/types/cart/AppliedCoupon'
/**
 * Functionality for returning currently applied coupon code and associated discount
 *
 * #### Computed properties
 * - **`appliedCoupon`** return currently applied coupon code and associated discount.
 *
 * Part of [Cart API Module](https://github.com/DivanteLtd/vue-storefront/tree/master/doc/api-modules)
 */
export const appliedCoupon = {
  computed: {
    appliedCoupon () : AppliedCoupon | false {
      if (!(this.$store.state.cart.platformTotals && this.$store.state.cart.platformTotals.hasOwnProperty('coupon_code'))) {
        return false
      }
      return {
        code: this.$store.state.cart.platformTotals.coupon_code,
        discount: this.$store.state.cart.platformTotals.discount_amount
      }
    }
  }
}
