export interface GerenciamentoContrapartida {
  id: number;
  proposta_contrapartida_id: number;
  quantidade: number;
  observacao: string;
  data: string;
  status: 'Planejado' | 'Realizado' | string;
  arquivos_ids: number[];
}