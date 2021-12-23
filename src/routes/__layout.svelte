
<script>
import Nav from "../components/Nav.svelte";
import Index from "./index.svelte";
</script>

<Nav></Nav>
<slot></slot>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>