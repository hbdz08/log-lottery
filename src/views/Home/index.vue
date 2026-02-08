<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import useStore from '@/store'
import HeaderTitle from './components/HeaderTitle/index.vue'
import OptionButton from './components/OptionsButton/index.vue'
import PrizeList from './components/PrizeList/index.vue'
import StarsBackground from './components/StarsBackground/index.vue'
import { LotteryStatus } from './type'
import { useViewModel } from './useViewModel'
import 'vue-toast-notification/dist/theme-sugar.css'

const viewModel = useViewModel()
const { t } = useI18n()
const { setDefaultPersonList, tableData, currentStatus, enterLottery, stopLottery, containerRef, startLottery, continueLottery, quitLottery, isInitialDone, titleFont, titleFontSyncGlobal, drawPrizeName } = viewModel
const globalConfig = useStore().globalConfig
const prizeConfig = useStore().prizeConfig

const { getTopTitle: topTitle, getTextColor: textColor, getTextSize: textSize, getBackground: homeBackground } = storeToRefs(globalConfig)
const { getCurrentPrize: currentPrize } = storeToRefs(prizeConfig)

const isPrizeDetailOpen = ref(false)
function openPrizeDetailPanel() {
    isPrizeDetailOpen.value = true
}
function closePrizeDetailPanel() {
    isPrizeDetailOpen.value = false
}
</script>

<template>
  <HeaderTitle
    :table-data="tableData"
    :text-size="textSize"
    :text-color="textColor"
    :top-title="topTitle"
    :set-default-person-list="setDefaultPersonList"
    :is-initial-done="isInitialDone"
    :title-font="titleFont"
    :title-font-sync-global="titleFontSyncGlobal"
  />
  <div id="container" ref="containerRef" class="3dContainer">
    <OptionButton
      :current-status="currentStatus"
      :table-data="tableData"
      :enter-lottery="enterLottery"
      :start-lottery="startLottery"
      :stop-lottery="stopLottery"
      :continue-lottery="continueLottery"
      :quit-lottery="quitLottery"
    />
  </div>
  <div
    v-if="currentStatus === LotteryStatus.end && drawPrizeName"
    class="fixed z-[110] left-1/2 -translate-x-1/2 bottom-[120px] md:bottom-[140px]"
  >
    <button
      class="flex items-center gap-4 px-4 py-3 border shadow-xl rounded-2xl bg-base-100/75 backdrop-blur border-base-300 hover:bg-base-100/90 transition-colors"
      type="button"
      @click="openPrizeDetailPanel"
    >
      <div
        class="w-14 h-14 overflow-hidden shadow rounded-xl bg-base-200 shrink-0 flex items-center justify-center"
      >
        <ImageSync v-if="currentPrize?.picture?.url" :img-item="currentPrize.picture" />
      </div>
      <div class="text-left min-w-0">
        <div class="text-xs opacity-70">
          {{ t('data.currentPrize') }}
        </div>
        <div class="text-lg font-extrabold tracking-wide text-primary truncate max-w-[18rem]">
          {{ drawPrizeName }}
        </div>
        <div class="text-xs opacity-60">
          {{ t('table.detail') }}
        </div>
      </div>
    </button>

    <transition
      enter-active-class="transition-opacity duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-150"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isPrizeDetailOpen"
        class="fixed inset-0 z-[120]"
        @keydown.esc="closePrizeDetailPanel"
      >
        <button
          class="absolute inset-0 bg-black/40"
          type="button"
          aria-label="close"
          @click="closePrizeDetailPanel"
        />

        <transition
          enter-active-class="transition-transform duration-200 ease-out"
          enter-from-class="translate-x-full"
          enter-to-class="translate-x-0"
          leave-active-class="transition-transform duration-150 ease-in"
          leave-from-class="translate-x-0"
          leave-to-class="translate-x-full"
        >
          <aside
            v-if="isPrizeDetailOpen"
            class="absolute inset-y-0 right-0 w-[min(26rem,calc(100vw-1.25rem))] bg-base-100/90 backdrop-blur border-l border-base-300 shadow-2xl p-6 flex flex-col gap-6"
          >
            <div class="flex items-start justify-between gap-4">
              <div class="min-w-0">
                <div class="text-sm opacity-70">
                  {{ t('data.currentPrize') }}
                </div>
                <div class="mt-1 text-2xl font-extrabold tracking-wide text-primary break-words">
                  {{ drawPrizeName }}
                </div>
              </div>
              <button
                class="btn btn-ghost btn-sm"
                type="button"
                @click="closePrizeDetailPanel"
              >
                ✕
              </button>
            </div>

            <div v-if="currentPrize?.picture?.url" class="flex justify-center">
              <div class="w-full max-w-sm aspect-square overflow-hidden shadow-xl rounded-3xl bg-base-200">
                <ImageSync :img-item="currentPrize.picture" />
              </div>
            </div>
          </aside>
        </transition>
      </div>
    </transition>
  </div>
  <StarsBackground :home-background="homeBackground" />
  <PrizeList class="absolute left-0 top-32 z-10" />
</template>

<style scoped lang="scss">
</style>
