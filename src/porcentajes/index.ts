const addStylesTotal = (coupon: number, subtotal: number) => {
    if (!coupon || !subtotal) {
        PARAPH_TOTAL.classList.remove('color-white');
        PARAPH_TOTAL.innerText = 'Resultado';

        return;
    }
    PARAPH_TOTAL.classList.add('color-white');
};

const printDiscount = () => {
    const SUBTOTAL = parseFloat(INPUT_SUBTOTAL.value);
    const IS_TO_STRING = INPUT_COUPON.value.substring(0, 2) === 'TO';
    const COUPON = IS_TO_STRING
        ? parseInt(INPUT_COUPON.value.substring(2))
        : parseFloat(INPUT_COUPON.value);
    const TOTAL = SUBTOTAL * (100 - COUPON) / 100;

    if (COUPON && SUBTOTAL)
        PARAPH_TOTAL.innerText = `$${TOTAL.toString()}`;
    addStylesTotal(COUPON, SUBTOTAL);
};

const addStylesCoupons = (inputsCoupons: NodeListOf<HTMLInputElement>, couponSelected: HTMLInputElement) => {
    for (let i = 0; i < inputsCoupons.length; i++) {
        const NEXT_INPUT = inputsCoupons[i];

        if (NEXT_INPUT.checked && NEXT_INPUT.id !== couponSelected.id) {
            const PARAPH = document.querySelector(`#${NEXT_INPUT.id} + .buttons-cupon`) as HTMLParagraphElement;

            PARAPH.classList.remove('buttons-cupon--checked');
            NEXT_INPUT.checked = false;
            break;
        }
    }
    (couponSelected.checked)
        ? couponSelected.classList.add('buttons-cupon--checked')
        : couponSelected.classList.remove('buttons-cupon--checked');
};

const printDiscountWithCoupon = (event: Event) => {
    const COUPON_SELECTED = event.target as HTMLInputElement;
    const INPUTS_COUPONS: NodeListOf<HTMLInputElement> = document.querySelectorAll('.cupons__buttons-input');

    addStylesCoupons(INPUTS_COUPONS, COUPON_SELECTED);
    (COUPON_SELECTED.checked)
        ? INPUT_COUPON.value = COUPON_SELECTED.value
        : INPUT_COUPON.value = '';
    printDiscount();
};

const INPUT_SUBTOTAL = document.querySelector('#subtotal-input') as HTMLInputElement;
const INPUT_COUPON = document.querySelector('#cupon-input') as HTMLInputElement;
const PARAPH_TOTAL = document.querySelector('#total') as HTMLParagraphElement;
const INPUTS_COUPONS: NodeListOf<HTMLInputElement> = document.querySelectorAll('.cupons__buttons-input');

INPUT_COUPON.addEventListener('keyup', printDiscount);
INPUT_SUBTOTAL.addEventListener('keyup', printDiscount);
INPUTS_COUPONS.forEach( (coupon) => coupon.addEventListener('change', printDiscountWithCoupon));
