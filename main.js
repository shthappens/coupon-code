
let discountDiv = document.getElementById('click-here');

  discountDiv.addEventListener('click', () => {
    let clickDiv = document.getElementById('coupon-code');
    clickDiv.innerHTML = '50% OFF - YOWZA!';
});
