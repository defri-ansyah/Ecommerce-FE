const initialStateData = {
  data: [
    {
      id: 1,
      product_name: 'Pakaian Anak Lucu',
      price: '50.350',
      image: 'http://localhost:3000/img/item1.jpg',
      star: 4,
      total_review: 105,
      discount_percentage: 47,
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
      ],
      store: {
        id: 1,
        name: 'Toko Itu',
        area: 'Bandar Lampung'
      },
      qty: 1
    },
    {
      id: 2,
      product_name: 'Pakaian Anak Bagus',
      price: '70.100',
      image: 'http://localhost:3000/img/item2.jpg',
      star: 4,
      total_review: 90,
      discount_percentage: 47,
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
      ],
      store: {
        id: 2,
        name: 'Tika Shoes',
        area: 'Jakarta Utara'
      },
      qty: 1
    },
    {
      id: 3,
      product_name: 'Pakaian Kesayangan',
      price: '65.800',
      image: 'http://localhost:3000/img/item3.jpg',
      star: 4,
      total_review: 74,
      discount_percentage: 47,
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
      ],
      store: {
        id: 1,
        name: 'Toko Itu',
        area: 'Bandar Lampung'
      },
      qty: 1
    },
    {
      id: 4,
      product_name: 'Pakaian Anak Local',
      price: '71.000',
      image: 'http://localhost:3000/img/item4.jpg',
      star: 4,
      total_review: 14,
      discount_percentage: 47,
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
      ],
      store: {
        id: 2,
        name: 'Tika Shoes',
        area: 'Jakarta Utara'
      },
      qty: 1
    },
    {
      id: 5,
      product_name: 'Pakaian Anak Bunda',
      price: '55.000',
      image: 'http://localhost:3000/img/item5.jpg',
      star: 4.0,
      total_review: 30,
      discount_percentage: 47,
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
      ],
      store: {
        id: 2,
        name: 'Tika Shoes',
        area: 'Jakarta Utara'
      },
      qty: 1
    },
    {
      id: 6,
      product_name: 'Pakaian Anak Import',
      price: '58.500',
      image: 'http://localhost:3000/img/item6.jpg',
      star: 4,
      total_review: 36,
      discount_percentage: 47,
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
      ],
      store: {
        id: 1,
        name: 'Toko Itu',
        area: 'Bandar Lampung'
      },
      qty: 1
    }
  ],
  chart: {
    '2': {
      total: 125100,
      store: {
        id: 2,
        name: 'Tika Shoes',
        area: 'Jakarta Utara'
      },
      products: [
        {
          id: 5,
          product_name: 'Pakaian Anak Bunda',
          price: '55.000',
          image: 'http://localhost:3000/img/item5.jpg',
          star: 4.0,
          total_review: 30,
          discount_percentage: 47,
          color: 'Hitam',
          size: 'L',
          qty: 1
        },
        {
          id: 2,
          product_name: 'Pakaian Anak Bagus',
          price: '70.100',
          image: 'http://localhost:3000/img/item2.jpg',
          star: 4,
          total_review: 90,
          discount_percentage: 47,
          area: 'Jakarta Selatan',
          color: 'Hitam',
          size: 'L',
          qty: 1
        }
      ]
    },
    '1': {
      total: 50350,
      store: {
        id: 1,
        name: 'Toko itu',
        area: 'Bandar Lampung'
      },
      products: [
        {
          id: 1,
          product_name: 'Pakaian Anak Lucu',
          price: '50.350',
          image: 'http://localhost:3000/img/item1.jpg',
          star: 4,
          total_review: 105,
          discount_percentage: 47,
          area: 'Jakarta Selatan',
          color: 'Hitam',
          size: 'L',
          qty: 1
        }
      ]
    }
  }
}
const dataReducer = (state = initialStateData, action) => {
  if (action.type === 'ADD_CHART') {
    const payload = action.payload
    if (typeof state.chart[payload.store.id] === 'undefined') {
      state.chart[payload.store.id] = { store: payload.store }
      state.chart[payload.store.id].products = [payload]
      state.chart[payload.store.id].total += Number(payload.price.replace('.', ''))
    } else {
      state.chart[payload.store.id].products.push(payload)
      state.chart[payload.store.id].total += Number(payload.price.replace('.', ''))
    }
    return {
      ...state
    }
  } else {
    return state
  }
}

export default dataReducer