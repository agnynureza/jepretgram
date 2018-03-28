<template>
  <div class="container">
    <h1>Jepregram</h1>
    <img id ="bg" src="../assets/city.jpg" >
     <div class="row justify-content-center" style="margin-top:20px;">
        <div class="card " style="padding: 20px;">
            <div class="card-block" style="min-width:350px;">
                <ul class="nav nav-tabs" id="myTab" role="tablist" style="margin-bottom: 20px;">
                    <li class="nav-item">
                        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Login</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Register</a>
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <div class="form-group">
                          <p style="color:red;">{{error}}</p>
                            <label for="exampleInputEmail1">Email /Username</label>
                            <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                              <div class="input-group-addon" style="width: 2.6rem"><i class="fa fa-user"></i></div>
                              <input v-model="username_email" type="text" name="name" class="form-control" id="name" placeholder="username" required autofocus>
                            </div>
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                              <div class="input-group-addon" style="width: 2.6rem"><i class="fa fa-key"></i></div>
                              <input v-model="password" type="password" name="password" class="form-control" id="password" placeholder="Password" required>
                            </div>
                        </div>
                        <br>
                        <button @click="login" type="submit" class="btn btn-primary">Login</button>
                    </div>
                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                      <div class="form-group">
                        <label for="exampleInputPassword1">Username</label>
                        <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                          <div class="input-group-addon" style="width: 2.6rem"><i class="fa fa-user"></i></div>
                          <input v-model="username" type="text" name="name" class="form-control" id="name_register" placeholder="username" required autofocus>
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="exampleInputPassword1">Email Address </label>
                        <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                          <div class="input-group-addon" style="width: 2.6rem"><i class="fa fa-at"></i></div>
                          <input v-model="email" type="email" name="email" class="form-control" id="email" placeholder="you@example.com" required autofocus>
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                          <div class="input-group-addon" style="width: 2.6rem"><i class="fa fa-key"></i></div>
                          <input v-model="password" type="password" name="password" class="form-control" id="password_register" placeholder="Password" required>
                        </div>
                      </div>
                      <br/>
                      <button  @click="register" type="submit" class="btn btn-primary">Register</button>
                    </div>
                </div>
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
      email: '',
      password: '',
      username: '',
      username_email: '',
      error: ''
    }
  },
  methods: {
    register () {
      axios.post('http://localhost:3000/users/signup', {
        username: this.username,
        email: this.email,
        password: this.password
      }).then(data => {
        localStorage.setItem('userId', data.data.data._id)
        this.$router.push({
          path: '/home'
        })
      })
    },
    login () {
      axios.post('http://localhost:3000/users/signin', {
        username_email: this.username_email,
        password: this.password
      }).then(data => {
        localStorage.setItem('token', data.data.data.token)
        localStorage.setItem('userId', data.data.data.id)
        localStorage.setItem('username', data.data.data.username)
        this.$router.push({
          path: '/home'
        })
      }).catch(error => {
        console.log(error)
        this.error = 'wrong username or password'
      })
    }
  }
}
</script>

<style>
#bg {
  position: fixed;
  top: 0;
  left: 0;

  /* Preserve aspet ratio */
  min-width: 100%;
  min-height: 100%;
}
</style>
