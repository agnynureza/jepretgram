<template>
  <div class="container">
    <div class="row">
      <div class="col-md-1">
        <button class="btn btn-danger" @click="logout">Logout </button>
      </div>
    </div>
    <br/>
    <div class = "row">
      <div class="col-md-4">
        <label for="">User</label>
        <div class="card border-info">
          <div class="card-header">Hai {{username}}</div>
          <div class="card-body">
            <h5 class="card-title">Jepret Go !! </h5>
            <p class="card-text"> Share Your happiness Here </p>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Upload Image</button>
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Upload image here</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <div class="float-left">
                      <label for="fileselect">Files to upload:</label>
                      <input  type="file" @change="ambilFileNya" id="fileselect" name="fileselect[]" multiple="multiple" >
                    </div>
                    <div class="float-left">
                      <label> Title</label>
                      <input type="text" v-model="title" >
                    </div>
                   <div>
                      <label>Caption</label>
                      <input  type="text" v-model="caption" >
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" @click="upload" >Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-8">
        <label for="">TimeLines</label>
        <div class="jumbotron" v-for="(image,i) in images" :key="i">
          <img class ='img-responsive' :src='image.image' alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      images: [],
      title: '',
      caption: '',
      formData: new FormData(),
      file: null
    }
  },
  computed: {
    username () {
      return this.$store.state.userData
    }
  },
  methods: {
    logout () {
      localStorage.clear()
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUserId', null)
      this.$store.dispatch('setUserData', null)
      this.$router.push({
        path: '/'
      })
    },
    ambilFileNya: function (event) {
      this.file = event.target.files[0]
    },
    upload: function() {
      this.formData.set('post', this.file[0])
      console.log(this.formData)
      axios({
        method: 'post',
        url: 'http://localhost:3000/post/upload',
        data: this.formData
        })
        .then(function (response) {
          location.reload();
          console.log('masuk')
        })
        .catch(function (response) {
          console.log(response)
        })
    }
  },
  created: function(){
    axios.get('http://localhost:3000/post/').then(data=>{
      this.images = data.data.data
    })
  }
}
</script>

<style>

</style>
