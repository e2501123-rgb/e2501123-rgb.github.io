let wishlist = [];

function addWishlist(itemName, floor, row) {
    let exists = wishlist.some(item => item.name === itemName);

    if (exists) {
        alert("「" + itemName + "」はすでにリストに追加されています！");
        return;
    }

    wishlist.push({
        name: itemName,
        floor: floor,
        row: row
    });

    wishlist.sort((a, b) => a.floor - b.floor);

    updateWishlistDisplay();
}

function updateWishlistDisplay() {
    const listElement = document.querySelector("#wishlist_display");
    if (!listElement) return;

    if (wishlist.length === 0) {
        listElement.innerHTML = "<li>（まだ選択されていません）</li>";
        return;
    }

    let htmlContent = "";
    for (let i = 0; i < wishlist.length; i++) {
        let item = wishlist[i];
        htmlContent += "<li><strong>【" + item.floor + "階 / " + item.row + "】</strong> " + item.name + "</li>";
    }

    listElement.innerHTML = htmlContent;
}

function clearWishlist() {
    wishlist = [];
    updateWishlistDisplay();
}