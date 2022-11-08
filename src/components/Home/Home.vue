<script setup>
          import {ref, reactive} from 'vue';
          import i18n from '../../i18n.js';
          const {t} = i18n.global;
          import Form from "../Form/Form.vue"
          import Button from "../Button/Button.vue"
          import GitlabPrio from "../GitLabPrio/GitlabPrio.vue"
          import GitlabLabel from "../GitLabLabel/GitLabLabel.vue"

          const form = reactive({
            ticket: '#21423',
            from: 'Joey',
            date: '',
            description: '',
            tags: ['hello', 'world']
          })

          let selectedTeam =  ref(null);
          let selectedPrio =  ref(null);
          let selectedProject = ref(null);
          let selectedProjectNames = ref(null);



          let projects = reactive([
                {project: 'Project::Abrechnung'},
                {project: 'Project::Banking'},
                {project: 'Project::Batchimport'},
                {project: 'Project::Controlcenter'},
                {project: 'Project::Core'},
                {project: 'Project::Deploytool'},
                {project: 'Project::DRK'},
                {project: 'Project::EWS'},
                {project: 'Project::Exportservice'},
                {project: 'Project::HandyPay'},
                {project: 'Project::HPA'},
                {project: 'Project::Kreditkarte'},
                {project: 'Project::Lastschrift'},
                {project: 'Project::Monolith'},
                {project: 'Project::Non-Coding'},
                {project: 'Project::Office-Support'},
                {project: 'Project::Paydirekt'},
                {project: 'Project::Paypal'},
                {project: 'Project::Paysafecard'},
                {project: 'Project::PCI/Kreditkarte'},
                {project: 'Project::PCI/Proxy'},
                {project: 'Project::PCI/Vault'},
                {project: 'Project::PCI/SepaUi'},
                {project: 'Project::PCI/Sessionsearch'},
                {project: 'Project::PCI/Sessiontransfer'},
                {project: 'Project::PCI/Soap-WS'},
                {project: 'Project::Sofort'},
                {project: 'Project::Vorkasse'},
                {project: 'Project::WHH'},
          ])


          let projectsNames = reactive([
              {project: 'Project::mcp-app/ui-web.controlcenter'},
              {project: 'Project::mcp-legacy/sessionsuche'},
              {project: 'Project::mcp-app/api-internal-accesscontrol'},
              {project: 'Project::Docker Images'},
              {project: 'Project::mcp-app/ui-admin-finance'},
              {project: 'Project::RedLabConnect'},
              {project: 'Project::Pci Tickets'},
              {project: 'Project::mcp-legacy/nicolopignatelli-valueobejcts'},
              {project: 'Project::Allgemein'},
              {project: 'Project::mcp-app/api-internal-debit'},
              {project: 'Project::mcp-app/api-finance-sepaservice'},
              {project: 'Project::mcp-module/payment-debit'},
              {project: 'Project::mcp-lib/util-administered'},
              {project: 'Project::mcp-module/custom-drk'},
              {project: 'Project::mcp-module/service-dtiimport'},
              {project: 'Project::mcp-app/ui-fundraising-custom-whh'},
              {project: 'Project::mcp-app/api-internal-paypal'},
              {project: 'Project::mcp-lib/integration-paypal-service'},
              {project: 'Project::mcp-lib/integration-paypal-persistence'},
              {project: 'Project::mcp-app/api-internal-accouting'},
              {project: 'Project::PCI/Proxy'},
              {project: 'Project::PCI/Vault'},
              {project: 'Project::PCI/SepaUi'},
              {project: 'Project::PCI/Sessionsearch'},
              {project: 'Project::PCI/Sessiontransfer'},
              {project: 'Project::PCI/Soap-WS'},
              {project: 'Project::Sofort'},
              {project: 'Project::Vorkasse'},
              {project: 'Project::WHH'},
          ])



          let prios = reactive(
              [
                  {prefix: 'prio', value: '1',  color: 'green', status: 'prio 1'},
                  {prefix: 'prio', value: '2',  color: 'purple', status: 'prio 2'},
                  {prefix: 'prio', value: '3',  color: 'orange', status: 'prio 3'},
                  {prefix: 'prio', value: '4',  color: 'blue', status: 'prio 4'},
              ]
          )

          let teams = reactive(
              [
                  {prefix: 'Team::Abrechnung'},
                  {prefix: 'Team::Controlcenter'},
                  {prefix: 'Team::Kreditkarte'},
                  {prefix: 'Team::Senacor'},
                  {prefix: 'Team::Sepa'}
              ]
          )

          let  selected = 'A';

          let options = [
            { item: 'A', name: t('planned') },
            { item: 'B', name: t('unplanned') },
          ]

          const description = (e) => {
              form.description = e.target.value
          }

          const onSubmit = (e) => {
              e.preventDefault();
          }

