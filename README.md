## Estudo Escalado

Um app que ajuda estudantes autodidatas a planejar o dia de estudo aplicando o princípio de Premack: começar pelas tarefas mais difíceis e terminar pelas mais estimulantes.

# Big Idea: Aprendizagem Autodirigida

Estudando programação por conta própria, percebi que o maior obstáculo nunca foi entender o conteúdo — foi manter a constância. Sem um professor cobrando prazo ou uma turma pra dar ritmo, é fácil começar o dia animado e, poucas horas depois, adiar justamente a tarefa mais difícil, aquela que mais precisa ser feita. Foi esse problema que me levou a estudar neurociência e produtividade por conta própria, até chegar ao princípio de Premack: a ideia de que uma atividade mais desejável pode ser usada como reforço para sustentar uma atividade menos desejável. Cada vez mais pessoas escolhem aprender assim, por fora da sala de aula tradicional — e todas esbarram no mesmo problema: sem estrutura externa, a motivação precisa vir de dentro, e sustentá-la dia após dia é o verdadeiro desafio de quem aprende sozinho.

# Essential Question

Como tornar aplicável o conceito de Premack na rotina diária de um estudante autodidata, de forma que ele saiba, todos os dias, em que ordem estudar para manter a motivação até o fim?

# challenge

Desenvolver um aplicativo que ajude estudantes autodidatas a planejar o próprio dia de estudo ordenando as tarefas da mais difícil para a mais estimulante, acompanhando sua constância ao longo do tempo.

Guiding Questions, Activities & Resources

# Guiding Questions:

O que é o princípio de Premack e como ele pode ser aplicado fora de um contexto de laboratório?
Como classificar o nível de "estímulo" de uma tarefa de forma que faça sentido pro usuário, sem ser arbitrário?
O que mantém alguém engajado em um hábito ao longo do tempo, além da motivação do primeiro dia?

# Activities & Resources:

Pesquisa sobre neurociência da motivação e o princípio de Premack
Análise de mecânicas de gamificação e retenção (ex: sistema de streak do Duolingo)
Definição das decisões de produto: categorização de estímulo sugerida pelo app (mas ajustável pelo usuário), streak de constância, recompensa real definida pelo próprio usuário como parte do plano do dia
Solution

Um aplicativo web onde o usuário monta seu plano de estudo diário adicionando tarefas e classificando cada uma por nível de estímulo (o app sugere uma categoria, mas quem decide é o próprio usuário). As tarefas são organizadas automaticamente em ordem crescente de estímulo, da mais árdua para a mais recompensadora, seguindo o princípio de Premack.

Ao final da lista, o usuário pode incluir sua própria recompensa real do dia (uma atividade de lazer, por exemplo) como a etapa final do plano — reforçando que ela só "acontece de verdade" depois do trabalho difícil ser feito.

O app acompanha a constância do usuário por meio de um sistema de streak: cada dia em que o plano é seguido até o fim soma um ponto à sequência, incentivando a repetição do hábito ao longo do tempo.

Implementation & Next Steps

Este projeto está em desenvolvimento. A primeira versão (MVP) foca em:

Cadastro de tarefas com nível de estímulo
Ordenação automática do plano do dia
Sistema de streak de constância

Próximos passos incluem testar o app com outros estudantes autodidatas para validar se a ordem "difícil → estimulante" realmente sustenta a motivação ao longo do dia, e ajustar a experiência com base nesse feedback.

Como rodar

Basta abrir o index.html no navegador. Não há dependências externas.