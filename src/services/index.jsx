import PocaoHp from "../img/pocoes/pocao-hp.png"
import PocaoMana from "../img/pocoes/pocao-mana.png"
import PocaoCura from "../img/pocoes/pocao-cura.png"
import VarinhaEncantada from "../img/arma/varinha-roxa.png"
import FeiticoFogo from "../img/feitico/Pergaminho-feitico-fogo.png"
import FeiticoAgua from "../img/feitico/feitico-criar-agua.png"
import FeiticoLevita from "../img/feitico/feitico-levitacao.png"
import BraceleteDef from "../img/acessorio/bracelete-defesa.png"
import EspadaSimples from "../img/arma/espada-simples.png"
import VarinhaSimples from "../img/arma/varinha simples.png"
import PocaoAgil from "../img/pocoes/pocao-agilidade.png"
import ChapeuMagico from "../img/armaduras/chapeu-magico-para-iniciantes.png"
import BolsaMagica from "../img/acessorio/bolsa-magica.png"
import ArcoSimples from "../img/arma/arco-simples.png"
export const produtosData = [
    {
        pocoes: [
            {
                id: 'pocao1',
                nome: "Poção de vida Média",
                descricao: "Feita pelos nossos magos",
                preco: 100.00,
                imagem: PocaoHp,
                categoria: "pocoes",
                propriedades: `### -Propriedades
* -Restaura uma quantidade moderada de pontos de vida  
* -Restaura uma quantidade moderada de pontos de vida
* -Age rapidamente, proporcionando recuperação rápida em momentos cruciais
* -Possui sabor agradável e refrescante.`,
                observacoes: `### -Efeitos Colaterais
Em doses normais, não apresenta efeitos colaterais graves.
Em doses excessivas (mais de 3 poções por dia), pode causar:
* -Náusea leve.
* -Dor de cabeça passageira.`,
                recomendacoes: `### -Recomendações
Utilize com moderação, especialmente para iniciantes.
* -Beba bastante água após consumir a poção.
* -Consulte um curandeiro em caso de efeitos colaterais persistentes.`
            },
            {
                id: 'pocao2',
                nome: "Poção de mana Média",
                descricao: "Feita pelos nossos magos",
                preco: 100.00,
                imagem: PocaoMana,
                categoria: "pocoes",
                propriedades: ` ### -Propriedades
* -Recupera uma quantidade moderada de mana.
* -Age rapidamente, restaurando mana rapidamente em momentos cruciais.
* -Sabor agradável e refrescante.`,
                observacoes: ` ### - Efeitos colaterais
Em doses normais, não apresenta efeitos colaterais graves.
Em doses excessivas (mais de 3 poções por dia), pode causar:
* -Tontura leve.
* -Fadiga passageira.
* -Dificuldade de concentração.
`,
                recomendacoes: ` ### - Recomendações
Utilize com moderação, especialmente para iniciantes.
* -Utilize com moderação, especialmente para iniciantes.
* -Beba bastante água após consumir a poção.
* -Consulte um mago em caso de efeitos colaterais persistentes.
                `
            },
            {
                id: 'pocao3',
                nome: "Poção de cura",
                descricao: "Feita pelos nossos magos",
                preco: 130.00,
                imagem: PocaoCura,
                categoria: "pocoes",
                propriedades: ` ### Propriedades
* -Alivia sintomas de gripe, dor de cabeça e doenças leves.
* -Age rapidamente, proporcionando alívio em momentos cruciais.
* -Sabor agradável e refrescante de menta e limão.`,
                observacoes: `### -Efeitos colaterais
Em doses normais, não apresenta efeitos colaterais graves.
Em doses excessivas (mais de 4 poções por dia), pode causar:
* -Sonolência leve.
* -Dor de estômago leve.
* -Diarreia passageira.
`,
                recomendacoes: `### -Recomendações
Utilize com moderação, especialmente para iniciantes.
* -Beba bastante água após consumir a poção.
* -Descanse após o efeito da poção passar.
* -Consulte um curandeiro em caso de sintomas persistentes ou graves.
`
            },
            {
                id: 'pocao4',
                nome: "Poção de agilidade",
                descricao: "Feita pelos nossos magos",
                preco: 200.00,
                imagem: PocaoAgil,
                categoria: "pocoes",
                propriedades: `### - Propriedades 
* -Aumenta a agilidade.
* -Age rapidamente, aumentando a velocidade de movimento  em momentos cruciais.
* -Sabor agradável e refrescante de menta e limão.`,
                observacoes: `### -Efeitos Colaterais
Em doses normais, não apresenta efeitos colaterais graves.
Em doses excessivas (mais de 2 poções por dia), pode causar:
* -Fadiga leve.
* -Dificuldade de concentração.
                `,
                recomendacoes:  `### - Recomendações
Utilize com moderação, especialmente para iniciantes.
* -Beba bastante água após consumir a poção.
* -Descanse após o efeito da poção passar.
* -Consulte um curandeiro em caso de sintomas persistentes ou graves.
                `
            }
        ],
        armas: [
            {
                id: 'arma1',
                nome: "Varinha Simples",
                descricao: "Arma feita para iniciantes",
                preco: 100.00,
                imagem: VarinhaSimples,
                categoria: "armas",
                propriedades: `### -Especificações:
* -Material: Madeira leve e flexível
* -Comprimento: Aproximadamente 30 cm
* -Núcleo: Cabelo de unicórnio
* -Cabo: Envolto em couro macio
* -Efeito: Amplifica os feitiços lançados`,
                recomendacoes:`### -Ideal para:
* -Bruxos e bruxas iniciantes
* -Praticar feitiços básicos
* -Desenvolver habilidades mágicas
* -Tarefas mágicas cotidianas`,
                observacoes:`### -Observações:
* -Use com responsabilidade e cuidado.
* -Siga as instruções de segurança.
* -Mantenha limpa e em bom estado.
                `
            },
            {
                id: 'arma2',
                nome: "Varinha Mística",
                descricao: "Encontrada na masmorra por um aventureiro",
                preco: 1800.00,
                imagem: VarinhaEncantada,
                categoria: "armas",
                propriedades: `### -Especificações:
* -Material: Madeira nobre e pedras preciosas
* -Comprimento: Aproximadamente 35 cm
* -Núcleo: Desconhecido (aumenta a magia arcana)
* -Cabo: Envolto em couro macio e adornado com runas mágicas
* -Efeito: Amplifica feitiços de magia arcana`,
                recomendacoes:`### -Recomendações:
* -Bruxos e bruxas experientes
* -Magos e magistas
* -Aventureiros que buscam poder mágico
* -Colecionadores de artefatos mágicos`,
                observacoes:`### -Observações:
* -Use com responsabilidade e cuidado.
* -Siga as instruções de segurança.
* -Mantenha limpa e em bom estado.
* -O poder da varinha é desconhecido e pode ser perigoso para iniciantes.
                `
            },
            {
                id: 'arma3',
                nome: "Espada Simples",
                descricao: "Arma feita para iniciantes",
                preco: 100.00,
                imagem: EspadaSimples,
                categoria: "armas",
                propriedades: `### -Especificações:
* -Material: aço 
* -Comprimento: Aproximadamente 25 cm
* -Peso: 60 libras`,
                recomendacoes:`### -Recomendações: 
* -Feita para iniciantes
* -Praticar luta corporal basica
* -Sempre usar com cuidado por ser de material cortante`,
                observacoes:`### -Observações:
* -Use com responsabilidade e cuidado.
* -Siga as instruções de segurança.`
            },
            {
                id: 'arma4',
                nome: "Arco-Simples",
                descricao: "Arma feita para iniciantes",
                preco: 100.00,
                imagem: ArcoSimples,
                categoria: "armas",
                propriedades: `### -Especificações:
* -Peso de tração do arco: 20 libras
* -Material do arco: madeira
* -Material da flecha: madeira
* -Ponta da flecha: espuma,
                `,
                recomendacoes:`### -Recomendações:
* -O Arco-Simples é recomendado para iniciantes com 12 anos ou mais.
* -É importante usar proteção para os olhos e os ouvidos ao atirar com arco e flecha.
* -Sempre atire em um alvo seguro.
* -Nunca atire em pessoas ou animais.`,
                observacoes:`### -O que está incluído:
* -Arco
* -Aljava
* -6 flechas`
            },
        ],
        feiticos: [
            {
                id: 'feitico1',
                nome: "Feitiço para criar fogo",
                descricao: "Feito pelos nossos magos",
                preco: 200.00,
                imagem: FeiticoFogo,
                categoria: "feiticos"
            },
            {
                id: 'feitico2',
                nome: "Feitiço para criar água",
                descricao: "Feito pelos nossos magos",
                preco: 200.00,
                imagem: FeiticoAgua,
                categoria: "feiticos"
            },
            {
                id: 'feitico3',
                nome: "Feitiço para levitar",
                descricao: "Feito pelos nossos magos",
                preco: 180.00,
                imagem: FeiticoLevita,
                categoria: "feiticos"
            },
        ],
        acessorios: [
            {
                id: 'acesorrio1',
                nome: "Bracelete para defesa física",
                descricao: "Feito pelo nosso joalheiro",
                preco: 600.00,
                imagem: BraceleteDef,
                categoria: "acessorios"
            },
            {
                id: 'acesorrio2',
                nome: "Bolsa magica",
                descricao: "Feita pelo nosso alfaiate",
                preco: 250.00,
                imagem: BolsaMagica,
                categoria: "acessorios"
            }
        ],
        armaduras: [
            {
                id: 'armadura1',
                nome: "Chapeu magico simples",
                descricao: "Feita pelo nosso alfaiate",
                preco: 100.00,
                imagem: ChapeuMagico,
                categoria: "armaduras"

            }
        ]
    }
]