</script>

<template>
   <div class="main">
        <div class="inside">
            <div>
                <b-form>
                    <!-- -->
                    <div class="row">
                        <div class="col-md-6">
                            <Form :label="$t('ticketNumber')">
                                <input type="string" :value="form.ticket" disabled required />
                            </Form>
                        </div>
                        <div class="col-md-6">
                            <Form :label="$t('from')">
                                <input type="string" :value="form.from" disabled required />
                            </Form>
                        </div>
                    </div>
                    <!-- -->
                    <div class="row">
                        <div class="col-md-6">
                            <Form :label="$t('description')">
                                <textarea type="string" @input="description" :value="form.description" required />
                            </Form>
                        </div>
                        <div class="col-md-6">
                            <!--<GitlabPrio state="Prio" :prefix="props.option.prefix" :color="props.option.color" :value="props.option.value"/>-->
                            <label for="prio">{{$t('Team')}}</label>
                            <Dropdown id="teams" class="label-team" v-model="selectedTeam" :options="teams" optionLabel="prefix" placeholder="Select Teams">
                                <template #option="props">
                                    <gitlab-label :prefix="props.option.prefix"/>
                                </template>
                            </Dropdown>

                        </div>
                    </div>
                    <!-- -->
                    <div class="row">
                        <div class="col-md-6">
                              <Form :label="$t('project')">
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
                              </Form>
                        </div>
                        <div class="col-md-6">
                            <label for="prio">{{$t('priority')}}</label>
                            <Dropdown id="prio" class="label-team" v-model="selectedPrio" :options="prios" optionLabel="status" placeholder="Select priority">
                                <template #option="props">
                                    <GitlabPrio state="Prio" :prefix="props.option.prefix" :color="props.option.color" :value="props.option.value"/>
                                </template>
                            </Dropdown>
                        </div>
                    </div>

                    <div class="row">
                       <div class="col-md-6">
                           <Form :label="$t('projectName')">
                               <Dropdown class="label-team-two" v-model="selectedProjectNames" :options="projectsNames" optionLabel="projectsNames" :filter="true" placeholder="Select a project Name" :showClear="true">
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
                           </Form>
                       </div>
                    </div>
                    <!-- -->
                    <div class="row project">
                        <div class="col-md-12">
                            <label for="team">{{$t('status')}}</label>
                            <b-form-radio-group  v-model="selected"  :options="options" class="mb-3" value-field="item" text-field="name" disabled-field="notEnabled"></b-form-radio-group>
                      </div>
                    </div>

                    <!-- The input -->


                    <!-- -->
                    <div class="row">
                        <div class="col-md-12 mt-10 text-center">
                            <Button class="save" @click="onSubmit">{{$t('submit')}}</Button>
                            <Button class="cancel" @click="onReset">{{$t('cancel')}}</Button>
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
        margin-top: 10rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .inside {
            @include width-margin;
        }
        input, select, .label-team, textarea,
        .label-team-two {
            width: 100%;
            padding: 1.5rem 0rem 1.5rem 1rem;
            border: 1px solid #DFDFDE;
            background-color: #DFDFDE;
            border-radius: 5px;
            outline: none;
            font-size: 1.2rem;
        }

        textarea {
            padding: 1rem 0rem 1rem 1rem;
        }

        #input-group-1,
        #input-group-2 {
            font-weight: 800;
            color: #4B6587;
        }

        .save, 
        .cancel {
            outline: none;
            background-color: #4B6587;
            color: white;
            padding: 1rem 2rem;
            border-radius: 5px;
            font-size: 1rem;
            cursor: pointer;
            font-weight: 800;
            border: 1px solid #4B6587;
            margin-top: 3rem;
        }
        .save {
            margin-right: 2rem;
        }
        .cancel {
            background-color: transparent;
            color: #4B6587;
        }


        .project {
            margin-top: 1rem;
        }

        .select-prio{
            width: 100%;
            height: 100%;
            margin: 0rem 1rem;
        }
        
    }

</style>