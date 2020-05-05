<template>
  <div class="home">
    <h1>{{ message }}</h1>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      message: "Welcome to Arbys!",
      student: {},
    };
  },
  created: function() {
    // axios.get("/api/students" + this.$route.params.id).then(response => {
    //   this.students = response.data;
    // });
    return { student.create( 
      first_name: "John",
      last_name: "Smith",
      email: "smith@example.com",
      password_digest: "password",
      phone_number: "333 444-5555",
      short_bio: "Was was a man from nantucket",
      linkedin_url: "linkedin.com/jsmith",
      twitter_handle: "smithers@twitter.com",
      personal_website: "koala.com",
      resume_url: "jsmithresumes.com",
      github_url: "github.com/josmi",
      photo: "https://thenypost.files.wordpress.com/2019/11/godzilla-34.jpg?quality=90&strip=all&w=618&h=410&crop=1")
    };
  },

  methods: {},
};
</script>
