import Vue from 'vue'

export enum GlobalEvents {
    UpdateStorage = 'update_storage',
}

export const GlobalEventBus = new Vue()
