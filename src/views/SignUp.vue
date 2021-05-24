<template
  ><div>
    <h1>회원가입</h1>
    <amplify-sign-up v-bind:signUpConfig="signUpConfig"></amplify-sign-up>
  </div>
</template>

<script>
export default {
  name: 'SignUp',
  data() {
    return {signUpConfig: {}};
  },
};
</script>

<style scoped></style>
