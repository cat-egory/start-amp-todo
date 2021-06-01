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
    return {
      signUpConfig: {
        defaultCountryCode: '82',
      },
    };
  },
};
</script>

<style scoped></style>
