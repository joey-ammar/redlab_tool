<script setup>
import Form from './comps/Form.vue'
import Row from './comps/Row.vue'
import Field from './comps/Field.vue'
import GitlabPrio from './comps/GitlabPrio.vue'
import GitlabLabelDropdown from './comps/GitlabLabelDropdown.vue'

import { reactive } from "vue";
const form = reactive({
  ticket: '1234',
  from: 'Joey',
  description: 'Lorem ipsum dolor sit amed',
  project: null,
  team: null,
  prio: 2,
  quap: 'Bug',
  unplanned: false,
});

import {storeToRefs} from "pinia";
import { useGitlabStore } from '@/store.js'
const store = useGitlabStore();
const { quaps, prios, teams, projects } = storeToRefs(store);

</script>

<template>
    <Form>
        <Row>
            <InputText label="ticketNumber" v-model="form.ticket" />
            <Field label="from">
              <InputText v-model="form.from" />
            </Field>
        </Row>
        <Row>
            <Textarea label="description" v-model="form.description" />
        </Row>
        <Row>
            <GitlabLabelDropdown label="project" prefix="Projekt" :options="projects" v-model="form.project" :filter="true" placeholder="chooseProjectLabel" :showClear="true"/>
            <GitlabLabelDropdown label="team" prefix="Team" :options="teams" v-model="form.team" :filter="true" :showClear="true" />
        </Row>
        <Row>
            <GitlabLabelDropdown label="quality" prefix="quap" :options="quaps" v-model="form.quap"/>
            <GitlabLabelDropdown label="priority" prefix="Prio" :options="prios" v-model="form.prio"/>
        </Row>
        <Row>
            <span> <!-- this have to be moved as extra comp -->
              <GitlabPrio color="red" value="ungeplant" />
              <Checkbox v-model="form.unplanned" :binary="true" style="position: relative; top: -1.8rem; left: 0.5rem;"/>

            </span>
            <span />
        </Row>
        <Row>
          {{ form }}
        </Row>
    </Form>


</template>

<style lang="scss">
.field {
  // border: dashed 1px grey;
}
</style>