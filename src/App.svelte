<script>
  import FOS_Network from './components/FOS_Network.svelte'
  import {onMount} from 'svelte'

  let fos_network_width=800;
  let fos_network_height=450;
  import { csv, timeParse } from 'd3'

  let data;
  onMount(async function() {
    // const timeParser = timeParse("%d %b %Y");
    data = await csv('./data/the_ontology_of_groups.csv')
		// data = await csv('data/the_ontology_of_groups.csv', (d) => ({
		// 	...d,
		// 	date: +timeParser(d.date),
		// 	eventName: d.eventName,
		// 	eventdescription: d.eventdescription
		// }));
		
	});

  // data.map(row => ({
  //           date: timeParser(row.date),
  //           eventName: row.eventName,
  //           eventDescription: row.eventDescription,
  //           sharedOrPersonal: row.sharedOrPersonal,
  //           contribType: row.contrib_type,
  //           readLvl: row.read_lvl
  //       }))



  $: console.log(data)

</script>

<main>
  <h1>The science of science of groups and F/OSS</h1>
  <div class='chart-container' bind:clientWidth={fos_network_width}>
    <div class='fos-network'>
      <FOS_Network width={fos_network_width} height={fos_network_height} />
    </div>
    <h2>Grontonlogy timeline</h2>
    <div class='timeline'>
      <svg height={600} width={700}>
          <rect
              fill="purple"
              x="0"
              y="0"
              opacity=0.2
              width="700"
              height="600"
          ></rect>
          <!-- {#each  as }
            <g transform="translate(0, {y(d.date)})">
              <circle>
    
              </circle>
            </g>
            {/each} -->
      </svg>
    </div>

  </div>
</main>

<style>
  main {
    max-width: 768px;
    margin: 0 auto;
    padding: 8px;
  }

  h1 {
    margin: 0.5rem 0 1rem 0;
    font-size: 1.35rem;
    text-align: center;
    font-weight: 600;
  }

  h2 {
    margin: 5rem 0 1rem 0;
    font-size: 1.35rem;
    text-align: center;
    font-weight: 300;
  }

  :global(*) {
    font-family: Inter;
    -moz-osx-font-smoothing: grayscale;
  }

  .chart-container {
    width: 100%;
    height: 100%;

    /* Optional */
    max-width: 700px;
    max-height: 450px;

    background: white;
    box-shadow: 1px 1px 30px "black";
    border: 1px solid grey;
    border-radius: 6px;
  }

  #chart-background {
    fill: purple;
  }
</style>