<script>
import CreateFormPool from "./components/CreateFormPool.svelte";
import Footer from "./components/Footer.svelte";
import Header from "./components/Header.svelte";
import PollList from "./components/PollList.svelte";
import Tabs from "./shared/Tabs.svelte";

let items = ["Current Polls","Add New Poll"];
let activeItem = "Current Polls";
// let polls = [
// 	{
// 		id:1,
// 		question:"Python or Javascript",
// 		answerA:"Python",
// 		answerB:"Javascript",
// 		votesA:15,
// 		votesB:20
// 	}
// ]

const changeTab = (e) =>{
	activeItem = e.detail;
}

const handleAddPoll = () =>{
	activeItem = "Current Polls";
}

const handleVote = (e) =>{
	const {option,id} = e.detail;
	const copiedPolls = [...polls];
	const editedPolls = copiedPolls.map((poll)=>{
		if(poll.id === id){
			if(option === "a"){
				poll.votesA++;
			}
			if(option === "b"){
				poll.votesB++;
			}
		}
		return poll;
	})
	polls = editedPolls;
}

</script>

<Header/>
<main>
	<Tabs {items} {activeItem} on:changeTab={changeTab}/>
	{#if activeItem === "Current Polls"}
		<PollList on:vote={handleVote}/>
		{:else if activeItem === "Add New Poll"}
		<CreateFormPool on:add={handleAddPoll}/>
	{/if}
</main>
<Footer/>

<style>
	main {
		padding:0 8px;
		max-width: 960px;
		margin:40px auto
	}
</style>