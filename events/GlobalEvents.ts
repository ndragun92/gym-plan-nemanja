import Vue from 'vue'

export enum GlobalEvents {
    UpdateStorage = 'update_storage',
    ResetGlobalData = 'reset_global_data',
}

export const GlobalEventBus = new Vue()
