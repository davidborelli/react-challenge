# Desafio React para Front-end

### Apresentação do Projeto

Desenvolvido em NextJS e JavaScript, o projeto foi desenvolvido com um design clean, visando ser de fácil utilização para usuário final.


### Recursos disponíveis

#### Funcionalidades

1- Página principal

- Campo de busca, onde pode ser feitas consultas de publicações;
- Botão ***Pesquisar todos*** faz a busca do que foi digitado no campo de busca, caso o mesmo esteja vazio, traz todos os resultados;
- Botão ***Mais relevantes*** faz a busca do que foi digitado no campo de busca, porém traz no topo os resultados mais relevantes;
- Ao fazer uma busca qualquer, enquando a chamada da API não retorna, é apresentado um modal, informando que o cliente aguarde;
- Com o campo de busca preenchido é possível fazer a pesquisa apenas pressionando o botão "Enter", a pesquisa será feita utilizando a chamada do botão ***Pesquisar todos***;
- Após fazer uma pesquisa qualquer, caso a mesma tenha retornado valores, eles serão apresentado na parte abaixo do campo de busca, no formado de ***Cards*** para dispositivos com resoluções maiores, como desktops, e em ***Lista*** para dispositivos com resoluções menores, como tablets e celulares;
- No canto superior esquerdo é possível notar que a quantidade de registros encontrados é informado
- No canto superior direito é disponibilizado componente de paginação, onde é possível navegar entre as páginas caso exista mais que 1;
- Na publicação que foi retornada, caso seja clicado na foto ou no título, é feito o direcionamento para outra página com todo o conteúdo do post, e caso seja clicado na categoria, que fica logo abaixo da foto, é direcionado para uma página com posts sobre a categoria clicada;

2- Página do POST
- Na parte superior (Header), existe o Header onde mostra o título do Post, autor, categoria e hora de publicação;
- No centro temos o conteúdo da publicação;
- Na parte inferior, temos mais informações sobre o autor.

#### Fonte dos dados

Como fonte dos dados, doi consumido as seguintes API`s:

Rota principal: https://api.beta.mejorconsalud.com/wp-json/mc

Pesquisar POST`s: /v2/posts?search={valor_input}&{filtros} </br>
Obter informações de um post específico: /v1/posts/{id_post}

# Como executar o projeto

Após o Download do repositório, na raiz da pasta executar o comando para instalar todas as dependências: </br>
`npm install`

Após o processo terminar execute o seguinte comando (também na raiz) para colocar sistema no ar:</br>
`npm dev`

Se der tudo certo a página ficará disponível no endereço: http://localhost:9045/

# Imagens do Site

![1](https://user-images.githubusercontent.com/21282437/95624439-44534700-0a4d-11eb-8d3e-f8e1aeb3d8ab.png)
![2](https://user-images.githubusercontent.com/21282437/95624442-45847400-0a4d-11eb-9d3d-0f920cd64ac9.png)
![3](https://user-images.githubusercontent.com/21282437/95624443-45847400-0a4d-11eb-8723-479b8826f9f5.png)
![4](https://user-images.githubusercontent.com/21282437/95624445-461d0a80-0a4d-11eb-8b2b-a8d1c90af5d2.png)
![5](https://user-images.githubusercontent.com/21282437/95624446-461d0a80-0a4d-11eb-9288-cb8507a06c19.png)
![6](https://user-images.githubusercontent.com/21282437/95624449-46b5a100-0a4d-11eb-9dad-7a42e9ce590c.png)
