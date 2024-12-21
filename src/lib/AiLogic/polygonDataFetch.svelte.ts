import {BaseDataFetch} from "./baseClass.svelte";

const polygonAPI = import.meta.env.VITE_API_KEY_POLYGON

export class GetPolygonData extends BaseDataFetch{
    private _sticker : string = $state("")

    constructor(sticker:string) {
        super();
        this.sticker = sticker
    }

    async getPolygonData(){
        await this.fetchData(
            fetch(`https://api.polygon.io/v2/aggs/ticker/${this._sticker}/range/1/day/2023-01-09/2023-02-10?adjusted=true&sort=asc&apiKey=${polygonAPI}`),
            async (res:any)=>await res.json())
    }

    set sticker(sticker:string){
        this._sticker = sticker
    }
}


