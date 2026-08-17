<script setup>
import { ref, watch, nextTick, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  state: { type: Object, required: true },
  onClose: { type: Function, required: true }
})

const scale = ref(1)
const tx = ref(0)
const ty = ref(0)
const imgRef = ref(null)
const viewportRef = ref(null)
const closeBtnRef = ref(null)
const dragging = ref(false)
let dragged = false
let lastX = 0
let lastY = 0

watch(
  () => props.state.open,
  (open) => {
    if (open) {
      scale.value = 1
      tx.value = 0
      ty.value = 0
      dragging.value = false
      dragged = false
      nextTick(() => closeBtnRef.value?.focus())
    }
  }
)

function reset() {
  scale.value = 1
  tx.value = 0
  ty.value = 0
}

function clampTranslate() {
  const viewport = viewportRef.value
  const img = imgRef.value
  if (!viewport || !img) return
  const rect = img.getBoundingClientRect()
  const visualW = rect.width * scale.value
  const visualH = rect.height * scale.value
  const maxTx = Math.max(0, (visualW - viewport.clientWidth) / 2)
  const maxTy = Math.max(0, (visualH - viewport.clientHeight) / 2)
  tx.value = Math.min(maxTx, Math.max(-maxTx, tx.value))
  ty.value = Math.min(maxTy, Math.max(-maxTy, ty.value))
}

function applyZoomAt(target, screenX, screenY) {
  const img = imgRef.value
  if (!img) {
    scale.value = target
    return
  }
  const rect = img.getBoundingClientRect()
  const cx = screenX - (rect.left + rect.width / 2)
  const cy = screenY - (rect.top + rect.height / 2)
  const ratio = target / scale.value
  tx.value = cx - (cx - tx.value) * ratio
  ty.value = cy - (cy - ty.value) * ratio
  scale.value = target
  clampTranslate()
}

function onWheel(e) {
  const factor = e.deltaY < 0 ? 1.2 : 1 / 1.2
  const next = Math.min(6, Math.max(1, scale.value * factor))
  if (next === 1) {
    reset()
    return
  }
  applyZoomAt(next, e.clientX, e.clientY)
}

function onPointerDown(e) {
  dragging.value = false
  dragged = false
  if (scale.value <= 1) return
  dragging.value = true
  lastX = e.clientX
  lastY = e.clientY
  e.currentTarget.setPointerCapture?.(e.pointerId)
}

function onPointerMove(e) {
  if (!dragging.value) return
  const dx = e.clientX - lastX
  const dy = e.clientY - lastY
  if (Math.abs(dx) + Math.abs(dy) > 3) {
    dragged = true
  }
  tx.value += dx
  ty.value += dy
  lastX = e.clientX
  lastY = e.clientY
  clampTranslate()
}

function onPointerUp() {
  dragging.value = false
}

function onClickImage(e) {
  if (dragged) return
  if (scale.value > 1) {
    reset()
  } else {
    applyZoomAt(2, e.clientX, e.clientY)
  }
}

function onKeydown(e) {
  if (props.state.open && e.key === 'Escape') {
    props.onClose()
  }
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <div
    v-if="state.open"
    class="gs-image-dialog"
    role="dialog"
    aria-modal="true"
    :aria-label="state.alt || 'Image preview'"
    @click.self="onClose"
  >
    <div class="gs-image-dialog__frame">
      <div class="gs-image-dialog__titlebar">
        <span class="gs-image-dialog__title">{{ state.alt || 'Image preview' }}</span>
        <button ref="closeBtnRef" class="gs-image-dialog__close" title="Close (Esc)" @click="onClose">✕</button>
      </div>
      <div ref="viewportRef" class="gs-image-dialog__viewport" @wheel.prevent="onWheel">
        <img
          ref="imgRef"
          :src="state.src"
          :alt="state.alt"
          draggable="false"
          :class="{ 'is-dragging': dragging }"
          :style="{
            transform: `translate(${tx}px, ${ty}px) scale(${scale})`,
            cursor: scale > 1 ? 'grab' : 'zoom-in'
          }"
          @click="onClickImage"
          @pointerdown="onPointerDown"
          @pointermove="onPointerMove"
          @pointerup="onPointerUp"
          @pointercancel="onPointerUp"
        />
      </div>
      <div class="gs-image-dialog__hint">Click to zoom · drag to pan · scroll to zoom · Esc or click outside to close</div>
    </div>
  </div>
</template>
