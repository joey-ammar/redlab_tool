<script setup>
          import {ref, computed, reactive, nextTick} from 'vue';

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

          let prio1 = ref('');

          let teams = reactive(
            [
                {team: 'Team 1'},
                {team: 'Team 2'},
                {team: 'Team 3'},
                {team: 'Team 4'},
                {team: 'Team 5'}
             ]
          )
          let prios = reactive(
            [
                {prio1: 'prio 1'},
                {prio2: 'prio 2'},
                {prio3: 'prio 3'},
                {prio4: 'prio 4'},
                {prio5: 'prio 5'}
             ]
          )

          let projects = reactive([
                {project: 'project 1'},
                {project: 'project 2'},
                {project: 'project 3'},
                {project: 'project 4'},
                {project: 'prio 5'}
          ])

          prios.forEach(e => {
            console.log(e.prio1)
            prio1.value = e.prio1
          })

          console.log(prio1.value)

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
                            <b-form-group id="input-group-2" label="Date" label-for="input-1">
                                <input type="string" @input="date" :value="form.date" required />
                            </b-form-group>
                        </div>

                        <div class="col-md-6">
                            <b-form-group id="input-group-1" label="Description" label-for="input-1">
                                <input type="string" @input="description" :value="form.description" required />
                            </b-form-group>
                        </div>

                    </div>

                    <div class="row">
                        <div class="col-md-6">
                            <label for="team">Team</label>
                            <Dropdown id="team" class="label-team" v-model="selectedTeam" :options="teams" optionLabel="team" placeholder="Select a Team" />
                        </div>  
                        <div class="col-md-6">
                            <label for="team">Prio</label>
                            <SelectButton v-model="prios" :options="prios" optionLabel="prio">
                                <template #option="slotProps">
                                    <div class="car-option">
                                        <span class="select-prio">{{slotProps.option.prios}}</span>
                                    </div>
                                </template>
                            </SelectButton>
                        </div> 
                    </div>

                    <div class="row project">
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
    .main {
        background-color: $background-color;
        min-height: 60vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .inside {
            @include width-margin;
        }
        input, select, .label-team {
            width: 100%;
            padding: 1.5rem 0rem 1.5rem 1rem;
            border: 1px solid $input-background;
            background-color: $input-background;
            border-radius: 5px;
            outline: none;
            font-size: 1.2rem;
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
        .car-option  {
            background-color: green;
        }
        
    }

</style>