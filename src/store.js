import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import axios from 'axios'

async function loadFromGitlab(path) {
    const cfg = {
        headers: {
            'PRIVATE-TOKEN': 'glpat-TXfsvETTAfiaJ_UApvzS',
        },
    };
    const resp = await axios.get('http://gitlab.dev.local/api/v4/'+path, cfg);
    return resp.data;
}

async function loadLabel(prefix) {
    const data = await loadFromGitlab(`groups/mcp-development/labels?only_group_labels=true&search=${prefix}::`)
    // console.log(data);
    return data.map((item) => {
        // console.log(item);
        [, item.prefix, item.value] = item.name.match(/^(\w+)::(.*)$/) ?? [];
        return item;
    });
};

async function loadApps() {
    const data = await loadFromGitlab(`groups/mcp-development%2Fmcp-app/projects`)
    // console.log(data);
    return data;
}

export const useGitlabStore = defineStore('gitlab', () => {
    const quaps = ref([]);
    const prios = ref([]);
    const teams = ref([]);
    const projects = ref([]);
    const apps = ref([
        { name: 'testprojekt' },
        { name: 'testprojekt2' },
    ]);

    loadLabel('quap').then((data) => quaps.value = data);
    loadLabel('Prio').then((data) => prios.value = data);
    loadLabel('Team').then((data) => teams.value = data);
    loadLabel('Projekt').then((data) => projects.value = data);
    loadApps().then((data) => apps.value = data);

    return { quaps, prios, teams, projects, apps }
})