<script>
    import CusSection from "./CusSection.svelte";
</script>

<svelte:head>
    <title>Hamid Saib's Portfolio | Homepage</title>
    <meta name="description" content="Abdel Hamid Saib's portfolio showing his works, skills and story.">
</svelte:head>

<header class="BG-Custom_Gradiant flex flex-col text-center items-center pt-3">
    <h1 class="text-white xl:text-5xl xl:max-w-6xl font-sans font-bold md:max-w-4xl md:text-3xl">Hi! I'm Abdel Hamid
        Saib. A student learning to become a developer in games, web and desktop. </h1>
    <img src="/Hero_Desktop.webp" alt="Image showing Hamid with icons around him.">
</header>
<div >
    <CusSection title="about">
        <div class="text-center">
            <h3 class="text-3xl pb-3">Who am I?</h3>
            <div class="grid grid-cols-2 divide-x-2 pb-3 text-left max-w-2xl">
                <div class="pr-3 align-middle">
                    <ul class="list-disc">
                        <li>Born: 10th July 2005</li>
                        <li>Study at <a class="text-blue-500"
                                        href="https://www.hogeschoolrotterdam.nl/opleidingen/bachelor/creative-media-and-game-technologies/voltijd/">Hogeschool
                            Rotterdam</a></li>
                    </ul>
                </div>
                <div class="text-center pl-3">
                    I am a <span class="text-red-500">Creative Media and Game Technology</span> student at Hogeschool
                    Rotterdam. I started programming at the age of 8 when i made my first <span class="text-gold">Minecraft Java Plugin</span>.
                    <br>
                    I like working on games, software and learning new tools and libraries.
                </div>
            </div>

            <h3 class="text-3xl pb-3">Tech I like to use</h3>
            <div class="pb-3 flex justify-center space-x-4">

                <a href="https://svelte.dev">
                    <div class="max-w-14 h-16 flex justify-center p-1 bg-white rounded overflow-hidden shadow-lg shadow-amber-400 border border-2 border-gold">
                        <div class="w-12">
                            <img src="/svelte-icon.webp" alt="Svelte Icon">
                        </div>
                    </div>
                </a>

                <a href="https://archlinux.org">
                    <div class="max-w-14 h-16 flex justify-center p-1 bg-white rounded overflow-hidden shadow-lg shadow-amber-400 border border-2 border-gold">
                        <div class="w-12">
                            <img src="/arch-linux-icon.webp" alt="Arch Linux Icon">
                        </div>
                    </div>
                </a>

                <a href="https://laravel.com">
                    <div class="max-w-14 h-16 flex justify-center p-1 bg-white rounded overflow-hidden shadow-lg shadow-amber-400 border border-2 border-gold">
                        <div class="w-12">
                            <img src="/laravel-icon.webp" alt="Laravel Icon">
                        </div>
                    </div>
                </a>

                <a href="https://nodejs.org/en">
                    <div class="max-w-14 h-16 flex justify-center p-1 bg-white rounded overflow-hidden shadow-lg shadow-amber-400 border border-2 border-gold">
                        <div class="w-12">
                            <img src="/NodeJS-icon.webp" alt="NodeJS Icon">
                        </div>
                    </div>
                </a>

                <a href="https://unity.com">
                    <div class="max-w-14 h-16 flex justify-center items-center p-1 bg-white rounded overflow-hidden shadow-lg shadow-amber-400 border border-2 border-gold">
                        <div class="w-12">
                            <img src="/Unity-Icon.webp" alt="Unity Icon">
                        </div>
                    </div>
                </a>

            </div>

            <h3 class="text-3xl">Hobbies</h3>
        </div>
    </CusSection>

    <CusSection title="works">

    </CusSection>

    <CusSection title="skills">

    </CusSection>

    <CusSection title="cv">

    </CusSection>

    <CusSection title="contact">

    </CusSection>
</div>
