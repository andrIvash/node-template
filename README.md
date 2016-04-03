# Шаблон для бекенд реализации сайта портфолио

Используемые технологии

  - Node.js v4.4.2 LTS
  - MongoDB v3.2
  - Express v4
  - Mongoose v4.4.10



### Версия
1.0.0

### Структура проекта

* [config] - Настройки для подключения к базе и работе сессий
* [error] - обработчик ошибки
* [libs] - работа со сторонними библиотеками
* [middleware] - кастомные middleware
* [models] - схемы MongoDB
* [routes] - описание маршрутов
* [styles] - css стили
* [templates] - шаблоны страниц
* app.js - главный файл приложения
* createdata.js - методы для работы с базой
* сreateuser.js - добавление пользователей в базу

### Установка

Необходимо установить и запустить [MongoDB](https://www.mongodb.org/), создать базу с именем test

```sh
$ git clone https://github.com/andrIvash/node-template.git nodeserver
$ cd nodeserver
$ npm i 

```

Cоздаем тестовых пользователей  (Ivan и Vasya)

```sh
$ node createuser.js
```

Запускаем сервер

```sh
$ npm start
```
