<template>
  <div>
    <div class="header">
      <div class="black_50"></div>
      <div class="grey_25"></div>
      <div class="container">
        <div class="row">
          <img src="./assets/dslogo.jpg" class="dslogo"  v-on:click="home()"/>
        </div>
        <div class="row mynav" v-if="loggedIn" style="text-align:right;">
          <ul>
            <li><router-link to="/admin/manager">MANAGER</router-link></li>
            <li><router-link to="/admin/contests">CONTESTS</router-link></li>
            <li><router-link to="/admin/metrics">METRICS</router-link></li>
            <li v-on:click="logout()"><router-link to="#">SIGN OUT</router-link></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container">
      <router-view/> 
    </div>
  </div>
</template>

<script>

import {storage} from './utils/storage'
import {api} from './utils/api'

export default {
  name: 'App',
  data () {
    return {
      loggedIn: false
    }
  },
  mounted: function () {
    let token = storage.getValue('token');
    api.get(`/admvalid`).then(
      response => {
        if(response.data.value === "ok"){
          this.loggedIn = true;
          storage.storeValue('isGood', 'yes');
          this.$router.push('/admin');
        };
      })
    .catch(error => {
      this.loggedIn = false;
      this.$router.push('/');
      storage.storeValue('isGood', 'no');
    });
  },
  methods: 
  {
    home () {
      this.$router.push('/');
    },
    logout () {
      this.loggedIn = false;
      localStorage.clear('isGood');
      localStorage.clear('token');
      this.$router.push('/');
    }
  }
}

</script>

<style>

</style>
