<script lang="ts">
  import { goto } from "$app/navigation";
  import { prediction } from "$lib/stores/prediction";

  let fileSelected: string | null;
  let image: File | null;
  let loading: boolean = false;
  let err_message = "";

  function handleFile(
    e: Event & {
      currentTarget: EventTarget & HTMLInputElement;
    }
  ): void {
    const target = e.currentTarget;
    if (!target.files) return;

    image = target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = (e: ProgressEvent<FileReader>) => {
      fileSelected = e.target?.result as string;
    };
  }

  function handleSubmit(
    event: SubmitEvent & {
      currentTarget: EventTarget & HTMLFormElement;
    }
  ) {
    const formData = new FormData();
    formData.append("image", image!, image!.name);
    // return console.log(formData);
    loading = true;
    fetch("/api/predict", {
      method: "POST",
      body: formData,
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.error) {
          err_message = data.error;
        } else {
          //   $state.prediction = data.prediction;
          prediction.set(data.prediction);
          goto("/result");
        }
      })
      .catch((err) => {
        err_message = "Error Processing image";
      })
      .finally(() => (loading = false));
  }
</script>

<svelte:head>
  <title>FlickID Beta|Image</title>
  <meta
    name="description"
    content="FlickId is a risk assessment tool for monkeypox."
  />
</svelte:head>

<form
  on:submit|preventDefault={handleSubmit}
  class="place-items-center grid grid-cols-6 gap-3 space-y-6 p-5 md:p-0 md:h-[90vh] lg:h-full"
>
  <a
    href="/"
    class="link mt-4 text-center col-span-6 -order-1"
    >Back</a
  >
  <aside
    class="col-span-6 order-2 md:order-1 md:col-span-3"
  >
    <p>
      Select an image of any rashes that have appeared on
      your skin. <b>(optional)</b>
    </p>

    <label class="form-control w-full max-w-xs">
      <div class="label">
        <span class="label-text-alt">Pick a file</span>
      </div>
      <input
        type="file"
        accept="image/*"
        on:change={(e) => handleFile(e)}
        class="file-input file-input-bordered w-full max-w-xs"
      />
    </label>
  </aside>

  <aside
    class="col-span-6 order-1 md:order-2 md:col-span-3"
  >
    <div class="rounded-lg overflow-hidden mx-auto">
      <img
        class="w-full h-full aspect-square mx-auto"
        src={fileSelected ??
          "https://via.placeholder.com/300?text=FlickId+Beta"}
        alt="The selected file"
      />
    </div>
  </aside>

  <div class="col-span-6 mx-auto order-3">
    {#if err_message}
      <p class="text-error">{err_message}</p>
    {/if}
    <button
      type="submit"
      disabled={loading || !fileSelected}
      class="btn btn-block mx-auto btn-success text-white max-w-xl"
    >
      {#if loading}
        <span class="loading loading-spinner"></span>
      {/if}
      Process Image
    </button>
  </div>
</form>
