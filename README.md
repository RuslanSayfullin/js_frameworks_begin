_разработка Sayfullin R.R.
Инструкция актуальна для Linux-систем.

Используемые технологии: python~=3.11 Django~=5.0 PostgreSQL

Скопируйте репозиторий с помощью команды: 
    $ git clone https://github.com/RuslanSayfullin/todoapp.git 

Перейдите в основную директорию с помощью команды:
    $ cd todoapp

Создать и активировать виртуальное окружение:
    $ python3 -m venv venv
    $ source venv/bin/activate
Установить зависимости:
    $ pip install -r requirements.txt
$ Выход:
    $ deactivate


Создать файл миграции с помощью команды:
    $ python3 manage.py makemigrations
Создать реальную базу данных:
    $ python3 manage.py migrate
Создать суперпользователя:
    $ python3 manage.py createsuperuser
Запустить проект:
    $ python3 manage.py runserver