import { error } from "console";
import {api} from "../../types/Api";
import {GerenciamentoContrapartida} from "../../types/gerenciamentoContrapartida"


export const ContrapartidaServise ={
    async getAllContrapartidas():Promise<GerenciamentoContrapartida[]>{
        try{
            const response = await api.get("GerenciamentoContrapartida/")
            return response.data;
        }catch(error:any){
            throw new Error("Erro ao consumir api", error);
        }
    },

    async getContrapartida(id: number):Promise<GerenciamentoContrapartida[]>{
        try {
            const response  = await api.get(`GerenciamentoContrapartida/${id}`);
            return response.data;
        }catch(error:any){
            throw new Error("Erro ao consumir api", error);
        }
    },
    async deleteContrapartida(id:number):Promise<GerenciamentoContrapartida[]>{
        try{
            const response = await api.delete(`GerenciamentoContrapartida/${id}`);
            return response.data;
        }catch(error:any){
            throw new Error("Erro ao consumir api", error);
        }
    },
    async postContrapartida(userData:Omit<GerenciamentoContrapartida, 'id'>):Promise<GerenciamentoContrapartida[]>{
        try{
            const response = await api.post(`GerenciamentoContrapartida/${userData}`);
            return response.data;
        }catch(error: any){
            throw new Error("Erro ao consumir api", error);
        }
    },

    async putContrapartida(id: number, userData:Partial<GerenciamentoContrapartida>):Promise<GerenciamentoContrapartida[]>{
        try{
            const response = await api.put(`GerenciamentoContrapartida/${userData}`);
            return response.data;
        }catch(error: any){
            throw new Error("Erro ao consumir api", error);
        }

    }
}