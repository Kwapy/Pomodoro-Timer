<script>
    import { breakMinutes_value} from "../stores/store";

    let breakMinutes;
    breakMinutes_value.subscribe(value => {
    breakMinutes = breakMinutes_value;
    })
    

</script>