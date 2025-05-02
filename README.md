# 💳 FAKER TRANSACTION API

Geração e envio de transações fake para o Gateway da MovingPay.  
Ideal para testes automatizados, ambientes de QA e geração de massa com variáveis configuráveis via `.env`.

- Collection Postman: [https://documenter.getpostman.com/view/31104364/2sAY55Zx7Z](https://documenter.getpostman.com/view/31104364/2sAY55Zx7Z)

---

## 📂 Estrutura de Arquivos

```
faker-transaction-api/
├── node_modules/
├── src/
│   ├── config/
│   │   └── env.ts                # Carrega e exporta as variáveis de ambiente
│   ├── core/
│   │   ├── index.ts              # Entry point da aplicação
│   │   └── payloadBuilder.ts     # Função principal que gera os dados fake
│   ├── services/
│   │   └── apiService.ts         # Faz o envio dos dados gerados via Axios
│   └── utils/
│       ├── helpers.ts            # Funções auxiliares (faker, alfanumérico, aleatórios)
├── .env                          # Arquivo de configuração das variáveis de ambiente
├── package.json                  # Configuração do projeto e dependências
├── tsconfig.json                 # Configuração principal do TypeScript
├── tsconfig.paths.json           # Alias de paths no projeto
└── README.md                     # Você está aqui!
```

---

## ⚙️ Variáveis de Ambiente (.env)

| Nome                           | Descrição                                                                 |
|--------------------------------|---------------------------------------------------------------------------|
| `APPLICATION_TOKEN`            | 🔐 Token gerado via painel da MovingPay *(Operacional > Usuários > Tokens de Acesso)* |
| `APPLICATION_GATEWAY_ENDPOINT`| 🌐 Endpoint de envio de transações (ex: produção Gateway MVPAY)           |
| `APPLICATION_NUM_REGISTROS`   | 🔢 Quantidade de transações que serão geradas                             |
| `APPLICATION_CAPTURE_PARTNER` | 🏷️ Nome do parceiro/canal de captura (será incluído no payload)           |
| `APPLICATION_DOCUMENTS_LIST`  | 📃 Lista de documentos/MIDs a serem sorteados                             |
| `APPLICATION_ACQUIRER_LIST`   | 🏦 Lista de adquirentes (por exemplo: `19,21,22`)                          |
| `APPLICATION_BRANDS_LIST`     | 💳 Lista de bandeiras disponíveis (VISA, MASTERCARD, ELO, etc)             |
| `APPLICATION_WEBHOOK_URL`     | 🔁 URL de callback para resposta da transação                             |

---

## 🚀 Instalação e Execução

### 🔧 Requisitos
- Node.js versão **>=22.x**
- Gerenciador de pacotes: **npm** ou **yarn**

---

### 📦 Instalação dos pacotes

```bash
npm install
```

> ou, se preferir:

```bash
yarn install
```

---

### ▶️ Executar projeto com TSX (sem build)

```bash
npm run dev
```

---

## 🧪 Exemplo de `.env`

```env
APPLICATION_TOKEN=abc123supersecreto
APPLICATION_GATEWAY_ENDPOINT=https://gateway.movingpay.com.br/push/transaction
APPLICATION_NUM_REGISTROS=20
APPLICATION_CAPTURE_PARTNER=CAPTURA_TESTE
APPLICATION_DOCUMENTS_LIST=99999999999999,10101010101010
APPLICATION_ACQUIRER_LIST=19,21,22
APPLICATION_BRANDS_LIST=VISA,MASTERCARD,ELO
APPLICATION_WEBHOOK_URL=https://webhook.site/aaaaaa-dfdwfwf-vevwwvw-vwvfw
```

---

## 📬 Envio dos dados

Cada transação gerada será enviada individualmente para o endpoint configurado. O processo é assíncrono e pode ser adaptado para batch ou paralelo.

---

## 👨‍💻 Autor

Desenvolvido por [Ricahel F Nunes] — para automação e testes com APIs de transação.

---

## 🛡️ Aviso

Este projeto simula transações fictícias. Não deve ser usado com dados reais ou em ambientes de produção sem aprovação.
