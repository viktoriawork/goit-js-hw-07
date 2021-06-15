const categoriesNode = document.getElementById("categories");
const items = categoriesNode.getElementsByClassName("item");
console.log(`В списке ${items.length} категории.`);
for( let item of items) {
    console.log(`Категория: ${item.getElementsByTagName("h2").item(0).textContent}`);
    console.log(`Количество вложенных элементов: ${item.getElementsByTagName("li").length}`);
}
