<script setup>
          import {ref, computed, reactive, nextTick} from 'vue';
          import error from "../Error/Error.vue";
          import RadioButton from 'primevue/radiobutton';

          const form = reactive({
            ticket: '#21423',
            from: 'Joey',
            date: '',
            description: '',
            tags: ['hello', 'world']
          })
         
          const date = (e) => {
            form.date = e.target.value;
          }

          const description = (e) => {
            form.description = e.target.value
          }

          const onSubmit = (e) => {
            e.preventDefault();
            console.log(form.date);
            console.log(form.description);
          }

          let selectedTeam =  ref(null);
          let selectedPrio =  ref(null);
          let selectedProject = ref(null);


          let teams = reactive(
            [
                {team: 'Team 1'},
                {team: 'Team 2'},
                {team: 'Team 3'},
                {team: 'Team 4'},
                {team: 'Team 5'}
             ]
          )
            let  cities = reactive([
              {name: 'New York', code: 'NY'},
              {name: 'Rome', code: 'RM'},
              {name: 'London', code: 'LDN'},
              {name: 'Istanbul', code: 'IST'},
              {name: 'Paris', code: 'PRS'}
            ])

          let projects = reactive([
                {project: 'project 1'},
                {project: 'project 2'},
                {project: 'project 3'},
                {project: 'project 4'},
          ])

          let prios = reactive(
          [
            {prio: 'prio 1'},
            {prio: 'prio 2'},
            {prio: 'prio 3'},
            {prio: 'prio 4'},
            {prio: 'prio 5'}
          ]
          )

          let  selected = 'A';
          let options = [
            { item: 'A', name: 'Geplant' },
            { item: 'B', name: 'ungeplant' },

          ]

</script>
<template>
   <div class="main">
        <div class="inside">
            <div>
                <b-form>
                    <div class="row">

                        <div class="col-md-6">
                            <b-form-group id="input-group-1" label="Ticket Number" label-for="input-1">
                                <input type="string" :value="form.ticket" disabled required />
                            </b-form-group>
                        </div>

                        <div class="col-md-6">
                            <b-form-group id="input-group-2" label="From" label-for="input-1">
                                <input type="string" :value="form.from" disabled required />
                            </b-form-group>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6">
                            <b-form-group id="input-group-1" label="Description" label-for="input-1">
                                <textarea type="string" @input="description" :value="form.description" required />
                            </b-form-group>
                        </div>

                      <div class="col-md-6">
                        <label for="team">Team</label>
                        <Dropdown id="team" class="label-team" v-model="selectedTeam" :options="teams" optionLabel="team" placeholder="Select a Team" />
                      </div>
                    </div>

                    <div class="row">

                      <div class="col-md-6">
                        <label for="team">Project</label>
                        <Dropdown class="label-team-two" v-model="selectedProject" :options="projects" optionLabel="project" :filter="true" placeholder="Select a project" :showClear="true">
                          <template #value="slotProps">
                            <div class="p-dropdown-car-value" v-if="slotProps.value">
                              <span>{{slotProps.value.project}}</span>
                            </div>
                            <span v-else>
                                        {{slotProps.placeholder}}
                                    </span>
                          </template>
                          <template  #option="slotProps">
                            <div class="p-dropdown-car-option okay">
                              <span>{{slotProps.option.project}}</span>
                            </div>
                          </template>
                        </Dropdown>
                      </div>


                        <div class="col-md-6">
                          <label for="team">Priority</label>
                          <Dropdown id="prio" class="label-team" v-model="selectedPrio" :options="prios" optionLabel="prio" placeholder="Select priority" />
                        </div>

                    </div>

                    <div class="row project">

                      <div class="col-md-6">
                        <label for="team">Status</label>
                        <b-form-radio-group
                            v-model="selected"
                            :options="options"
                            class="mb-3"
                            value-field="item"
                            text-field="name"
                            disabled-field="notEnabled"
                        ></b-form-radio-group>
                      </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12 mt-10 text-center">
                             <b-button @click="onSubmit" class="save" type="submit" >Submit</b-button>
                             <b-button @click="onReset" class="cancel" type="reset">Reset</b-button>
                        </div>

                    </div>

                </b-form>
            </div>
        </div>
   </div>
</template>
<style scoped lang="scss">
    @import '../../sass/variables.scss';

    .kkk {
      padding: 0rem 2rem;
      font-size: 1.3rem;
    }
    .main {
        background-color: $background-color;
        min-height: 60vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .inside {
            @include width-margin;
        }
        input, select, .label-team, textarea {
            width: 100%;
            padding: 1.5rem 0rem 1.5rem 1rem;
            border: 1px solid $input-background;
            background-color: $input-background;
            border-radius: 5px;
            outline: none;
            font-size: 1.2rem;
        }
         textarea {
           padding: 1rem 0rem 1rem 1rem;
         }
        .label-team-two {
            width: 100%;
            border: 1px solid $input-background;
            background-color: $input-background;
            border-radius: 5px;
            outline: none;
            font-size: 1.2rem;
            padding: 1.5rem 0rem 1.5rem 1rem;
            i {
                border: 1px solid red!important;
            }
        }
        #input-group-1,
        #input-group-2 {
            font-weight: 800;
        }
        .save, 
        .cancel {
            outline: none;
            background-color: $btn-color-nav;
            color: white;
            padding: 1rem 2rem;
            border-radius: 5px;
            font-size: 1rem;
            cursor: pointer;
            font-weight: 800;
            border: 1px solid $btn-color-nav;
            margin-top: 3rem;
        }
        .save {
            margin-right: 2rem;
        }
        .cancel {
            background-color: transparent;
            color: $btn-color-nav;
        }
        label {
            margin-bottom: .5rem;
            font-weight: 800;
        }

        .project {
            margin-top: 1rem;
        }

        .select-prio{
            width: 100%;
            height: 100%;
            margin: 0rem 1rem;
        }


      .green {
        background: green;
      }
      .blue {
        background: blue!important;
        padding: 1rem;
      }
        
    }

</style>