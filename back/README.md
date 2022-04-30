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

## Iniciar o Servidor(API)
dentro da pasta back rodar o codigo:
python manage.py runserver

## Admin page (com o servidor iniciado)
http://127.0.0.1:8000/admin

email: admin@admin.com

senha: @@@@@@@@

## Depêndenias
python3-venv

django

## Documentação Django

https://docs.djangoproject.com/en/4.0/howto/

https://www.django-rest-framework.org/tutorial/quickstart/


=======

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
