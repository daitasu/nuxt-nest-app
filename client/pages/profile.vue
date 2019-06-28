<template>
  <div>
    <Profile v-for="user in users" :key="user.id" :user="user" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import User from "../models/User"
import Profile from "../components/Profile.vue"
import axios from "axios";

@Component({
  components: {
    Profile
  }
})

export default class ProfilePage extends Vue {
  users: User[] = [];
  async created() {
    const res = await axios.get("http://localhost:4000/");
    this.users = res.data;
  }
}
</script>
