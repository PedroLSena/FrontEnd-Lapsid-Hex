import { error } from "console";
import {api} from "../../types/Api";
import {GerenciamentoProposta} from "../../types/gerenciamentoProposta"


export const propostaService ={
    async getAllPropostas():Promise<GerenciamentoProposta[]>{
        try{
            const response = await api.get("GerenciamentoProposta/")
            return response.data;
        }catch(error:any){
            throw new Error("Erro ao consumir api", error);
        }
    },

    async getProposta(id: number):Promise<GerenciamentoProposta>{
        try {
            const response  = await api.get(`GerenciamentoProposta/${id}`);
            return response.data;
        }catch(error:any){
            throw new Error("Erro ao consumir api", error);
        }
    },
    async deleteProposta(id:number):Promise<void>{
        try{
            await api.delete(`GerenciamentoProposta/${id}`);
            return;
        }catch(error:any){
            throw new Error("Erro ao consumir api", error);
        }
    },
    async createProposta(userData:Omit<GerenciamentoProposta, 'id' | 'gerenciamento_metas' | 'gerenciamento_qualitativo' | 'gerenciamento_quantitativo' | 'gerenciamento_contrapartida'>):Promise<GerenciamentoProposta>{
        try{
            const response = await api.post(`GerenciamentoProposta/`, userData);
            return response.data;
        }catch(error: any){
            throw new Error("Erro ao consumir api", error);
        }
    },

    async updateProposta(id: number, userData:Partial<GerenciamentoProposta>):Promise<GerenciamentoProposta>{
        try{
            const response = await api.put(`GerenciamentoProposta/${id}`, userData);
            return response.data;
        }catch(error: any){
            throw new Error("Erro ao consumir api", error);
        }

    }
}