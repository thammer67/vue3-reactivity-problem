import { defineStore } from 'pinia'

export const useProjectStore = defineStore('projectStore', {
    state: ()=> ({
        projectList: [ 
            {
                "id": 33, 
                "name": "A New Hope",
                "rating": "9"
            }, 
            {
                "id": 38, 
                "name": "Empire Strikes Back",
                "rating": "10"
            } 
        ]
    }),
    actions: {
        getProjects() {
            return this.projectList
        },
        getProjectById(id) {
            return this.projectList.find(p => p.id == id)
        },
        async createProject(project) {
            project.id = this.projectList.length + 1
            this.projectList.push(project)
            return true
        },
        async updateProject(formData) {
            console.log("in updateProject, formData: ", formData)
            const idx = this.projectList.findIndex(p=> p.id == formData.id)
            this.projectList[idx] = formData
            return true
        }
    }
})
