const initialStateData = {
    data: [
      {
        id: 1,
        product_name: 'Pakaian Anak Lucu',
        price: 50350,
        image: 'http://localhost:3000/img/12.jpg',
        star: 4,
        total_review: 14,
        discount_percentage: 47,
        discount_amount: 95000,
        area: 'Jakarta Selatan',
        colors: [
          'Hijau',
          'Abu-abu',
          'Biru',
          'Hitam'
        ],
        sizes: [
          'L',
          'XL',
          'XXL'
        ]
      },
      {
        id: 2,
        product_name: 'Pakaian Anak Lucu 1',
        price: 50350,
        image: 'http://localhost:3000/img/12.jpg',
        star: 4,
        total_review: 14,
        discount_percentage: 47,
        discount_amount: 95000,
        area: 'Jakarta Selatan',
        colors: [
          'Hijau',
          'Abu-abu',
          'Biru',
          'Hitam'
        ],
        sizes: [
          'L',
          'XL',
          'XXL'
        ]
      },
      {
        id: 3,
        product_name: 'Pakaian Anak Lucu',
        price: 50350,
        image: 'http://localhost:3000/img/12.jpg',
        star: 4,
        total_review: 14,
        discount_percentage: 47,
        discount_amount: 95000,
        area: 'Jakarta Selatan',
        colors: [
          'Hijau',
          'Abu-abu',
          'Biru',
          'Hitam'
        ],
        sizes: [
          'L',
          'XL',
          'XXL'
        ]
      },
      {
        id: 4,
        product_name: 'Pakaian Anak Lucu',
        price: 50350,
        image: 'http://localhost:3000/img/12.jpg',
        star: 4,
        total_review: 14,
        discount_percentage: 47,
        discount_amount: 95000,
        area: 'Jakarta Selatan',
        colors: [
          'Hijau',
          'Abu-abu',
          'Biru',
          'Hitam'
        ],
        sizes: [
          'L',
          'XL',
          'XXL'
        ]
      },
      {
        id: 5,
        product_name: 'Pakaian Anak Lucu',
        price: 50350,
        image: 'http://localhost:3000/img/12.jpg',
        star: 4.0,
        total_review: 14,
        discount_percentage: 47,
        discount_amount: 95000,
        area: 'Jakarta Selatan',
        colors: [
          'Hijau',
          'Abu-abu',
          'Biru',
          'Hitam'
        ],
        sizes: [
          'L',
          'XL',
          'XXL'
        ]
      },
      {
        id: 6,
        product_name: 'Pakaian Anak Lucu',
        price: 50350,
        image: 'http://localhost:3000/img/12.jpg',
        star: 4,
        total_review: 14,
        discount_percentage: 47,
        discount_amount: 95000,
        area: 'Jakarta Selatan',
        colors: [
          'Hijau',
          'Abu-abu',
          'Biru',
          'Hitam'
        ],
        sizes: [
          'L',
          'XL',
          'XXL'
        ]
      }
    ],
  }
  const dataReducer = (state = initialStateData, action) => {
    if (action.type === 'SET_DATA') {
      return {
        ...state,
        data: action.payload
      }
    } else {
      return state
    }
  }

  export default dataReducer