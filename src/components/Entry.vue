<template>
  <div class="hello">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 centered">
        <div id="loginBox">
          <div id="loginContainer">
            <h1>ADMINISTRATION</h1>
            <br/>
            <div class="input-group input-group-lg" style="margin:0 15%;"> 
              <input type="text" class="form-control"  v-model="input.username" placeholder="EMAIL" aria-describedby="basic-addon1">
              <span class="input-group-addon" id="basic-addon1"><i class="glyphicon glyphicon-envelope"></i></span>
            </div>
            <br/>
            <div class="input-group input-group-lg" style="margin:0 15%;">
              <input type="password" class="form-control"  v-model="input.password" placeholder="PASSWORD" aria-describedby="basic-addon1">
              <span class="input-group-addon" id="basic-addon1"><i class="glyphicon glyphicon-lock"></i></span>
            </div>
            <br/>
            <div style="margin:0 15%;" class="centered">
              <button type="button" class="btn btn-orange btn-lg btn-block centered" v-on:click="signin()">LOGIN</button>
            </div>
            <br/>
            <router-view></router-view>
            <br/><br/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {api} from '../utils/api.js'
import {storage} from '../utils/storage.js'

import {store} from '../store';
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'Entry',
  data() {
    return {
      input: {
          username: "",
          password: ""
      },
    }
  },
  created: function () {
    
  },
  methods: 
  {
    signin() {
      const vm = this;
      let user = this.input.username;
      let pass = this.input.password;
      if(user != "" && pass != "") {
        api.rawPost(`/v1/admin/login`, {email: user, password: pass})
          .then( response => {
              this.userTemp = response.data;
              storage.storeValue('token', this.userTemp.token);
              storage.storeValue('isGood', 'yes');
              this.$store.commit('login', true);
              this.$router.push('/admin');             
            })
          .catch(error => {
            console.log(error)
            alert('No User with that name exists')
          });
      } else {
        alert(`A username and password must be present`);
      }
    }
  },
  computed: {
    ...mapActions([
      'usersignin'
    ])
  }
}
</script>

<style scoped>
#loginContainer {
  width:100%;
  padding:16px 8px;
}

a:visited {
  font-weight: 300;
  color:#fff; 
}
</style>

