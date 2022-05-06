# Back-End

## Criar um venv(um ambiente a parte) para as depêndencias do projeto (não obrigatório mas recomendado) (Ubuntu)

python3 -m venv "nome da venv"

exemplo:
python3 -m venv back-end

## Ativar venv (só necessário se a venv foi criada)(Ubuntu)

source "diretorio_da_venv"/bin/activate

diretorio_da_venv vai estar onde você executou o comando "python3 -m venv "nome da venv"

exemplo:
source back-end/bin/activate

## Instalar Django
pip install django

pip install djangorestframework

pip install django-cros-headers

## Iniciar o Servidor(API)
dentro da pasta back rodar o codigo:

python manage.py makemigrations jobs

python manage.py migrate

python manage.py runserver

## Criar um usuario pra page admin:

python manage.py createsuperuser

## Admin page (com o servidor iniciado)

http://127.0.0.1:8000/admin

email: admin@admin.com

senha: @@@@@@@@

## Depêndenias
asgiref==3.5.0

backports.zoneinfo==0.2.1

Django==4.0.4

django-cors-headers==3.11.0

djangorestframework==3.13.1

pytz==2022.1

sqlparse==0.4.2

## Documentação Django

https://docs.djangoproject.com/en/4.0/howto/

https://www.django-rest-framework.org/tutorial/quickstart/


=======


## Back-End errors solutions

manage.py migrate --run-syncdb

or 

python manage.py migrate --fake APPNAME zero
python manage.py migrate APPNAME
python manage.py makemigrations APPNAME
python manage.py migrate APPNAME

or

remove migrations
remove __pychache__
python manage.py makemigrations --empty alias
python manage.py makemigrations alias
python manage.py migrate alias zero
remove again migrations
remove again __pycache__
python manage.py makemigrations
python manage.py migrate alias zero

___

## Estrutura de tabelas criadas no back-end

As seguintes tabelas de banco de dados são criadas a partir da estrutura de back-end

| Course |        |
|--------|--------|
| *id* | name |

| Student | | | | | | | | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| *id* | name | last_name | email | course | password | cpf | phone_number |

| Enterprise | | | | | |
| --- | --- | --- | --- | --- | --- | 
| *id* | name | cnpj | password | email | phone_number |

| Job_Opportunity | | | | | |
| --- | --- | --- | --- | --- | --- | 
| *id* | title | description | salary | enterprise_id | workload |

| Interest |        |
| --- | --- |
| enterprise_id | user_id |
