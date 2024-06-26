let shareList = [{
    stockId: "AAPL",
    stockFullName:"Apple",
    shareAmount: 1,
    pricePerShare: 207,
    purchaseDate: "2021-01-01"
}, 
{
    stockId:"MSFT",
    stockFullName:"Microsoft",
    shareAmount: 1,
    pricePerShare: 450,
    purchaseDate: "2021-01-01"
}, 
{   
    stockId: "TSLA",
    stockFullName:"Tesla",
    shareAmount: 1,
    pricePerShare: 184,
    purchaseDate: "2021-01-01"
}]

function updatingStockList() {
    let shareListHTML = '';

    for(let i = 0; i < shareList.length; i++) { 
        const shareListItem = shareList[i];
        const html = `
        <div>${shareListItem.stockId}</div> 
        <div>${shareListItem.stockFullName}</div> 
        <div>${shareListItem.shareAmount}</div> 
        <div>${shareListItem.pricePerShare}</div> 
        <div>${shareListItem.purchaseDate}</div>
        <button class="js-stock-delete-button" onclick = "shareList.splice(${i},1);updatingStockList();">Delete</button>`;
        shareListHTML += html;
    }


    document.querySelector('.js-chart').innerHTML = shareListHTML;
};
updatingStockList();

// Add stock to current list
document.querySelector('.js-add-portfolio-button').addEventListener('click', () => {
    const stockId = document.querySelector('.js-stock-id').value;
    const stockFullName = document.querySelector('.js-stock-full-name').value;
    const shareAmount = parseFloat(document.querySelector('.js-stock-share-amount').value);
    const pricePerShare = parseFloat(document.querySelector('.js-stock-price-per-share').value);
    const purchaseDate = document.querySelector('.js-stock-purchase-date').value;

    const stockItem = {
        stockId: stockId,
        stockFullName: stockFullName,
        shareAmount: shareAmount,
        pricePerShare: pricePerShare,
        purchaseDate: purchaseDate
    };

    console.log(stockItem);

    // Add the new stock item to the list and update the display
    shareList.push(stockItem);
    updatingStockList();
});

const apiKey = 'optPy7m1I2kXjJRGA5pR4CX9J3OXDQN5';


async function fetchStockPrice(date) {
    const url = `https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/${date}?adjusted=true&apiKey=${apiKey}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.results && data.results.length > 0) {
            return data.results;
        } else {
            throw new Error('Failed to fetch stock price');
        }
    } catch (error) {
        console.error('Error fetching stock price:', error);
        return null;
    }
}

// Example usage:
fetchStockPrice('2023-01-09').then(data => {
    if (data !== null) {
        console.log('The latest aggregated stock data:', data);
    }
});
