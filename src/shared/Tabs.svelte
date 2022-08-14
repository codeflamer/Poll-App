<script>
import { createEventDispatcher } from "svelte";

    let dispatch = createEventDispatcher();
    export let activeItem;
    export let items;
</script>

<div class="tabs">
    <ul>
        {#each items as item}
            <li on:click = {()=> dispatch("changeTab",item)}>
                <div class:active={item === activeItem}>{item}</div>
            </li>
        {/each}
    </ul>
</div>

<style>
    .tabs{
        margin-bottom:40px
    }
    ul{
        display: flex;
        justify-content:center; 
        list-style: none;
        padding:0;
    }
    li{
        margin: 0 15px;
        font-size:18px;
        color:#555;
    }
    li:hover{
        cursor: pointer;
    }
    .active{
        padding-bottom: 8px;
        display: block;
        border-bottom: 2px solid #d91b42;
        color:#d91b42;
    }
</style>