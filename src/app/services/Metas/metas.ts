import { error } from "console";
import {api} from "../../types/Api";
import {GerenciamentoMeta} from "../../types/gerenciamentoMeta"


export const metasServise ={
    async getAllMetas():Promise<GerenciamentoMeta[]>{
        try{
            const response = await api.get("GerenciamentoMeta/")
            return response.data;
        }catch(error:any){
            throw new Error("Erro ao consumir api", error);
        }
    },

    async getMeta(id: number):Promise<GerenciamentoMeta[]>{
        try {
            const response  = await api.get(`GerenciamentoMeta/${id}`);
            return response.data;
        }catch(error:any){
            throw new Error("Erro ao consumir api", error);
        }
    },
    async deleteMeta(id:number):Promise<GerenciamentoMeta[]>{
        try{
            const response = await api.delete(`GerenciamentoMeta/${id}`);
            return response.data;
        }catch(error:any){
            throw new Error("Erro ao consumir api", error);
        }
    },
    async postMeta(userData:Omit<GerenciamentoMeta, 'id'>):Promise<GerenciamentoMeta[]>{
        try{
            const response = await api.post(`GerenciamentoMeta/${userData}`);
            return response.data;
        }catch(error: any){
            throw new Error("Erro ao consumir api", error);
        }
    },

    async putMeta(id: number, userData:Partial<GerenciamentoMeta>):Promise<GerenciamentoMeta[]>{
        try{
            const response = await api.put(`GerenciamentoMeta/${userData}`);
            return response.data;
        }catch(error: any){
            throw new Error("Erro ao consumir api", error);
        }

    }
}