export default function initBitcoin() {

}

fetch('https://blockchain.info/ticker')
.then(response => response.json())
.then(json =>{
    const btcBitcoin = document.querySelector('.btc-preco');
    btcPreco.innerHTML = btcBitcoin.BRL.sell;
    console.log(json.BRL.sell);
})