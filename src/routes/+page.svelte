<script lang="ts">
  const symptoms = [
    "Fever",
    "Rash",
    "Chills",
    "Swollen lymph nodes (swelling in the neck)",
    "Exhaustion",
    "Muscle aches and backache",
    "Headache",
    "Respiratory symptoms (e.g., sore throat, nasal congestion, or cough)",
  ];

  let selected: string[] = [];
</script>

<svelte:head>
  <title>FlickID Beta</title>
  <meta
    name="description"
    content="FlickId is a risk assessment tool for monkeypox."
  />
</svelte:head>

<section
  class="min-h-screen py-5 space-y-5 px-5 max-w-xl mx-auto"
>
  <header class="prose text-center mx-auto">
    <h1>
      FlickId <span class="text-warning text-sm">Beta</span>
    </h1>
    <div class="card card-compact bg-secondary">
      <div class="card-body text-secondary-content prose">
        <h2 class="card-title">What is this?</h2>
        <p class="text-lg">
          FlickId is a risk assessment tool for monkeypox.
        </p>
      </div>
    </div>
  </header>

  <section class="space-y-4">
    <div
      class="card card-bordered card-compact mx-auto bg-gradient-to-br from-primary-content to-secondary-content text-primary"
    >
      <div class="card-body">
        <h2 class="card-title">Symptomatology</h2>
        <div class="form-control">
          {#each symptoms as symptom, i}
            <label class="label gap-4 justify-normal">
              <input
                type="checkbox"
                bind:group={selected}
                value={symptom}
                class="checkbox border-orange-400 [--chkfg:orange] [--chkbg:theme(colors.indigo.600)] checked:border-indigo-600"
              />
              <span class="label-text">{symptom}</span>
            </label>
          {/each}
        </div>
      </div>
    </div>
    <a href="/image" class="btn btn-block btn-info">
      Next
    </a>
  </section>
</section>
