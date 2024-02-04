const items = Array.from(document.querySelectorAll(".accordion_item")) //считать все элементы аккордиона в массив

items.forEach((item)=>{
    item.addEventListener("click", itemHandler); //при нажатии вызываем функцию
})

function itemHandler(e){
    e.preventDefault(); //сбросить стандартное поведение
    let currentItem = e.target.closest(".accordion_item"); //определяем текущий итем
    let currentContent = e.target.nextElementSibling; //находим скрытый контент
    currentItem.classList.toggle("active"); //присваиваем ему активный класс
}