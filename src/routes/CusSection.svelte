<script>
    export let title;
</script>

<section id={title} class="bg-gray-900 flex flex-col justify-center items-center pt-4 pb-3 ">
    <h2 class="text-3d xl:text-9xl md:text-7xl">{title}</h2>
    <div class="text-white">
        <slot></slot>
    </div>
</section>