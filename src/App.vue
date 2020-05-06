<template>
  <div id="app">
    <div id="nav">
      <vs-navbar      
      color="white"
      text-color="rgba(255,255,255,.6)"
      active-text-color="rgba(0,0,0,1)">
        <div slot="title">
          <vs-navbar-title>
            <h1>RESUMES</h1>
          </vs-navbar-title>
        </div>
        <router-link to="/"><vs-button type="gradient">Home</vs-button></router-link>
      
        <router-link to="/show"><vs-button type="gradient">Show</vs-button></router-link>|
        <router-link to="/update"><vs-button type="gradient">Update</vs-button></router-link>|
        <router-link to="/login"><vs-button type="gradient">Login</vs-button></router-link>
        <router-link to="/about"><vs-button type="gradient">About</vs-button></router-link>
        
        <router-link to="/students"><vs-button type="gradient">All Students</vs-button></router-link>
        
        
      </vs-navbar>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

h1 {
  font-family: Copperplate, "Copperplate Gothic Light", fantasy;
  font-size: 100px;
  font-style: normal;
  font-variant: normal;
  font-weight: 700;
  line-height: 26.4px;
}
h3 {
  font-family: Copperplate, "Copperplate Gothic Light", fantasy;
  font-size: 14px;
  font-style: normal;
  font-variant: normal;
  font-weight: 700;
  line-height: 15.4px;
}
p {
  font-family: Copperplate, "Copperplate Gothic Light", fantasy;
  font-size: 14px;
  font-style: normal;
  font-variant: normal;
  font-weight: 400;
  line-height: 20px;
}
blockquote {
  font-family: Copperplate, "Copperplate Gothic Light", fantasy;
  font-size: 21px;
  font-style: normal;
  font-variant: normal;
  font-weight: 400;
  line-height: 30px;
}
pre {
  font-family: Copperplate, "Copperplate Gothic Light", fantasy;
  font-size: 13px;
  font-style: normal;
  font-variant: normal;
  font-weight: 400;
  line-height: 18.5714px;
}
</style>
