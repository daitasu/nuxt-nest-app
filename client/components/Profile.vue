<template>
  <div>
    <h2>ID: {{ user.id }}</h2>
    <p>NAME: {{ user.name }}</p>
    <p>AGE: {{ user.age }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import User from "../models/User"

@Component
export default class Profile extends Vue {
  @Prop({ type: Object, required: true }) user!: User
}
</script>
