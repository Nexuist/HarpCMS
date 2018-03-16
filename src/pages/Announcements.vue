<template>
    <JSONForm page="index">
        <JSONSimpleTable name="Annoucements" help="These are shown under the navigation bar on the home page." path="['announcements']" maxlength="170">
        </JSONSimpleTable>
    </JSONForm>
</template>

<script>
import JSONForm from "../components/JSONForm.vue";
import JSONSimpleTable from "../components/JSONSimpleTable.vue";

export default {
  components: {
    JSONForm,
    JSONSimpleTable
  }
};
</script>
