/**
 * @Author: meganmhl
 * @Description: /views/Landing.vue is the initial landing page of the application. It consists of Header, Main, and Footer.
 *              Header has some in-page anchors and login/signup button.
 *              Main is divided into abstraction, our services, and about us.
 *              Footer has some in-page anchors and useful links.
 * @Date: 2022-04-30 13:06:30
 * @Last Modified by:   meganmhl
 * @Last Modified time: 2022-05-06 20:11:50
 */

<template>
  <div>
    <!-- header: top navigation bar -->
    <header class="banner padding-content" id="Home">
      <img src="../assets/logo.png" alt="logo" class="logo-header" />
      <nav class="nav-header">
        <ul class="ul-header">
          <li><a href="#Home" class="link">Home</a></li>
          <li><a href="#Service" class="link">Our Services</a></li>
          <li><a href="#About" class="link">About us</a></li>
        </ul>
      </nav>
      <span style="width:210px;">
        <Button label="Login" class="p-button-secondary p-button-rounded" style="width:95px; margin:5px;"
          @click="tologin()" />
        <Button label="Sign Up" class="p-button-rounded" style="width:95px; margin:5px;" @click="tosignup()" />
      </span>
    </header>
    <!-- Main -->
    <main class="padding-content">
      <!-- Section: application abstraction -->
      <section class="abstract-section">
        <article class="abstract-header">
          <h1>Facilitate your online learning journey</h1>
          <p class="abstract-text">
            CUHK the Explorer, an application that helps you to manage all the daily problems and issues on the same
            website. Makes your online learning journey more fruitful!
          </p>
          <Button label="Get Started" class="p-button-rounded" style="margin-top:10px;" @click="tosignup()" />
        </article>
        <div class="abstract-picture">
          <img src="../assets/images/landingimg.png" alt="pic" class="abstract-image" />
        </div>
      </section>
      <!-- Section: Our services -->
      <section class="services-section" id="Service">
        <div class="services-div">
          <h2 class="our-service-header">Our services</h2>
          <p class="our-service-text">
            We provide the best choices for you. Here are some core features in out first stage of development. All of
            these are free of charge and available to all CUHK members.
          </p>
        </div>
        <div class="all-features">
          <!-- Features: Course Evaluation -->
          <article class="feature-section">
            <i class="pi pi-star-fill" style="font-size: 2rem; margin-left:1rem "></i>
            <h3 class="feature-header">Course Evaluation</h3>
            <p class="feature-text">
              Students can rate and comment on the courses which they have taken for the reference of other students
              interested in the courses.
            </p>
          </article>
          <!-- Features: Instant Chat -->
          <article class="feature-section">
            <i class="pi pi-comments" style="font-size: 2rem; margin-left:1rem"></i>
            <h3 class="feature-header">Instant Chat</h3>
            <p class="feature-text">
              Students can chat and talk to each other about their studies, students can also ask questions to
              instructors or TAs instantly.
            </p>
          </article>
          <!-- Features: Forum -->
          <article class="feature-section">
            <i class="pi pi-users" style="font-size: 2rem; margin-left:1rem"></i>
            <h3 class="feature-header">Forum</h3>
            <p class="feature-text">
              Students can discuss their studies or school life here. Become a member of the CUHK family.
            </p>
          </article>
          <!-- Features: Calendar -->
          <article class="feature-section">
            <i class="pi pi-calendar" style="font-size: 2rem; margin-left:1rem"></i>
            <h3 class="feature-header">Calendar</h3>
            <p class="feature-text">
              Students can view their class timetable in this semester for a better planning. It updates automatically
              whenever you changes your courses
            </p>
          </article>
        </div>
      </section>
      <!-- Section: About us -->
      <section>
        <h2 class="about-us-header" id="About">About Us</h2>
        <div class="about-us-div">
          <article class="about-us-article">
            <div class="about-us-article-div">
              <p class="about-us-text">
                We are the student studying CSCI3100. This is our project on software product development. We hope this
                website could be helpful for CUHK students to manage their studies, especially in such a pandemic time.
                We are from different majors and specialised in various aspects.
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
    <!-- Footer: anchors and useful links -->
    <footer class="padding-content">
      <div class="footer-nav">
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
              <li><a href="http://proj.cse.cuhk.edu.hk/csci3100/index.html" target="_blank" class="links">CSCI3100
                  Course Content</a></li>
              <li><a href="https://www.cuhk.edu.hk/" target="_blank" class="links">CUHK Official Website</a></li>
            </div>
          </ul>
        </nav>
      </div>
      <div class="footer-rights">
        <p class="footer-rights-text">© CUTE. All Rights Reserved</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Landing",
  methods: {
    //go to login
    tologin() {
      this.$router.push("/login");
    },
    //go to signup
    tosignup() {
      this.$router.push("/registration");
    },
  },
};
</script>

<style scoped>
body {
  font-size: 1.2em;
  width: 1440px;
  margin: auto;
}

ul {
  display: flex;
  list-style: none;
}

li {
  cursor: pointer;
}

.padding-content {
  padding-left: 8rem;
}

/* -- Header -- */
.banner {
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

.ul-header>li {
  padding: 1rem;
}

/* Abstract */
.abstract-section {
  display: flex;
  overflow: hidden;
}

.abstract-image {
  width: 700px;
}

.abstract-header {
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

.abstract-text {
  margin-bottom: 1rem;
  text-align: justify;
}

.abstract-picture {
  width: 65%;
  margin-top: 7rem;
  padding-left: 3rem;
}

/* Our Service */
.services-div {
  margin: auto;
  width: 60%;
  border: solid 2px #808080;
  padding: 2rem;
}

.services-section {
  margin-top: 5rem;
  margin-bottom: 5rem;
}

.our-service-header {
  font-size: 3rem;
  font-weight: 50;
  margin-bottom: 1rem;
  text-align: center;
}

.our-service-text {
  text-align: justify;
}

.all-features {
  margin-top: 5rem;
  margin-bottom: 5rem;
  display: flex;
  width: 92%;
}

.feature-section {
  padding: 1rem;
}

.feature-header,
.feature-text {
  margin: 1rem;
  text-align: justify;
}

/* About Us */
.about-us-div {
  width: 92%;
}

.about-us-header {
  margin-bottom: 1rem;
  text-align: center;
  margin-left: -5rem;
}

.about-us-article-div {
  padding: 1rem;
  font-size: 0.9em;
}

.about-us-text {
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

.footer-nav {
  display: flex;
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

.footer-rights {
  text-align: right;
  color: rgb(255, 255, 255);
}

.footer-rights-text {
  margin-top: 1.5rem;
  padding-top: 1rem;
  font-size: 0.9em;
}

.links {
  text-decoration: none;
  color: #FFFFFF;
}

.link {
  text-decoration: none;
  color: inherit;
}
</style>