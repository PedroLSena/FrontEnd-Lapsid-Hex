import {GerenciamentoCaracterizacao} from "../types/gerenciamentoCaracterizacao"
export interface GerenciamentoQuantitativo {
    id: number;
    educacao_financeira_impactados: number;
    educacao_financeira_alcancados: number;
    geracao_renda_postos_trabalho_gerados: number;
    alcance_marca_pessoas_alcancadas_publicacao_digitais: number;
    pessoas_alcancadas: number;
    pessoas_impactadas: number;
    gerenciamento_caracterizacao: GerenciamentoCaracterizacao[];
}