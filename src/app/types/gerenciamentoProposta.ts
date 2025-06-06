import {GerenciamentoMeta} from '../types/gerenciamentoMeta'
import {GerenciamentoQualitativo} from '../types/gerenciamentoQualitativo'
import {GerenciamentoQuantitativo} from '../types/gerenciamentoQuantitativo'
import {GerenciamentoContrapartida} from '../types/gerenciamentoContrapartida'


export interface GerenciamentoProposta {
    id: number;
    proposta_id: number;
    trimestre_de_referencia: string;
    tipo: 'TRIMESTRAL' | string;

    gerenciamento_metas: GerenciamentoMeta[];
    gerenciamento_qualitativo: GerenciamentoQualitativo[];
    gerenciamento_quantitativo: GerenciamentoQuantitativo[];
    gerenciamento_contrapartida: GerenciamentoContrapartida[];
}