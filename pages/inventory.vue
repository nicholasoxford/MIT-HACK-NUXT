<template>
<div class="main">
    <div v-if="!signedIn">
  <div class="container" >
<el-card class="box-card">
  <div slot="header" class="clearfix" v-if="header">
      
    <img class="logo" src="../assets/logo.jpeg" alt="Nuxt Amplify Auth Starter" style="max-width: 200px" >
    <h1>Please fill out the form below.</h1>
  </div>
  
    <orderForm
    @change="header = false"> </orderForm>
</el-card>
      </div>
      </div>
    <div v-else>
      <amplify-sign-out/>
    </div>
</div>
</template>

<script>
import { Auth } from 'aws-amplify'
import { AmplifyEventBus } from 'aws-amplify-vue'
import { elementui} from 'element-ui'
import orderForm from '~/components/orderForm'
export default {
  data() {
    return {
      title:"Corona FACT(Finding a Clinical Trial)",
 
      header: true,
      signedIn: false,
      authConfig: {
          signUpConfig: {
            header: 'Sign up for Clinical Trials',
            hideAllDefaults: true,
            defaultCountryCode: '1',
            signUpFields: [
              {
                label: 'Email',
                key: 'email',
                required: true,
                displayOrder: 1,
                type: 'string',
                signUpWith: true
              },
              {
                label: 'Password',
                key: 'password',
                required: true,
                displayOrder: 2,
                type: 'password'
              },
                              {
                label: 'My user name',
                key: 'username',
                required: true,
                displayOrder: 3,
                type: 'string',
              },
            ]
          }
      }
    }
  },
  computed: {
    bill (){
      return this.$store.state.data.info
    } 
  },
  components: {
    orderForm,

  },
  
  methods: {
    async findUser() {
      try {
        const user = await Auth.currentAuthenticatedUser()
        this.signedIn = true
        console.log(user)
      } catch(err) {
        this.signedIn = false
      }
    }
  },
  created() {
    this.findUser()
    AmplifyEventBus.$on('authState', info => {
      if(info === "signedIn") {
        this.findUser()
      } else {
        this.signedIn = false
      }
    })
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.logo {
  margin-bottom: 30px;
  max-width: 400px;
}
  .text {
    font-size: 14px;
  }
  .item {
    margin-bottom: 18px;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .box-card {
    width: 90%;
  }
</style>