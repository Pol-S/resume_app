<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div v-for="student in students">
      <img v-bind:src = "student.photo" width="200" alt />
      <h2>
        <b>Name:</b>
        {{ student.first_name }} {{ student.last_name }}
      </h2>
      <p>
        <b>Email:</b>
        {{ student.email }}
        <b>Phone:</b>
        {{ student.phone_number }}
      </p>
      <p>
        <b>Twitter:</b>
        {{ student.twitter_handle}}
      </p>
      <p>
        External Resume Link: {{student.resume_url}}
      </p>
     
      <router-link v-bind:to="`/public_show/${student.id}`"><vs-button type="gradient">Find out more!</vs-button></router-link>

    </div>

  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      message: "Welcome to Arbys!",

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
        id: 1,
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

      {
        first_name: "Jane",
        last_name: "Smith",
        id: 2,
        email: "smith@email.com",
        password_digest: "password",
        phone_number: "(666) 777-8888",
        short_bio: "Once was a woman from nantucket",
        linkedin_url: "linkedin.com/jsmith",
        twitter_handle: "calamityjane@twitter.com",
        personal_website: "emus.com",
        resume_url: "jsmithresumes.com",
        github_url: "github.com/jasmi",
        photo:
          "https://vignette.wikia.nocookie.net/godzilla/images/b/b6/Toto06.jpg/revision/latest/scale-to-width-down/200?cb=20130812221657",
      },
    ];
  },

  methods: {},
};
</script>
