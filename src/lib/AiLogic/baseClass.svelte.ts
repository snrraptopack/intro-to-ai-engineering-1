import {promiseFor} from "promise-for-wrapper";


export class BaseDataFetch{
    protected isLoading : boolean = $state(false);
    protected errors: unknown = $state(null);
    protected data: unknown = $state(null);


    get loading(){
        return this.isLoading;
    }

    get error(){
        return this.errors
    }

    get response(){
        return this.data
    }

    protected  async fetchData(promise:Promise<unknown>,postProcess?:(res:unknown)=>unknown){
        this.isLoading = true;
        const [responseData, responseError] = await promiseFor(promise,postProcess)
           .finally(()=>this.isLoading = false);

        if(responseError){
            this.errors = responseError
            return
        }

        if(responseData){
            this.data = responseData
            return
        }
    }
}