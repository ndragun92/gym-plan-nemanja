import Vue from 'vue'

export enum GlobalEvents {
    UpdateStorage = 'update_storage',
    ResetGlobalData = 'reset_global_data',
    StartTimer = 'start_timer',
}

export const GlobalEventBus = new Vue()
