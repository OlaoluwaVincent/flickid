<script>
  import { prediction } from "$lib/stores/prediction";
</script>

<section class="prose max-w-xl mx-auto py-8 px-5">
  <h2 class="text-center">Status</h2>
  {#if $prediction == "Normal"}
    <div
      class="card card-bordered bg-info text-info-content"
    >
      <div class="card-body">
        <h4 class="text-center">Hey there</h4>
        <p>
          Hello, it is unlikely that you have Monkeypox.
          However only your doctor can give a confirmed
          diagnosis. <br />
          <span
            >You are advised to continue hand washing and
            following other safety guidelines. Please call
            <b>08011111111</b> for more inquries.</span
          >
        </p>
      </div>
    </div>
  {:else}
    <div
      class="card card-bordered bg-warning text-warning-content"
    >
      <div class="card-body">
        <h4 class="text-center">Hey there</h4>
        <p>
          Hello, your response seems consistent with
          patterns suggestive of monkeypox. However only
          your doctor can give a confirmed diagnosis. <br />
          <span>
            You are advised to continue hand washing and
            following other safety guidelines. Please call
            <b>08011111111</b> for more inquries.</span
          >
        </p>
      </div>
    </div>
  {/if}

  <a
    href="/"
    on:click={() => prediction.set("")}
    class="btn btn-primary btn-primary-content btn-block mt-5"
    >Start Over</a
  >
</section>
