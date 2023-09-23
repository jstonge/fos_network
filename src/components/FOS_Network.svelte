<script>
    import { nodes, links } from '../../data/fos_collab.js'
    import Tooltip from './Tooltip.svelte';
    import { forceSimulation, forceManyBody, forceCenter, forceLink, forceX, forceY } from "d3-force";
    import { scaleOrdinal } from "d3"
    import { fly } from "svelte/transition";

    export let width;
    export let height;

    let radius=10;

    const simulation = forceSimulation(nodes)
        .force("link", forceLink(links).id(d => d.id))
        .force("charge", forceManyBody().strength(-500))
        .force("center", forceCenter(width/2, height/2))
        .force("x", forceX())
        .force("y", forceY())
        .tick(5000);

        $: nodes_xy = simulation.nodes();

        let color_palette = ["#778da9", "#6a4c93", "#005f73", "#0a9396", "#94d2bd", "#e9d8a6", "#ee9b00", "#ca6702", "#bb3e03", "#ae2012", "#9b2226"]
        let color_scale = scaleOrdinal([1,2,3,4,5,6,7,8,10,11], color_palette)

        let hoveredData;
</script>

<svg {width} {height} on:mouseleave={() => hoveredData = null}>
    <g class='inner-chart'>
      <!-- LINKS -->
      {#each links as e}
        <g class="links">
          <line
          x1={e.source.x}
          x2={e.target.x}
          y1={e.source.y}
          y2={e.target.y}
          opacity="0.2"
          stroke-width={Math.sqrt(e.value)}
          stroke="hsla(212, 10%, 53%, 1)"
          ></line>  
        </g>
        {/each}
        <!-- NODES -->
        {#each nodes_xy as node}
        <g class="nodes">
          <circle
            cx={node.x}
            cy={node.y}
            fill={color_scale(node.group)}
            stroke="black"
            opacity="1"
            stroke-width=1
            on:mouseover={() => hoveredData = node}
            on:focus={() => hoveredData = node}
            r={hoveredData == node ? radius * 1.5 : radius}></circle>  
          </g>
          <g>
          <text
            x={node.x}
            y={node.y}
            dx={hoveredData == node ? 10 : 8}
            dy={hoveredData == node ? -10 : -8}
            stroke="black"
            opacity=1.
            stroke-width=0.1
            >{node.label}</text>  
          </g>
          {/each}
    </g>
</svg>
{#if hoveredData} 
  <Tooltip data={hoveredData} {width}/>
{/if}


<style>
    circle {
        transition: r 300ms ease, opacity 500ms ease;
        cursor: pointer;
    }

    text {
        transition: r 300ms ease, opacity 500ms ease;
        cursor: pointer;
    }
</style>