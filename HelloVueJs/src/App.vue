<template>
	<div id="app">
    <button v-on:click="title = 'Da thay doi title'">Thay doi component tu app.vue</button>
		<comp-header
        v-bind:title="title"
        v-on:changeTitleEvent="handleChangeTitle"
    />
    <list-user
        v-on:handleDeleteUser="handleDeleteUser"
        v-bind:listUser="listUser"/>
		<comp-footer v-bind:title = "title"/>
    <demo-ref/>
	</div>
</template>

<script>
/*
App
  ComHeader
  ListUser
  CompFooter
  ->props -> datas passed parent to child  ->property-like syntax

* */
import CompHeader from './components/CompHeader.vue';
import CompFooter from './components/CompFooter.vue';
import ListUser from "./components/ListUser.vue";
import DemoRef from "./components/DemoRef.vue";
export default {
	name: 'app',
	data () {
		return {
			title: 'Hello VueJs - header world',
      listUser: [
        { id: 1, email: 'test@gmail.com', active:true},
        { id: 2, email: 'test@gmail2.com', active:false},
        { id: 3, email: 'test@gmail3.com', active:true},
        { id: 4, email: 'test@gmail4.com', active:false},
      ]
		}
	},
	components: {
		CompHeader,
		CompFooter,
    ListUser,
    DemoRef,
	},
  methods: {
    handleChangeTitle(e) {
      this.title = ">>change header"
      console.log('handleChangeTitle is called by CompHeader.vue', e)
    },
    handleDeleteUser(data) {
      var indexDelete = -1;
      this.listUser.forEach((u, idx) => {
        console.log(u.id, idx, data.id);
        if(u.id === data.id) {
          indexDelete = idx;
        }
      });
      if(indexDelete != -1) {
        this.listUser.splice(indexDelete, 1);
      }
    }
  }
}
/*
Props Down -> send data from parent to child component(just use cant change data)
Event Up -> transmit a message (event) notifying the parent component that it wants to change. The parent component's task is to receive the event and change the data
-> Custom event in vuejs
 */
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
  .container {
    max-width: 1170px;
    margin: 0 auto;
    padding: 0 15px;
    min-height: 3000px;
  }
</style>
