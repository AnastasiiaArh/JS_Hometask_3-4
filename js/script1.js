var obj = {
      createElement: function (str) {
      return document.createElement (str);
    },
      addElement: function (parent, child) {
      parent.appendChild (child);
    },
      addClassName: function (element, name) {
      element.classList.add(name);
    },
      addInner: function (element, content) {
      element.innerHTML = content;
    },
      addquestion: function (element, content) {
      element.innerHTML = '<h4>' + content + '</h4>';
    },
      addInnerCheckBox: function (element, content) {
      element.innerHTML = '<label><input type="checkbox"><span>' + content + '</span></label>';
    },
      createCheckBox: function (content) {
      var checkbox = obj.createElement('li');
      obj.addClassName(checkbox,'checkbox');
      obj.addInnerCheckBox (checkbox, content);
      return checkbox;
    },
      createButton: function  (element,content) {
      element.innerHTML = element.innerHTML + '<button type="button" class="btn btn-default btn-lg">' + content + '</button>';
    }
}

var wrapper = obj.createElement ('div');
obj.addClassName (wrapper, "wrapper");
obj.addElement (document.body, wrapper)

var description = obj.createElement ('h3');
obj.addInner (description, 'Тест по программированию');
obj.addElement (wrapper, description);

var form = obj.createElement ('form');
obj.addElement (wrapper, form);

var orderList = obj.createElement ('ol');
obj.addElement (form, orderList);

var question1 = obj.createElement ('li');
var question2 = obj.createElement ('li');
var question3 = obj.createElement ('li');

obj.addClassName(question1,'question1');
obj.addClassName(question2,'question2');
obj.addClassName(question3,'question3');


obj.addquestion (question1, 'Вопрос №1');
obj.addquestion (question2, 'Вопрос №2');
obj.addquestion (question3, 'Вопрос №3');

obj.addElement (orderList, question1);
obj.addElement (orderList, question2);
obj.addElement (orderList, question3);

obj.addElement(question1,obj.createCheckBox('Вариант ответа №1'));
obj.addElement(question1,obj.createCheckBox('Вариант ответа №2'));
obj.addElement(question1,obj.createCheckBox('Вариант ответа №3'));

obj.addElement(question2,obj.createCheckBox('Вариант ответа №1'));
obj.addElement(question2,obj.createCheckBox('Вариант ответа №2'));
obj.addElement(question2,obj.createCheckBox('Вариант ответа №3'));

obj.addElement(question3,obj.createCheckBox('Вариант ответа №1'));
obj.addElement(question3,obj.createCheckBox('Вариант ответа №2'));
obj.addElement(question3,obj.createCheckBox('Вариант ответа №3'));

obj.createButton (form, 'Проверить мои результаты')

console.log (wrapper);
