let shareList = ["Apple", "Microsoft", "Tesla"];


function updatingStockList() {
    let shareListHTML = '';

    for(let i = 0; i < shareList.length; i++) { 
        const shareListItem = shareList[i];
        const html = `<p>${shareListItem}</p>`;
        shareListHTML += html;
    }


    document.querySelector('.js-chart').innerHTML = shareListHTML;
};
updatingStockList();

document.querySelector('.js-add-portfolio-button').addEventListener('click', () => {
    const stockFullName = document.querySelector('.js-stock-full-name').value;
    shareList.push(stockFullName);
    updatingStockList();
    // Log the shareList each time a new stock is added
});



