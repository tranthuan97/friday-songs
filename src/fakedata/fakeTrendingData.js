const fakeTrendingData = [
  {
    id: 1,
    name: 'Analogue Resin Strap',
    price: '$30.00',
    img: [
      require('assets/image/eberj4183019d5e_q1_2-0_540x.jpg').default,
      // require('assets/image/eberj4183019d5e_q3_2-0_540x.jpg').default
    ],
    products: [
      {
        id: 1, img: '', type: '', size: [
          { id: 1, sizeName: 'XS', isAvailable: true },
          { id: 2, sizeName: 'M', isAvailable: true },
          { id: 3, sizeName: 'L', isAvailable: true },
        ]
      }
    ],
    actionImg: '',
    discount: '',
    type: 'New',
    size: [
      { id: 1, sizeName: 'XS', isAvailable: true },
      { id: 2, sizeName: 'M', isAvailable: true },
      { id: 3, sizeName: 'L', isAvailable: true },
    ]
  },
  {
    id: 2,
    price: '$36.00',
    name: 'Ridley High Waist',
    img: [
      require('assets/image/nlota2087710739_q1_2-0_540x.jpg').default,
      require('assets/image/eberj4183019d5e_q3_2-0_540x.jpg').default
    ],
    actionImg: '',
    discount: '',
  },
  {
    id: 3,
    name: 'Blush Beanie',
    price: '$15.00',
    img: [
      require('assets/image/acndb3127517966_q3_2-0_540x.jpg').default,
      require('assets/image/eberj4183019d5e_q3_2-0_540x.jpg').default
    ],
    actionImg: '',
    discount: '$10.00',
    type: '-25%',
  },
  {
    id: 4,
    name: 'Cluse La Boheme Rose Gold',
    price: '$25.00 - $45.00',
    img: [
      require('assets/image/cinqa31079186d2_q1_2-0_540x.jpg').default,
      require('assets/image/eberj4183019d5e_q3_2-0_540x.jpg').default
    ],
    actionImg: '',
    discount: '',
  },
  {
    id: 5,
    name: 'Mercury Tee',
    price: '$60.00',
    img: [
      require('assets/image/famer2052212158_q1_2-1_80ef388a-668b-4cac-b04a-080e7e371c4b_540x.jpg').default,
      require('assets/image/eberj4183019d5e_q3_2-0_540x.jpg').default
    ],
    actionImg: '',
    discount: '',
  },
  {
    id: 6,
    name: 'La Bohème Rose Gold',
    price: '$60.00',
    img: [
      require('assets/image/p24-11_540x.jpg').default,
      require('assets/image/eberj4183019d5e_q3_2-0_540x.jpg').default
    ],
    actionImg: '',
    discount: '$40.00',
    type: '-17%'
  },
  {
    id: 7,
    name: 'Cream Women Pants',
    price: '$35.00',
    img: [
      require('assets/image/jbran4197212122_q3_2-0_955d01c7-4411-4d7e-8021-b147f1f29665_540x.jpg').default,
      require('assets/image/eberj4183019d5e_q3_2-0_540x.jpg').default
    ],
    actionImg: '',
    discount: '',
  },
  {
    id: 8,
    name: 'Black Mountain Hat',
    price: '$50.00',
    img: [
      require('assets/image/5-1_540x.png').default,
      require('assets/image/eberj4183019d5e_q3_2-0_540x.jpg').default
    ],
    actionImg: '',
    discount: '',
  },
]

export default fakeTrendingData;