const allItemsRef = document.querySelectorAll('li.item');
console.log(`Number of categories: ${allItemsRef.length}`);

allItemsRef.forEach(titleAndAmount => {
    console.log(`Category: ${titleAndAmount.firstElementChild.textContent}`);
    console.log(`Elements: ${titleAndAmount.lastElementChild.querySelectorAll("li").length}`);
});



