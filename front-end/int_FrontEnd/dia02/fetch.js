fetch("https://api.goprogram.ai/inspiration")
  .then((response) => response.json())
  .then((data) => console.log(`"${data.quote}" | ${data.author}`));



// Requisição GET sem nenhuma configuração - recupera as informações de um produto.
fetch('https://dummyjson.com/products/27')
.then((response) => response.json())
.then((data) => console.log('GET sem headers', data));

// Requisição POST com headers e body - adiciona um produto num carrinho de compras.
fetch('https://dummyjson.com/carts/add', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({
  userId: 1,
  products: [
    {
      id: 27,
      quantity: 1,
    },
  ],
}),
})
.then((response) => response.json())
.then((data) => console.log('POST com headers e body', data));

/*
Não vai retornar nada pq essa API não está funcionando, mas se estivesse os retornos seriam, respectivamente:

GET sem headers
{id: 27, title: "Flying Wooden Bird", description: "Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm", price: 51, …}
    brand: "Flying Wooden"
    category: "home-decoration"
    description: "Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm"
    discountPercentage: 15.58
    id: 27
    images: Array[5]
    price: 51
    rating: 4.41
    stock: 17
    thumbnail: "https://i.dummyjson.com/data/products/27/thumbnail.webp"
    title: "Flying Wooden Bird"
    <prototype>: Object



POST com headers e body
{id: 21, products: Array[1], total: 51, discountedTotal: 43, …}
    discountedTotal: 43
    id: 21
    products: Array[1]
    total: 51
    totalProducts: 1
    totalQuantity: 1
    userId: 1
    <prototype>: Object
*/