<template>
  <div>
    <header class="bannier padding-content" id="Home">
      <img src="../assets/logo.png" alt="logo" class="logo-header" />
      <nav class="nav-header">
        <ul class="ul-header">
          <li><a href="#Home" class="link">Home</a></li>
          <li><a href="#Service" class="link">Our Services</a></li>
          <li><a href="#About" class="link">About us</a></li>
        </ul>
      </nav>
      <span style="width:210px;">
        <Button label="Login"  class="p-button-secondary p-button-rounded" style="width:95px; margin:5px;" @click="tologin()"/>
        <Button label="Sign Up"  class="p-button-rounded" style="width:95px; margin:5px;" @click="tosignup()"/>
      </span>
    </header>
    <main class="padding-content">
      <section class="next-generation-section">
        <article class="next-generation-article">
          <h1>Facilitate your online learning journey</h1>
          <p class="next-generation-text">
            CUHK the Explorer, an application that helps you to manage all the daily problems and issues on the same website. Makes your online learning journey more fruitful!
          </p>
          <Button label="Get Started"  class="p-button-rounded" style="margin-top:10px;" @click="tosignup()"/>
        </article>
        <div class="next-generation-phones">
          <img
            src="../assets/images/landingimg.png"
            alt="pic"
            class="next-generation-image"
          />
        </div>
      </section>
      <section class="section-why-easybank" id="Service">
        <div class="div-why-easybank">
          <h2 class="title-why-easybank">Our services</h2>
          <p class="text-title-why-easybank">
            We provide to you the best choiches for you. Here are some core features in out first stage of development. All of these are free of charge and available to all CUHK members.
          </p>
        </div>
        <div class="div-icones-why-easybank">
          <article class="article-why-easybank">
            <i class="pi pi-star-fill" style="font-size: 2rem; margin-left:1rem"></i>
            <h3 class="title-icon-why-easybank">Course Evaluation</h3>
            <p class="text-icon-why-easybank">
              Students can rate and comment on the courses which they have taken for the reference of other students interested in the courses.
            </p>
          </article>
          <article class="article-why-easybank">
            <i class="pi pi-comments" style="font-size: 2rem; margin-left:1rem"></i>
            <h3 class="title-icon-why-easybank">Instant Chat</h3>
            <p class="text-icon-why-easybank">
              Students can chat and talk to each other about their studies, students can also ask questions to instructors or TAs instantly.
            </p>
          </article>
          <article class="article-why-easybank">
            <i class="pi pi-users" style="font-size: 2rem; margin-left:1rem"></i>
            <h3 class="title-icon-why-easybank">Forum</h3>
            <p class="text-icon-why-easybank">
              Students can discuss their studies or school life here. Become a member of the CUHK family.
            </p>
          </article>
          <article class="article-why-easybank">
            <i class="pi pi-calendar" style="font-size: 2rem; margin-left:1rem"></i>
            <h3 class="title-icon-why-easybank">Calender</h3>
            <p class="text-icon-why-easybank">
              Students can view their class timetable in this semester for a better planning. It updates automatically whenever you changes your courses
            </p>
          </article>
        </div>
      </section>
      <section>
        <h2 class="latest-title" id="About">About Us</h2>
        <div class="div-latest">
          <article class="latest-article">
            <div class="latest-intro-article">
              <p class="latest-text">
                We are the student studying CSCI3100. This is our project on software product development. We hope this website could be helpful for CUHK students to manage their studies, especially in such a pandemic time. We are from different majors and specialised in various aspects.
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
    <footer class="padding-content">
      <div class="logo-emote-nav">
        <div class="logo-emote">
          <div class="emote-footer">
            
          </div>
        </div>
        <nav>
          <ul class="ul-footer">
            <div class="ul-part-footer">
              <li><a href="#Home" class="links">Home</a></li>
              <li><a href="#Service" class="links">Our Services</a></li>
              <li><a href="#About" class="links">About us</a></li>
            </div>
            <div class="ul-part-footer">
              <li><a href="https://cusis.cuhk.edu.hk/" target="_blank" class="links">CUSIS</a></li>
              <li><a href="https://blackboard.cuhk.edu.hk/" target="_blank" class="links">Blackboard</a></li>
              <li><a href="http://proj.cse.cuhk.edu.hk/csci3100/index.html" target="_blank" class="links">CSCI3100 Course Content</a></li>
              <li><a href="https://www.cuhk.edu.hk/" target="_blank" class="links">CUHK Official Website</a></li>
            </div>
          </ul>
        </nav>
      </div>
      <div class="button-easy-rights">
        <p class="text-easy-rights">© CUTE. All Rights Reserved</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Landing",
  methods: {
    tologin() {
      this.$router.push("/login");
    },
    tosignup() {
      this.$router.push("/registration");
    },
  },
};
</script>

