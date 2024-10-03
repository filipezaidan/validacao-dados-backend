## Sobre o Projeto

Este projeto é uma atividade da disciplina de Desenvolvimento Web 2 do curso de Análise e Desenvolvimento de Sistemas do IFAL. O objetivo é criar um formulário de pré-matrícula para uma escola virtual e validar os dados inseridos pelo usuário no backend em Node.js usando Express.

## Tecnologias Utilizadas

- **Node.js**: Plataforma de execução do lado do servidor.
- **Express**: Framework web utilizado para construir as rotas da aplicação.
- **EJS**: Sistema de templates para renderizar as páginas HTML.

## Estrutura do Projeto

- `views/`: Contém os arquivos EJS para as interfaces do usuário.
  - `form.ejs`: Formulário de pré-matrícula.
  - `error.ejs`: Página de erro para mostrar mensagens de validação.
  - `success.ejs`: Página de sucesso para mostrar mensagens de sucesso.
- `public/stylesheets/`: Contém os arquivos CSS para estilização.
  - `style.css`: Arquivo de estilos principal.
- `utils/`: Funções auxiliares para validação dos dados do formulário.
  - `validation.js`: Contém as funções de validação.

## Configuração e Execução

1. **Instalação das Dependências**:
   ```bash
   npm install
   ```
2. **Execução do Servidor**:
   ```bash
   npm start
   ```

## Contribuições

Contribuições são sempre bem-vindas! Para contribuir, você pode seguir os passos abaixo:

1. Fork o projeto
2. Crie sua Feature Branch (`git checkout -b feature/NovaFeature`)
3. Faça commit das suas mudanças (`git commit -m 'Adicionar alguma NovaFeature'`)
4. Faça push para a Branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

## Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

## Contato

Projeto Link: [https://github.com/filipezaidan/validacao-dados-backend](https://github.com/filipezaidan/validacao-dados-backend)
