import type {GenerativeModel} from "@google/generative-ai";
import {BaseDataFetch} from "./baseClass.svelte"


export class GetAnalysis extends  BaseDataFetch{
    private text : string = $state("")
    private model : GenerativeModel


    constructor(model:GenerativeModel) {
        super();
        this.model = model
    }

    async getAnalysis(){
        await this.fetchData(this.model.generateContent(this.text), (res:any)=>res.response.text())
    }

    queryText(text:string){
        this.text = text
        return this
    }


}