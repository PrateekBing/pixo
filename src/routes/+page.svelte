<script>
    export let data;
    let images = data?.result?.results ?? [];
</script>

<style>
.bebas-neue-regular {
  font-family: "Bebas Neue", sans-serif;
  font-weight: 400;
  font-style: normal;
}
h1 {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 60px;
}
</style>


<div class="h-30 flex flex-row items-center justify-center bg-black px-4 text-center">
    <h1 class="text-white mt-10 mb-10">pixo</h1>
</div>


<div class="flex flex-row flex-wrap items-center justify-center flex-1 gap-7 mt-7">
    {#each images.slice().reverse() as image, index}
        <div class="my-2">
            <img alt="e" class="h-auto max-w-96 rounded-lg" src={images[images.length - 1 - index].link}>
        </div>
    {/each}
</div>

