# Aplicando DDD em uma entrevista

- Conversa entre Dev e Domain Expert

### Entrevista

- Dev: Olá, obrigado por participar da entrevista. Para começar, quais são as principais funcionalidades que você gostaria de ver nesse sistema de gerenciamento de estoque?
- Domain Expert: Precisamos de uma solução que nos permita rastrear cada produto individualmente, definir quantidades mínimas de estoque e receber alertas quando estivermos ficando sem um determinado produto. Também seria útil se pudéssemos visualizar o histórico de vendas e estoque para ajudar a tomarmos decisões futuras de compra.
- Dev: Entendi. Você poderia me dar um exemplo de como você gostaria que a funcionalidade de rastreamento individual de produto funcionasse?
- Domain Expert: Gostaríamos de poder atribuir um número de identificação único a cada produto, para podermos rastrear facilmente suas movimentações em nosso estoque. Também seria útil se pudéssemos adicionar informações extras, como tamanho e cor, para tornar o rastreamento ainda mais preciso.
- Dev:  E quanto a funcionalidade de definição de quantidades mínimas de estoque, como você imaginaria isso funcionando?
- Domain Expert: Gostaríamos de poder definir um limite mínimo para cada produto, de forma que pudéssemos receber um alerta quando o estoque estiver chegando próximo ao fim. Isso nos ajudaria a garantir que nunca fiquemos sem um produto popular e também nos permitiria fazer pedidos mais eficientes.
- Dev: E como você gostaria de receber esses alertas? Por e-mail, SMS ou algum outro método?
- Domain Expert: Seria ótimo se pudéssemos receber alertas por e-mail e também por meio de uma notificação em nosso sistema de gerenciamento de estoque.
- Dev: Entendi. E quanto a funcionalidade de visualização de histórico de vendas e estoque, que tipo de informações você gostaria de ver?
- Domain Expert: Gostaríamos de poder ver quantos produtos vendemos em um determinado período, qual foi o lucro gerado por produto e quais produtos estão vendendo melhor em cada período. Também seria útil se pudéssemos observar as tendências de estoque ao longo do tempo, para nos ajudar a tomar decisões de compra mais adequadas.
- Dev:  Ok, e você tem alguma outra funcionalidade que gostaria de ver no sistema?
- Domain Expert: Seria muito útil se o sistema pudesse nos permitir criar e gerenciar ordens de compra automaticamente, com base nas quantidades mínimas de estoque definidas e nas tendências de vendas. Também seria ótimo se pudéssemos integrar o sistema com nossos fornecedores, para que pudéssemos receber atualizações automáticas sobre os prazos de entrega de novas remessas.

### Análise das entidades e casos de uso da aplicação

**Entidades**
- Produto
- Movimentação de Estoque
- Ordem de Compra
- Fornecedor
- Relatório de Vendas

**Casos de Uso**
- Identificação única de cada produto
- Atualizar informações do produto
- Atualizar quantidades mínimas de estoque por produto
- Enviar alertas de estoque baixo
- Visualizar histórico de vendas e estoque
- Criar e gerenciar ordens de compra