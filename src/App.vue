<template>
  <TheHeader />
  <Hero />
  <AboutMe />
  <ExperienceSection :model="experience" />
  <Education :model="education" />
  <TechnologiesSection :model="technologies" />
  <Footer />
</template>

<script setup lang="ts">
import AboutMe from './components/AboutMe.vue'
import Footer from './components/Footer.vue'
import TheHeader from './components/TheHeader.vue'
import Hero from './sections/hero/Hero.vue'
import Education from './sections/education/Education.vue'
import ExperienceSection from './sections/experience/ExperienceSection.vue'
import TechnologiesSection from './sections/technologies/TechnologiesSection.vue'
import { education } from './sections/education/education'
import { experience } from './sections/experience/experience'
import { technologies } from './sections/technologies/technologies'
</script>
