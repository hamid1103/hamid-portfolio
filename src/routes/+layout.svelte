<script>
    import "../app.css";
</script>

<header class="bg-gray-950">
    <nav class="mx-auto flex max-w-7xl justify-center min-h-12 items-center">
        <div class="flex space-x-6 text-white text-xl">
            <a href="#about" class="hover:text-amber-300 hover:underline hover:underline-offset-4">About</a>
            <a href="#works" class="hover:text-amber-300 hover:underline hover:underline-offset-4">Works</a>
            <a href="#skills" class="hover:text-amber-300 hover:underline hover:underline-offset-4">Skills</a>
            <a href="#cv" class="hover:text-amber-300 hover:underline hover:underline-offset-4">CV</a>
            <a href="#contact" class="hover:text-amber-300 hover:underline hover:underline-offset-4">Contact</a>
        </div>
    </nav>
</header>

<slot/>