let lista = document.querySelector("#lista")
let pesquisa = document.querySelector('#pesquisa')
let categoriasSelect = document.querySelector('#categorias')

pesquisa.addEventListener('input', async () => {
  lista.innerHTML = ''
  let valor = pesquisa.value.trim() // Obter o valor de pesquisa e remover espaços extras
  console.log(valor)

  if (valor !== '') {
    await Dados(valor) // Chamar a função Dados apenas se houver um valor de pesquisa
  }
})

categoriasSelect.addEventListener('change', async () => {
  lista.innerHTML = ''
  await Dados(categoriasSelect.value)
})



const Dados = async (id) => {
  const url = `https://dummyjson.com/products/category/${id}`
  try {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    for (let i = 0; i < data.products.length; i++) {
      const li = document.createElement('li')
      const title = document.createTextNode(data.products[i].title)

      const img = document.createElement('img')
      img.src = data.products[i].images[0]
      img.alt = data.products[i].title

      li.appendChild(title)
      li.appendChild(img)
      lista.appendChild(li)
    }
  } catch (error) {
    console.error('Um erro ocorreu', error)
  }
}






