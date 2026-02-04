<script setup lang="ts">
import { storeToRefs } from 'pinia'
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
    class="absolute left-1/2 -translate-x-1/2 z-[90] bottom-[120px] md:bottom-[140px] w-[calc(100vw-2rem)] max-w-2xl"
  >
    <div class="p-6 border shadow-xl card bg-base-100/90 backdrop-blur border-base-300">
      <div class="text-sm opacity-70 text-center">
        {{ t('data.currentPrize') }}
      </div>
      <div class="mt-2 text-5xl font-extrabold tracking-wide text-primary text-center">
        {{ drawPrizeName }}
      </div>
      <div v-if="currentPrize?.picture?.url" class="flex justify-center mt-6">
        <div class="w-40 h-40 overflow-hidden shadow-xl rounded-3xl bg-base-200">
          <ImageSync :img-item="currentPrize.picture" />
        </div>
      </div>
    </div>
  </div>
  <StarsBackground :home-background="homeBackground" />
  <PrizeList class="absolute left-0 top-32" />
</template>

<style scoped lang="scss">
</style>
