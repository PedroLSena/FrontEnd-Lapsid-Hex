import Link from 'next/link';
import { propostaService } from '../services/Proposta/proposta';
import { GerenciamentoProposta } from '../types/gerenciamentoProposta';

export default async function Proposta() {

  let propostas: GerenciamentoProposta[] = [];
  try {
    propostas = await propostaService.getAllPropostas();
  } catch (e: any) {
      throw new Error(`Erro ao consumir API${e}`);
      
  }

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Propostas</h1>
        <Link href="/proposta/create" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors text-sm font-medium">Nova Proposta</Link>
      </div>
      <main className="grid gap-6 grid-cols-1 md:grid-cols-2">
        {propostas.length === 0 && (
          <div className="col-span-2 text-center text-gray-500">Nenhuma proposta encontrada.</div>
        )}
        {propostas.map((proposta) => (
          <div key={proposta.id} className="bg-white rounded-lg shadow p-6 flex flex-col gap-2 border border-gray-100">
            <div className="flex items-center justify-between">
              <span className="text-lg text-gray-950 font-semibold bg">Trimestre: {proposta.trimestre_de_referencia}</span>
              <span className="px-2 py-1 bg-gray-950 rounded text-xs font-mono">{proposta.tipo}</span>
            </div>
            <div className="flex gap-2 justify-end mt-4">
              <Link href={`/proposta/${proposta.id}`} className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-xs font-medium">Ver detalhes</Link>
              <Link href={`/proposta/${proposta.id}/edit`} className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors text-xs font-medium">Editar</Link>
              <Link href={`/proposta/${proposta.id}/delete`} className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors text-xs font-medium">Excluir</Link>
            </div>
          </div>
        ))}
      </main>
    </>
  );
}