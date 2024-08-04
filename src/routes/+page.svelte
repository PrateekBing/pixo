<script>
    export let data;
    let images = data?.result?.results ?? [];
</script>

<style>
h1 {
    text-align: center;
    color: black;
}
h1 {
    font-family: Playwrite CO;
    font-size: 45px;
    margin-top: 20px;
}
</style>


<h1>Pixo</h1>



<!-- <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="">
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="">
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt="">
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt="">
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt="">
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" alt="">
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg" alt="">
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg" alt="">
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg" alt="">
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg" alt="">
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg" alt="">
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg" alt="">
    </div>
</div>



<div class="grid grid-cols-2 md:grid-cols-4 gap-4 m-10">
    {#each Array.from({ length: Math.ceil(images.length / 3) }) as _, colIndex}
        <div class="grid gap-4">
            {#each images.slice(colIndex * 3, colIndex * 3 + 3) as image}
                <div>
                    <img class="h-auto max-w-full rounded-lg" src={images[0].link}>
                </div>
            {/each}
        </div>
    {/each}
</div> -->

<div class="flex flex-row flex-wrap items-center justify-center min-h-screen gap-4">
    {#each images.slice().reverse() as image, index}
        <div class="my-2">
            <img alt="e" class="h-auto max-w-full rounded-lg" src={images[images.length - 1 - index].link}>
        </div>
    {/each}
</div>

