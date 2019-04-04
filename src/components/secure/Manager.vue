<template>
  <div style="margin-top:96px;">
    <div class="row">
      <div class="col-xs-12">
        <h3>data management</h3>
        <nav-management></nav-management>
      </div>
    </div>
  </div>
</template>

<script>

import {api} from '../../utils/api.js';
import {storage} from '../../utils/storage.js';
import navManagement from '../navigation/navManagement';


export default {
  name: 'Manager',
  components: {
    'nav-management': navManagement
  },
  data () {
    return {
      statesCities: []
    }
  },
  mounted: function () {
    api.getRawSpec(`https://rsapi.digitalseat.io/v1/data/states`)
    .then(
      response => {
        this.statesCities = response.data;
      })
    .catch(error => {
      alert('No match for that ID')
    });
  }
}

</script>

<style>

</style>
