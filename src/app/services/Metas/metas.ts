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
    }
}