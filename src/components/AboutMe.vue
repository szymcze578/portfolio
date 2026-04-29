<template>
  <section class="about" id="about">
    <div class="wrap about-grid mx-auto max-w-370 px-4.5 xs:px-[22px] sm:px-8 lg:px-14">
      <header class="about-head reveal">
        <p class="label">— About me —</p>
        <h2>A little about <i>who I am</i> and how I work.</h2>
      </header>
      <div class="about-body reveal">
        <p>
          I'm Szymon Czech, a Junior Software Developer based in Poland. I build web applications
          end-to-end — from clean component-driven interfaces in Vue and Angular to robust Java
          services on the backend.
        </p>
        <p>
          I care about readable code, sensible architecture, and learning something new on every
          project. I enjoy turning fuzzy requirements into shipped features, and I'm always happy to
          ask the questions that take a feature from "works" to "works well."
        </p>
        <p>
          Outside of code, I follow the front-end ecosystem closely, contribute small fixes when I
          can, and tinker with side projects to keep my skills sharp.
        </p>
      </div>
    </div>

    <div class="wrap">
      <div class="about-stats reveal">
        <div class="about-stat">
          <span class="about-stat-num">2+</span>
          <span class="about-stat-lbl">Years of experience</span>
        </div>
        <div class="about-stat">
          <span class="about-stat-num">10+</span>
          <span class="about-stat-lbl">Projects shipped</span>
        </div>
        <div class="about-stat">
          <span class="about-stat-num">3</span>
          <span class="about-stat-lbl">Core technologies</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
/* ---------- About (full-bleed dark section) ---------- */
.about {
  --about-ink: #f4eee5;
  --about-soft: #b8b3aa;
  --about-line: rgba(255, 255, 255, 0.1);
  padding: 110px 0;
  background: #14181f;
  color: var(--about-ink);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  position: relative;
  overflow: hidden;
}
.about::before {
  content: '';
  position: absolute;
  inset: -30% -10% auto auto;
  width: 720px;
  height: 720px;
  background: radial-gradient(circle, rgb(var(--accent-rgb) / 0.18), transparent 60%);
  pointer-events: none;
}
.about::after {
  content: '';
  position: absolute;
  inset: auto auto -30% -10%;
  width: 520px;
  height: 520px;
  background: radial-gradient(circle, rgb(var(--accent-rgb) / 0.1), transparent 60%);
  pointer-events: none;
}
.about > .wrap {
  position: relative;
}
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 64px;
  align-items: start;
}
.about-head .label {
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--about-soft);
  margin: 0 0 18px;
}
.about-head h2 {
  font-weight: 500;
  font-size: clamp(32px, 4vw, 48px);
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin: 0;
  color: var(--about-ink);
}
.about-head h2 i {
  color: var(--accent);
  font-style: normal;
  font-weight: 600;
}
.about-body p {
  font-size: 17px;
  line-height: 1.7;
  color: var(--about-soft);
  margin: 0 0 18px;
}
.about-body p:last-child {
  margin-bottom: 0;
}

/* About: compact stats row */
.about-stats {
  margin-top: 64px;
  padding-top: 40px;
  border-top: 1px solid var(--about-line);
  display: flex;
  justify-content: center;
  gap: 18px;
  flex-wrap: wrap;
}
.about-stat {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--about-line);
  border-radius: var(--radius);
  padding: 22px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  min-width: 180px;
  transition:
    transform 220ms ease,
    background 220ms ease,
    border-color 220ms ease;
}
.about-stat:hover {
  transform: translateY(-2px);
  background: rgba(255, 255, 255, 0.07);
  border-color: rgb(var(--accent-rgb) / 0.5);
}
.about-stat-num {
  font-size: 32px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.01em;
  color: var(--accent);
}
.about-stat-lbl {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--about-soft);
  font-weight: 500;
}
</style>
