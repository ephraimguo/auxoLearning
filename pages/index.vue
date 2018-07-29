
<template>
  <section class="container">
    <create-user-form @create="create"/>
    <create-task-form @create="createTask"/>
    <img src="~assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <h1 class="title">
      主题帖
    </h1>
    <ul class="users">
      <li v-for="(task, index) in $store.state.task.tasks" :key="index" class="user">
        <h4>{{ task.title }}</h4>
        <div>
          {{ task.content }}
        </div>
      </li>
    </ul>
  </section>
</template>


<script>
import axios from '~/plugins/axios';
import domain from '~/plugins/domain';
import CreateUserForm from '~/components/CreateUserForm.vue';
import CreateTaskForm from '~/components/CreateTaskForm.vue';

export default {
  components:{
    CreateUserForm, CreateTaskForm
  },
  async fetch ({ store, params }) {
    let users = (await axios.get('/users')).data;
    let task =  (await axios.get('/topics')).data;
    store.commit('init', users);
    store.commit('task/init',tasks);
  },
  methods:{
    async create(name){
      const {data} = await axios.post("/domain/User/create",{name});
      this.$store.commit('create', {id:data.id,name});
    },

    async createTask(title, content){
      console.log(title, content);
      const {data} = await axios.post("/domain/Task/create",{title, content});
      this.$store.commit('task/create', {title, content});
    },
  },
  head () {
    return {
      title: 'Users'
    }
  }
}
</script>

<style scoped>
.title
{
  margin: 30px 0;
}
.users
{
  list-style: none;
  margin: 0;
  padding: 0;
}
.user
{
  margin: 10px 0;
}
</style>
