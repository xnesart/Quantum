// Нашли контейнер с селектом
const selectElement = document.querySelector("[data-select]");
const selectReal = document.querySelector("#selectReal");
// Нашли реальный селект
// прослушиваем клик внутри контейнера с селектом
selectElement.addEventListener("click", function(event){
    // Проверка, где произошел клик
    // Event.target показывает, на каком именно элементе произошел клик
    console.log(event);
    console.log(event.target);
    // Если кликнули внутри дропдауна
    if (event.target.hasAttribute("data-select-item")) {
        // Получаем значение этого элемента из атрибута data-select-item у этого элемента
        const itemTitle = event.target.getAttribute("data-select-item");
        // Находим заголовок нашего главного элемента и меняем его текст на значение из выбранного пункта
        console.log(itemTitle);
        event.target.closest("[data-select]").querySelector("[data-select-title]").textContent = itemTitle;
        selectReal.value = itemTitle;

    } else {
        this.querySelector(".header-select-dropdown").classList.toggle("hidden");
        this.querySelector(".header-categories-menu").classList.toggle("hidden");
    }
})
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("hidden");
}
function myFunctionHelp() {
    document.getElementById("myDropdownHelp").classList.toggle("hidden");
}
function myFunctionUSD() {
    document.getElementById("myDropdownUSD").classList.toggle("hidden");
}
function myFunctionLanguage() {
    document.getElementById("myDropdownLanguage").classList.toggle("hidden");
}