<style scoped>
body{
  font-size: 1.2em;
  width: 1440px;
  margin: auto;
}
ul{
  display: flex;
  list-style: none;
}
li{
  cursor: pointer;
}
.padding-content {
  padding-left: 8rem;
}
/* -- Header -- */
.bannier {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin-right: 8rem;
  margin-left: 8rem;
}
.logo-header {
  height: 4rem;
}
.ul-header > li {
  padding: 1rem;
}
/* next-generation */
.next-generation-section {
  display: flex;
  overflow: hidden;
}
.next-generation-image {
  width: 700px;
}
.next-generation-article {
  display: flex;
  flex-direction: column;
  padding-top: 10rem;
  padding-left: 1rem;
}
h1 {
  font-size: 4rem;
  font-weight: 50;
  margin-bottom: 1rem;
}
.next-generation-text {
  margin-bottom: 1rem;
  text-align: justify;
}
.next-generation-phones {
  width: 65%;
  margin-top: 7rem;
  padding-left: 3rem;
}
/* Why easybank */
.div-why-easybank {
  margin: auto;
  width: 60%;
  border: solid 2px #808080;
  padding:2rem;
}
.section-why-easybank {
  margin-top: 5rem;
  margin-bottom: 5rem;
}
.title-why-easybank {
  font-size: 3rem;
  font-weight: 50;
  margin-bottom: 1rem;
  text-align: center;
}
.text-title-why-easybank {
  text-align: justify;
}
.div-icones-why-easybank {
    margin-top: 5rem;
  margin-bottom: 5rem;
  display: flex;
  width: 92%;
}
.article-why-easybank {
  padding: 1rem;
}
.icon-why-easybank,
.title-icon-why-easybank,
.text-icon-why-easybank {
  margin: 1rem;
  text-align: justify;
}
/* Latest article */
.div-latest {
  width: 92%;
}
.latest-title {
  margin-bottom: 1rem;
  text-align: center;
  margin-left: -5rem;
}
.latest-intro-article {
  padding: 1rem;
  font-size: 0.9em;
}
.latest-text {
  text-align: justify;
}
/* Footer */
footer {
  background-color: #0075be;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 8rem;
  margin-top: 3rem;
}
.logo-footer,
.emote-footer {
  margin: 2rem 1rem 2rem 0.5rem;
}
.logo-emote-nav {
  display: flex;
}
.logo-emote {
  display: flex;
  flex-direction: column;
}
.one-emote-footer {
  cursor: pointer;
  padding: 0.5rem;
  height: 2.5rem;
}
.ul-footer {
  display: flex;
  margin: 2rem;
  color: rgb(255, 255, 255);
}
.ul-part-footer {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 8rem;
  margin-left: 4rem;
  margin-right: 4rem;
}
.button-easy-rights {
  text-align: right;
  color: rgb(255, 255, 255);
}
.text-easy-rights {
  margin-top: 1.5rem;
  padding-top: 1rem;
  font-size: 0.9em;
}
.links {
  text-decoration:none; 
  color:#FFFFFF;
}
.link {
  text-decoration:none; 
  color:inherit;
}
</style>