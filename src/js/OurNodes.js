import {AbtNode} from './AbtNode.js';
import {NewNode} from './NewNode.js';
let Data = document.querySelector('.data');

//Функция, отправленная в скрипт авторизаци, которая динамически, из массива, выводит доступные узлы на экран
export function OurNodes() {
    Data.innerHTML = `<ul class='Units'></ul>
    <button class="AddBtn">Добавить узел</button>
    <h3 class="Units_available">Доступные узлы</h3>`;

//Наш массив для примера
    let Nodes = [['NonActive', 'ПА Комплекс №1', '1', 'DataUnit', '192.168.0.1'],
      ['Active', 'Рабочий ПК', '2', 'PC', '255.255.254.0'],
      ['NonActive', 'ЦОД №1', '3', 'ЦОД', '109.94.72.38'],
      ['Active', 'ЦОД №2', '4', 'ЦОД', '191.255.0.0'],
      ['Active', 'ПА Комплекс №2', '5', 'DataUnit', '239.255.255.255'],
      ['NonActive', 'Домашний ПК', '6', 'PC', '172.16.13.0']];
      
    let Units = document.querySelector('.Units');
//Все узлы из массива друг за другом записываются в разметку
    for (let value of Nodes.values()) {
      Units.innerHTML += `<li class='Units_item Units_item-${value[2]}'>
      <img src="./Images/${value[3]}.png" alt="" class="Units_item_img">
      <a href="#" class="Units_item_abt">${value[1]}</a>
      </li>`;
    }
//Переход к окну информации о любом из узлов (по нажатию на узел)
    for(let i = 1; i<Nodes.length+1; i++) {
      document.querySelector(`.Units_item-${i}`).addEventListener('click', () => {
        AbtNode(Nodes, i);
      });
    }


 //Переход к окну добавления нового узла
    let AddBtn = document.querySelector('.AddBtn');
    AddBtn.addEventListener('click', function(){
        NewNode();
      });
    }