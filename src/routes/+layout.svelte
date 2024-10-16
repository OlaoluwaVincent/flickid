<script>
  import "../app.css";
</script>

<main class="grid grid-cols-6">
  <section class="col-span-1">
    <!-- Left Column -->
  </section>
  <section class="col-span-6 md:col-span-4">
    <slot />
  </section>
  <section class="col-span-1">
    <!-- Right Column -->
  </section>
</main>
