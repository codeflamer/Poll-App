<script>
    import PollDetails from "./PollDetails.svelte";
    import PollStore from "../stores/PollStore"
    import {fade,slide,scale} from "svelte/transition"
    import {flip} from "svelte/animate"
</script>

<div class='poll-list'>
    {#each $PollStore as poll (poll.id)}
        <div in:fade out:scale|local animate:flip={{duration:500}}>
            <PollDetails {poll}/>
        </div>
        {:else}
        <div class="no-poll">No Polls Available</div>
    {/each}
</div>
       
<style>
    .poll-list{
        display: grid;
        grid-gap: 20px;
        grid-template-columns: 1fr 1fr;
    }
    .no-poll{
    
        text-align: center;
    }
</style>