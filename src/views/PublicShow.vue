<template>
  <div class="container">
    <img v-bind:src = "student.photo" width="600" alt />
    <h2>{{student.first_name}}</h2>
    <h2>{{student.last_name}}</h2>
    <p>{{student.email}}</p>
    <p>{{student.phone_number}}</p>
    <p>{{student.short_bio}}</p>
    <p>{{student.linkedin_url}}</p>
    <p>{{student.twitter_handle}}</p>
    <p>{{student.personal_website}}</p>
    <p>{{student.resume_url}}</p>
    <p>{{student.github_url}}</p>
    <p>{{student.education.start_date}}</p>
    <p>{{student.education.end_date}}</p>
    <p>{{student.education.degree}}</p>
    <p>{{student.education.university_name}}</p>
    <p>{{student.education.details}}</p>
    <p>{{student.experience.start_date}}</p>
    <p>{{student.experience.end_date}}</p>
    <p>{{student.experience.job_title}}</p>
    <p>{{student.experience.company_name}}</p>
    <p>{{student.experience.details}}</p>
    <p>{{student.project.name}}</p>
    <p>{{student.project.description}}</p>
    <p>{{student.project.url}}</p>
    <p>{{student.project.screenshot}}</p>
    <p>{{student.skill.skill_name}}</p>
    <div>
      <router-link to="/students">Back to all resumes</router-link>
    </div>

  </div>
</template>
<script>
import axios from "axios";
export default {
  data: function() {
    return {
      student: {},
    };
  },
  created: function() {
    axios.get("/api/students/" + this.$route.params.id).then(response => {
      this.student = response.data;
    });
  },
};
</script>