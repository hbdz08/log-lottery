<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { nextTick, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useScrollLock } from '@vueuse/core'
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
const prizeDetailPanelRef = ref<HTMLElement | null>(null)
const closeButtonRef = ref<HTMLButtonElement | null>(null)
const lastActiveElement = ref<HTMLElement | null>(null)

const isBodyScrollLocked = useScrollLock(document.body)

watch(isPrizeDetailOpen, async (open) => {
    isBodyScrollLocked.value = open
    if (!open) {
        lastActiveElement.value?.focus?.()
        return
    }
    lastActiveElement.value = (document.activeElement as HTMLElement | null)
    await nextTick()
    closeButtonRef.value?.focus?.()
})

watch(currentStatus, (status) => {
    if (status !== LotteryStatus.end && isPrizeDetailOpen.value) {
        isPrizeDetailOpen.value = false
    }
})

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
    class="fixed z-[110] left-1/2 -translate-x-1/2 bottom-[120px] md:bottom-[140px] pointer-events-none"
  >
    <button
      class="pointer-events-auto flex items-center gap-4 px-4 py-3 border shadow-xl rounded-2xl bg-base-100/75 backdrop-blur border-base-300 hover:bg-base-100/90 transition-colors"
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
  </div>

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
    >
      <button
        class="absolute inset-0 bg-transparent"
        type="button"
        aria-label="close"
        tabindex="-1"
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
          ref="prizeDetailPanelRef"
          tabindex="-1"
          role="dialog"
          aria-modal="true"
          :aria-label="`${t('data.currentPrize')}`"
          class="absolute inset-y-4 right-4 w-[min(28rem,calc(100vw-2rem))] rounded-3xl bg-base-100 border border-base-300 shadow-2xl p-5 md:p-6 flex flex-col"
          @keydown.esc.stop.prevent="closePrizeDetailPanel"
        >
          <header class="flex items-start justify-between gap-4 pb-4 border-b border-base-300/60">
            <div class="min-w-0">
              <div class="text-sm opacity-70">
                {{ t('data.currentPrize') }}
              </div>
              <div class="mt-1 text-2xl font-extrabold tracking-wide text-primary break-words">
                {{ drawPrizeName }}
              </div>
            </div>
            <button
              ref="closeButtonRef"
              class="btn btn-ghost btn-sm -mt-1 -mr-2"
              type="button"
              aria-label="close"
              @click="closePrizeDetailPanel"
            >
              ✕
            </button>
          </header>

          <div class="flex-1 min-h-0 overflow-y-auto hide-scrollbar pt-5">
            <section class="rounded-3xl bg-base-200/40 border border-base-300/60 p-4">
              <div class="w-full aspect-square overflow-hidden shadow-xl rounded-3xl bg-base-100 flex items-center justify-center">
                <ImageSync v-if="currentPrize?.picture?.url" :img-item="currentPrize.picture" />
                <div v-else class="text-sm opacity-70">
                  {{ t('table.image') }}
                </div>
              </div>
            </section>
          </div>

          <footer class="pt-4 border-t border-base-300/60">
            <button class="btn btn-primary w-full" type="button" @click="closePrizeDetailPanel">
              {{ t('button.close') }}
            </button>
          </footer>
        </aside>
      </transition>
    </div>
  </transition>
  <StarsBackground :home-background="homeBackground" />
  <PrizeList class="absolute left-0 top-32 z-10" />
</template>

<style scoped lang="scss">
</style>
