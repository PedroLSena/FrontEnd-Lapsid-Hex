import { propostaService } from '../../services/Proposta/proposta';
import { GerenciamentoProposta } from '../../types/gerenciamentoProposta';
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    id: string;
  };
}

export default async function PropostaDetalhe({ params }: PageProps) {
  if (!params.id) return notFound();

  let proposta: GerenciamentoProposta | null = null;

  try {
    proposta = await propostaService.getProposta(Number(params.id));
  } catch (e) {
    console.error(`Erro ao consumir API: ${e}`);
    return notFound();
  }

  if (!proposta) return notFound();
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold mb-2">Detalhes da Proposta</h1>
      <div className="flex flex-wrap gap-4">
        <div className=" bg-white rounded shadow p-4 min-w-[220px]">
          <div className="text-gray-950 font-semibold">Trimestre de Referência</div>
          <div className=" text-gray-800" >{proposta.trimestre_de_referencia}</div>
        </div>
        <div className="bg-white rounded shadow p-4 min-w-[120px]">
          <div className=" text-gray-950 font-semibold">Tipo</div>
          <div className=" text-gray-800">{proposta.tipo}</div>
        </div>
      </div>

      {/* Metas */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Metas</h2>
        <div className="grid gap-2">
          {proposta?.gerenciamento_metas?.length === 0 && 
            <span className="text-gray-500">Nenhuma meta cadastrada.</span>
          }
          {proposta?.gerenciamento_metas?.map((meta) => (
            <div key={meta.id} className="bg-gray-50 rounded p-3 flex flex-col md:flex-row md:items-center md:justify-between">
              <span>Ordem: <b>{meta.ordem}</b></span>
              <span>Alcançado: <b>{meta.alcancado}</b></span>
              <span>Arquivos: {meta.arquivos_ids.join(', ') || 'Nenhum'}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Qualitativo */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Gerenciamento Qualitativo</h2>
        <div className="grid gap-2">
          {proposta.gerenciamento_qualitativo?.length === 0 && <span className="text-gray-500">Nenhum dado qualitativo.</span>}
          {proposta.gerenciamento_qualitativo?.map((qual) => (
            <div key={qual.id} className="bg-gray-50 rounded p-3">
              <div><b>Ações Realizadas:</b> {qual.acoes_realizadas}</div>
              <div><b>Ações Previstas:</b> {qual.acoes_previstas}</div>
              <div><b>Visão do Proponente:</b> {qual.visao_proponente}</div>
              <div><b>Arquivos:</b> {qual.arquivos_ids.join(', ') || 'Nenhum'}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Quantitativo */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Gerenciamento Quantitativo</h2>
        <div className="grid gap-2">
          {proposta.gerenciamento_quantitativo?.length === 0 && <span className="text-gray-500">Nenhum dado quantitativo.</span>}
          {proposta.gerenciamento_quantitativo?.map((quant) => (
            <div key={quant.id} className="bg-gray-50 rounded p-3">
              <div className="flex flex-wrap gap-4">
                <span><b>Educ. Financeira Impactados:</b> {quant.educacao_financeira_impactados}</span>
                <span><b>Educ. Financeira Alcançados:</b> {quant.educacao_financeira_alcancados}</span>
                <span><b>Postos de Trabalho Gerados:</b> {quant.geracao_renda_postos_trabalho_gerados}</span>
                <span><b>Pessoas Alcançadas (Digitais):</b> {quant.alcance_marca_pessoas_alcancadas_publicacao_digitais}</span>
                <span><b>Pessoas Alcançadas:</b> {quant.pessoas_alcancadas}</span>
                <span><b>Pessoas Impactadas:</b> {quant.pessoas_impactadas}</span>
              </div>
              <div className="mt-2">
                <b>Caracterizações:</b>
                <ul className="list-disc ml-6">
                  {quant.gerenciamento_caracterizacao?.map((carac) => (
                    <li key={carac.id}>
                      Quantidade: {carac.quantidade} | Categorização IDs: {carac.categorizacoes_ids.join(', ') || 'Nenhum'}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contrapartida */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Gerenciamento Contrapartida</h2>
        <div className="grid gap-2">
          {proposta.gerenciamento_contrapartida?.length === 0 && <span className="text-gray-500">Nenhuma contrapartida.</span>}
          {proposta.gerenciamento_contrapartida?.map((contra) => (
            <div key={contra.id} className="bg-gray-50 rounded p-3 flex flex-col md:flex-row md:items-center md:justify-between">
              <span><b>Data:</b> {contra.data}</span>
              <span><b>Status:</b> {contra.status}</span>
              <span><b>Quantidade:</b> {contra.quantidade}</span>
              <span><b>Observação:</b> {contra.observacao}</span>
              <span><b>Arquivos:</b> {contra.arquivos_ids.join(', ') || 'Nenhum'}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
