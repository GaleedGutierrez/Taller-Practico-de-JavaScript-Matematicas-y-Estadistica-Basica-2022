interface coupon {
    name: string;
    discount: number;
}

const printDiscount = () => {
    const SUBTOTAL = parseFloat(INPUT_SUBTOTAL.value);
    const CUPON = parseFloat(INPUT_COUPON.value);
    const TOTAL = SUBTOTAL * (100 - CUPON) / 100;
    PARAPH_TOTAL.innerText = `$${TOTAL.toString()}`;

    if (!CUPON && !SUBTOTAL) {
        PARAPH_TOTAL.classList.remove('color-white');
        PARAPH_TOTAL.innerText = 'Resultado';
        return;
    }
    PARAPH_TOTAL.classList.add('color-white');
};

const discountWithCoupon = (event: Event) => {
    const COUPON = event.srcElement as HTMLInputElement;
    const DISCOUNT = parseInt(COUPON.value.substring(2));
    const INPUTS_PARAPH_COUPON = document.querySelector(`#${COUPON.id} + .buttons-cupon`) as HTMLParagraphElement;
    INPUTS_PARAPH_COUPON.classList.toggle('buttons-cupon--checked');
    INPUT_COUPON.value = COUPON.value;
    // else {
    //     PARAPH_TOTAL.classList.remove('color-white');
    //     PARAPH_TOTAL.innerText = 'Resultado';
    //     INPUT_COUPON.value = '';
    // }
};


const INPUT_SUBTOTAL = document.querySelector('#subtotal-input') as HTMLInputElement;
const INPUT_COUPON = document.querySelector('#cupon-input') as HTMLInputElement;
const PARAPH_TOTAL = document.querySelector('#total') as HTMLParagraphElement;
const INPUTS_COUPONS: NodeListOf<HTMLInputElement> = document.querySelectorAll('.cupons__buttons-input');
// const INPUTS_PARAPH_COUPONS: NodeListOf<HTMLParagraphElement> = document.querySelectorAll('.buttons-cupon');
INPUT_COUPON.addEventListener('keyup', printDiscount);
// console.log(INPUTS_PARAPH_COUPONS);
INPUTS_COUPONS.forEach( (coupon) => coupon.addEventListener('change', discountWithCoupon));
