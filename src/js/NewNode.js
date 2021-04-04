let Data = document.querySelector('.data');
//Функция открытия окна для создания нового узла. Здесь ничего динамического, хотя я думал,
//как сделать "переходящий" массив, чтобы не делать бэкенд.
export function NewNode() {
    Data.innerHTML = `<div class="NewNode">
            <h1 class="NewNode_text">Добавление нового узла</h1>
            <h3 class="NewNode_type">Тип узла
                <span class="NewNode_dropdown">
                <select class="NewNode_dropdown_select">
                    <option>DataUnit</option>
                    <option>PC</option>  
                    <option>ЦОД</option>
                </select>
            </span></h3>
            <h3 class="NewNode_name">Наименование узла<input class="NewNode_address_input" type="text"></h3>
            <h3 class="NewNode_address">Адрес узла<input class="NewNode_address_input" type="text"></h3>
            <button class="NewNode_add">Добавить</button>
          </div>`;
}