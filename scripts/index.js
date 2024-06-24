let shareList = [{
    stockId: "AAPL",
    stockFullName:"Apple",
    shareAmount: 1,
    pricePerShare: 207
}, 
{
    stockId:"MSFT",
    stockFullName:"Microsoft",
    shareAmount: 1,
    pricePerShare: 450
}, 
{   
    stockId: "TSLA",
    stockFullName:"Tesla",
    shareAmount: 1,
    pricePerShare: 184
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
        <button onclick = "shareList.splice(${i},1);updatingStockList();">Delete</button>`;
        shareListHTML += html;
    }


    document.querySelector('.js-chart').innerHTML = shareListHTML;
};
updatingStockList();

// add stock to current list
document.querySelector('.js-add-portfolio-button').addEventListener('click', () => {
    const stockFullName = document.querySelector('.js-stock-full-name').value;
    shareList.stockFullName.push(stockFullName);
    updatingStockList();
    // Log the shareList each time a new stock is added
});







