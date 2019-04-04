<template>
  <div>
    <div class="header">
      <div class="black_50"></div>
      <div class="grey_25"></div>
      <div class="container">
        <div class="row">
          <img src="./assets/dslogo.jpg" class="dslogo"  v-on:click="home()"/>
        </div>
        <div class="row mynav" v-if="isLoggedIn" style="text-align:right;">
          <ul>
            <li><router-link to="/admin/manager">MANAGEMENT</router-link></li>
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

import {storage} from './utils/storage';
import {api} from './utils/api';
import store from './store';

import { mapGetters, mapMutations, mapState } from 'vuex'

export default {
  name: 'App',
  data () {
    return {
    }
  },
  mounted: function () {

    let token = storage.getValue('token');
    api.get(`/admvalid`).then(
      response => {
        if(response.data.value === "ok"){
          store.commit('login', true);
          this.$router.push('/admin');
        };
      })
      .catch(error => {
        store.commit('login', false);
        this.$router.push('/');
      }
    );
  },
  methods: 
  {
    home () {
     
      if(this.isLoggedIn) {
        this.$router.push('/admin');
      } else {
        this.$router.push('/');
      }
    },
    logout () {
      store.commit('login', false);
      localStorage.clear('isGood');
      localStorage.clear('token');
      this.$router.push('/');
    }
  },
  computed: {
    ...mapGetters([
      'isLoggedIn',
    ]),
    ...mapMutations([
      'login'
    ]),
    ...mapState(['loggedIn'])
  },
}

</script>

<style>

</style>
