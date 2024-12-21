<script lang="ts">
    import {GetAnalysis} from "./lib/AiLogic/aiAnalysis.svelte"
    import {GetPolygonData} from "./lib/AiLogic/polygonDataFetch.svelte"
    import {model} from "./lib/AiLogic/aiConfig"

    const getAnalysis = new GetAnalysis(model)
    const polygonData = new GetPolygonData("AAPL")

    let userInput = $state("")

    $inspect(userInput)

    async function handleGetAnalysis() {

        if(!userInput.trim()){
            alert("Hey are you dumb to type something?")
            return
        }

        polygonData.sticker=userInput

        await polygonData.getPolygonData()

        if(!polygonData.loading && !polygonData.error) {
            console.log(polygonData.response)
            getAnalysis.queryText(`its ${userInput} ${JSON.stringify(polygonData.response.results)}`)
            await getAnalysis.getAnalysis()

        }

        userInput =  ""
    }

</script>

<section>
    <input type="text" placeholder="enter a sticker example AAPL,GOOGL,AMZN" bind:value={userInput}/>
    <button onclick={handleGetAnalysis}>get data</button>
</section>

{#if polygonData.loading}
    <p>Getting out stock data</p>
{:else if getAnalysis.loading}
    <p>Performing AI analysis</p>
{:else if getAnalysis.error || polygonData.error}
        <p>There was an error</p>
{:else}
        <p>{getAnalysis.response}</p>
{/if}


<style>
    :root{
        margin: 0 40px;
        letter-spacing: 0.3px;
        font-family: Bahnschrift,cursive;
        line-height: 1.5;
    }

    section{
        width: 100vw;
        margin-top: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;

        /*style for the input*/

        input{
            padding: 10px 15px;
            border-radius: 5px;
            border: 1px solid #000;
            cursor: pointer;

            &:active, &:focus{
                outline: none;
            }
        }

        /*style for the button*/
        button{
            padding: 10px 15px;
            border-radius: 5px;
            border: 1px solid #000;
            background-color: #000;
            color: #fff;
            cursor: pointer;

            &:hover{
                background-color: #fff;
                color: #000;
            }
        }
    }

</style>


