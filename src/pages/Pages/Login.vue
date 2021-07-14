<template>
  <div class="container">
    <div class="col-lg-4 col-md-6 ml-auto mr-auto">
      <ValidationObserver v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(submit)">
          <card class="card-login card-white">
            <template slot="header">
              <img src="img/card-primary.png" alt="" />
              <h1 class="card-title">Log in</h1>
            </template>

            <div>
              <ValidationProvider
                name="email"
                rules="required|email"
                v-slot="{ passed, failed, errors }"
              >
              <base-input
                required
                v-model="email"
                type="email"
                placeholder="Email"
                addon-left-icon="tim-icons icon-email-85"
                :error="errors[0]"
                :class="[{ 'has-success': passed }, { 'has-danger': failed }]">
              </base-input>
             </ValidationProvider>

             <ValidationProvider
               name="password"
               rules="required|min:5"
               v-slot="{ passed, failed, errors }"
             >
             <base-input
               required
               v-model="password"
               placeholder="Password"
               addon-left-icon="tim-icons icon-lock-circle"
               type="password"
               :error="errors[0]"
               :class="[{ 'has-success': passed }, { 'has-danger': failed }]">
             </base-input>
            </ValidationProvider>
            </div>

            <div slot="footer">
              <base-button native-type="submit" type="primary" class="mb-3" size="lg" block>
                Get Started
              </base-button>
              <div class="pull-left">
                <h6>
                  <router-link class="link footer-link" to="/register">
                    Create Account
                  </router-link>
                </h6>
              </div>

              <div class="pull-right">
                <h6><a href="#pablo" class="link footer-link">Need Help?</a></h6>
              </div>
            </div>
          </card>
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { extend } from "vee-validate";
import { required, email, min } from "vee-validate/dist/rules";

extend("email", email);
extend("min", min);

extend("required", required);

export default {
  data() {
    return {
      url: process.env.VUE_APP_ROOT_API,
      email: null,
      password: null,
      subscribe: true
    };
  },
  // methods: {
  //   submit() {
  //     alert("Form has been submitted!");
  //   }

    methods: {
     async submit() {
       
       alert('In')
      const response = await axios.post(this.url + "/auth/login/", {
        email: this.email,
        password: this.password,
      });
      localStorage.setItem("usertoken", response.data.token);
      console.log(response);
      // this.$log.error("Transaction saved!");
      // this.$store.dispatch("user", response.data.user);
      if (response.data.user_type == "admin") {
          this.$router.push("/dashboard");
          console.log(response.data.user_type);
          alert("daashboard");
      } else if (response.data.user_type == "user") {
        if (response.data.f_login == true) {
           this.$router.push("/change_password");
        } else {
            this.$router.push("/profile");
        }
      }
    },
  },
  
};
</script>
<style>
.navbar-nav .nav-item p {
  line-height: inherit;
  margin-left: 5px;
}
</style>
