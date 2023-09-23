<script>
    export let data;
    export let width;
    
    let tooltipWidth = 150;

    const xNudge = 10;
    const yNudge = 15;
    
    $: x = data.x;
    $: y = data.y;

    $: xPosition =
        x + tooltipWidth > width ? x - tooltipWidth - xNudge : x + xNudge;
    $: yPosition = y + yNudge;

    import { fly } from "svelte/transition";
    
</script>

<div 
    class="tooltip"
    transition:fly={{ y: 10 }}
    style="position: absolute; top: {yPosition}px; left: {xPosition}px"
>
    <h1>{data.desc}</h1>
</div>

<style>
    .tooltip {
        padding: 8px 6px;
        background: white;
        box-shadow: rgba(0, 0, 0, 0.15) 2px 3px 8px;
        border-radius: 3px;
        pointer-events: none;
        transition: top 300ms ease, left 300ms ease;
  }
  h1,
  h1 {
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 6px;
    width: 100%;
  }
</style>