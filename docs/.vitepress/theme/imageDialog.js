import { reactive } from 'vue'

export const imageDialogState = reactive({
  open: false,
  src: '',
  alt: ''
})

export function openImageDialog(src, alt) {
  imageDialogState.open = true
  imageDialogState.src = src
  imageDialogState.alt = alt || ''
  document.body.style.overflow = 'hidden'
}

export function closeImageDialog() {
  imageDialogState.open = false
  document.body.style.overflow = ''
}
