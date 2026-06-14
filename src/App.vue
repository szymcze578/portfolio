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
import Education from './components/Education.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import Footer from './components/Footer.vue'
import Hero from './components/Hero.vue'
import TechnologiesSection from './components/TechnologiesSection.vue'
import TheHeader from './components/TheHeader.vue'
import { education } from '@/data/education'
import { experience } from '@/data/experience'
import { technologies } from '@/data/technologies'
</script>
