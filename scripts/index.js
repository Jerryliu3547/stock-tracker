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