[comment]: <> (# Крысиные делишки)

## Дизайн

[**Палетта ВК цветов**](https://www.figma.com/file/XfiURcTq7Y8zUxYGhj5wEm/VKUI-Color-Palette-Community?node-id=0%3A1)

[**Стайл гайд**](https://vkcom.github.io/VKUI)

[**VKUI Web library**](https://www.figma.com/file/MYaVdJrPm1slY8VHiZH5o6/VKUI-Web-Library-·%C2%A0Beta-(Community)?node-id=146%3A0)

## Фронт
[**Дизайн-макет**](https://www.figma.com/file/EOlHPaVTie9yeq5MQuS9s8/Шаблоны?node-id=0%3A1)

[comment]: <> ([**Complete CSS Grid guide**]&#40;https://css-tricks.com/snippets/css/complete-guide-grid/&#41;)

[comment]: <> ([**Complete CSS Flexbox guide**]&#40;https://css-tricks.com/snippets/css/a-guide-to-flexbox/&#41;)

[comment]: <> (## Бэк)

[comment]: <> ([**Insomnia**]&#40;https://insomnia.rest/download&#41; - REST-клиент для запросов.)

[comment]: <> (## Всякое)

[comment]: <> ([**lodash**]&#40;https://lodash.com/&#41; - *Дополнение* к стандартной библиотеке, чтобы не писать что-то вроде функции `capitalize`.)

## Зависимости:

###Node.js
Необходимо скачать [LTS версию Node.js](https://nodejs.org/en/) с оф. сайта и установить ее. 

###SQLite3
Удобнее всего устанавливать SQLite3 через пакетный мeнеджeр Chocolater -- для этого следует:
1. Открыть PowerShell от имени администратора;
2. Выполнить следующую команду: `Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))`;
3. Посредством Chocolatey установить SQLite3, используя команду `choco install sqlite`.

## Запуск проекта

1. Перейти в папку проекта
2. Если у вас UNIX-система, выполнить `run.sh`
4. В ином случае, перейти в папку `front`, выполнить

```shell
npm i
npm run build
```

4. Перейти в папку уровнем выше `back` и выполнить

```shell
npm i
npm start
```
