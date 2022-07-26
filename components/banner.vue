<template>
<div class="sub-banner">
      <div class="container breadcrumb-area">
        <div class="breadcrumb-areas">
          <h1>{{title}}</h1>
          <ul class="breadcrumbs">
            <li><a href="/">Home</a></li>
            <li class="active">{{title}}</li>
          </ul>
        </div>
      </div>
    </div></template>
<script lang="ts">
export default {

  props: {
    title: {
      type: String,
      required: true
    },
  }
}
</script>