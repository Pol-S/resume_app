<template>
  <div class="home">
    <h2>{{ message }}</h2>

  </div>
</template>

<style></style>

<script>
import axios from "axios";
import Vuesax from "vuesax";

export default {
  data: function() {
    return {
      message: "RESUMES!",
      student: {},
      students: [],
    };
  },
  // created: function() {
  // axios.get("/api/students" + this.$route.params.id).then(response => {
  //   this.students = response.data;
  // });

  created: function() {
    this.students = [
      {
        first_name: "John",
        last_name: "Smith",
        email: "smith@example.com",
        password_digest: "password",
        phone_number: "(333) 444-5555",
        short_bio: "Once was a man from nantucket",
        linkedin_url: "linkedin.com/jsmith",
        twitter_handle: "smithers@twitter.com",
        personal_website: "koala.com",
        resume_url: "jsmithresumes.com",
        github_url: "github.com/josmi",
        photo: "https://thenypost.files.wordpress.com/2019/11/godzilla-34.jpg?quality=90&strip=all&w=618&h=410&crop=1",
      },
    ];
    this.student = this.students[0];
  },

  methods: {},
};
</script>
